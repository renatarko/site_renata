import { MotionValue, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { RefObject, useEffect, useRef, useState } from "react";
import SITE from "./data";

type Tech = (typeof SITE.stack)[number]["items"][number];

/**
 * Item da stack. Começa empilhado no topo da coluna, junto com todos os outros,
 * e vai "assentando" na própria posição conforme a seção rola.
 *
 * O deslocamento inicial é a distância REAL do item até o topo da lista, medida
 * depois da montagem — por isso todos partem visualmente do mesmo ponto. Fixar
 * um valor por índice só funcionaria se todos tivessem exatamente a mesma
 * altura, o que deixa de valer se um nome quebrar em duas linhas.
 */
function TechItem({ t, index, progresso, ativo }: {
	t: Tech;
	index: number;
	progresso: MotionValue<number>;
	ativo: boolean;
}) {
	const ref = useRef<HTMLDivElement>(null);
	const [alturaAte, setAlturaAte] = useState(0);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		// relativo à LISTA, não ao offsetParent (que é a section): assim os itens
		// se acumulam no topo da própria coluna, e não por cima do cabeçalho
		const medir = () => setAlturaAte(el.offsetTop - (el.parentElement?.offsetTop ?? 0));
		medir();
		// ResizeObserver e não só o resize da janela: no primeiro render o layout
		// ainda não assentou (fontes, imagens) e a medida saía zerada
		const ro = new ResizeObserver(medir);
		if (el.parentElement) ro.observe(el.parentElement);
		return () => ro.disconnect();
	}, []);

	// cada item assenta um pouco depois do anterior
	const inicio = Math.min(0.55, index * 0.07);
	const y = useTransform(progresso, [inicio, inicio + 0.4], [-alturaAte, 0], { clamp: true });
	const opacity = useTransform(progresso, [inicio, inicio + 0.18], [0, 1], { clamp: true });

	return (
		<motion.div
			ref={ref}
			className="tech"
			style={ativo ? { y, opacity } : undefined}
			whileHover={{ x: 6, borderColor: "var(--accent)", backgroundColor: "var(--surface-2)" }}
			transition={{ type: "spring", stiffness: 300, damping: 20 }}
		>
			<motion.span
				className="ic"
				style={{ background: t.color + "22", color: t.color, border: `1px solid ${t.color}44` }}
				whileHover={{ rotate: [0, -10, 10, 0], scale: 1.12 }}
				transition={{ duration: 0.5 }}
			>
				{t.abbr}
			</motion.span>
			<span className="name">{t.name}</span>
			<span className="lvl">{t.lvl}</span>
		</motion.div>
	);
}

export default function StackSection() {
	const secRef = useRef<HTMLElement>(null);
	const semMovimento = useReducedMotion();
	const ativo = !semMovimento;

	// progresso ao longo da seção: começa quando o topo dela encosta na base da
	// viewport e só termina quando a base da seção chega ao meio da tela — assim o
	// assentamento acontece DURANTE a rolagem da seção, e não antes dela aparecer
	const { scrollYProgress } = useScroll({
		target: secRef as RefObject<HTMLElement>,
		offset: ["start end", "end center"],
	});

	return (
		<section className="sec" id="stack" ref={secRef}>
			<div className="wrap">
				{/* sem Reveal aqui: ele animaria a coluna inteira ao entrar na tela e
				    se somaria ao assentamento de cada item, embolando os dois. */}
				<div className="sec-head">
					<span className="kicker">// stack principal</span>
					<h2>As ferramentas por trás dos projetos.</h2>
					<p>Tecnologias modernas, escolhidas para entregar sites rápidos, escaláveis e fáceis de manter.</p>
				</div>
				<div className="stack-groups">
					{SITE.stack.map((g) => (
						<div key={g.group} className="stack-col">
							<h4>{g.group}</h4>
							<div className="flex flex-col gap-3">
								{g.items.map((t, i) => (
									<TechItem key={t.name} t={t} index={i} progresso={scrollYProgress} ativo={ativo} />
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
