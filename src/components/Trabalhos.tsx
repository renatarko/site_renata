import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import SITE from "./data";
import { entr } from "./util";
import Image from "next/image";
import Link from "next/link";

// abstract browser/app preview, no real image
function WorkMock({ hue, image, title }: { hue: number; image: string; title: string }) {
	const bg = `linear-gradient(150deg, hsl(${hue} 60% 16%), hsl(${(hue + 30) % 360} 55% 9%))`;
	const acc = `hsl(${hue} 80% 68%)`;
	return (
		<div className="mock" style={{ background: bg }}>
			<div style={{ position: "absolute", inset: 0, padding: "14px 16px" }}>
				<div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
					{["#ff5f57", "#febc2e", "#28c840"].map((c) => (
						<span key={c} style={{ width: 9, height: 9, borderRadius: 9, background: c, opacity: 0.8 }} />
					))}
				</div>
				{/* `fill` em vez de width/height: quem dimensiona é o CSS, e a proporção
				    declarada (800x600) não batia com a renderizada. Com position:relative
				    no pai o next/image ocupa a caixa inteira, e o object-fit: cover
				    recorta em vez de esticar — as capturas têm proporções entre 1.12 e
				    1.87 e todas iam para a mesma caixa de 1.64. O recorte sai do topo,
				    que é onde fica o começo da página. */}
				<div style={{ position: "relative", width: "100%", height: "100%", background: "rgba(255,255,255,0.1)", border: `1px solid ${acc}55` }} >
					<Image src={image} alt={`Prévia do projeto ${title}`} fill sizes="(max-width: 980px) 100vw, 600px" style={{ objectFit: "cover", objectPosition: "top center", borderRadius: 8 }} />
				</div>
			
			</div>
		</div>
	);
}

/** true acima de 980px. O efeito é só desktop: no mobile o card é sticky, e um
 *  transform nele quebraria o empilhamento. */
function useDesktop() {
	const [desktop, setDesktop] = useState(false);
	useEffect(() => {
		const mq = window.matchMedia("(min-width: 981px)");
		const on = () => setDesktop(mq.matches);
		on();
		mq.addEventListener("change", on);
		return () => mq.removeEventListener("change", on);
	}, []);
	return desktop;
}

/**
 * Card com transição ligada à rolagem: vem da lateral, levemente inclinado e
 * menor, e converge para o centro conforme a seção sobe. Reversível ao subir.
 *
 * Usa useScroll do Framer em vez de animation-timeline do CSS: a view timeline
 * não ativava neste elemento (currentTime null em qualquer posição, mesmo com o
 * card intersectando a viewport), nem anônima nem nomeada no container. O
 * Framer já está no projeto, então não custa bundle.
 *
 * Quem anima é o wrapper; o hover continua no card, senão o transform daqui
 * sobrescreveria o whileHover.
 */
function CardProjeto({ p, i }: { p: (typeof SITE.projects)[number]; i: number }) {
	const ref = useRef<HTMLDivElement>(null);
	const desktop = useDesktop();
	const semMovimento = useReducedMotion();
	const ativo = desktop && !semMovimento;

	const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
	const dir = i % 2 === 0 ? -1 : 1;   // coluna esquerda vem da esquerda, direita da direita
	const x = useTransform(scrollYProgress, [0, 1], [70 * dir, 0]);
	const rotate = useTransform(scrollYProgress, [0, 1], [2.5 * dir, 0]);
	const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
	const opacity = useTransform(scrollYProgress, [0, 1], [0.25, 1]);

	return (
		<motion.div
			ref={ref}
			className="work-stack-item"
			style={(ativo ? { x, rotate, scale, opacity, "--i": i } : { "--i": i }) as any}
		>
			<Link href={p.link}>
				<motion.article
					className="work-card"
					initial={entr({ opacity: 0, y: 30 }) as any}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, scale: 0.95 }}
					transition={{ duration: 0.45, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
					whileHover={{
						y: -8,
						boxShadow: "0 40px 80px -30px rgba(0,0,0,0.7)",
						borderColor: "var(--accent)",
					}}
				>
					<div className="work-thumb">
						<WorkMock hue={p.hue} image={p.image} title={p.title} />
						<span className="work-cat">{p.catLabel}</span>
					</div>
					<div className="work-body">
						<h3>{p.title}</h3>
						<p>{p.desc}</p>
						<div className="work-tags flex flex-wrap gap-2 mt-4">
							{p.tags.map((t) => (
								<span key={t}>{t}</span>
							))}
						</div>
					</div>
					<div className="work-arrow">
						<svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.4" fill="none">
							<path d="M7 17L17 7M17 7H9M17 7v8" />
						</svg>
					</div>
				</motion.article>
			</Link>
		</motion.div>
	);
}

export default function Trabalhos() {
	const [filter, setFilter] = useState("Tudo");
	const list = filter === "Tudo" ? SITE.projects : SITE.projects.filter((p) => p.cat === filter);

	return (
		<section className="sec" id="trabalhos">
			<div className="wrap">
				<Reveal className="sec-head">
					<span className="kicker">// trabalhos selecionados</span>
					<h2>Projetos que foram do briefing ao ar.</h2>
					<p>
						Landing pages, sites institucionais com blog, integrações e sistemas completos — cada um pensado
						para o objetivo do cliente.
					</p>
				</Reveal>
				<div className="flex flex-wrap gap-2.5 mb-9">
					{SITE.filters.map((f) => (
						<button
							key={f}
							className={"filter" + (filter === f ? " active" : "")}
							onClick={() => setFilter(f)}
						>
							{f}
						</button>
					))}
				</div>
				{/* sem `layout` aqui de propósito: ele aplica transform no container
				    durante a troca de filtro, e ancestral com transform quebra o
				    position: sticky do empilhamento no mobile. As animações por
				    card continuam. */}
				<motion.div className="work-grid">
					<AnimatePresence mode="popLayout">
						{list.map((p, i) => (
							<CardProjeto key={p.title} p={p} i={i} />
						))}
					</AnimatePresence>
				</motion.div>
			</div>
		</section>
	);
}
