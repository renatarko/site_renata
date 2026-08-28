import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Reveal from "./Reveal";
import SITE from "./data";
import { entr } from "./util";
import Image from "next/image";
import Link from "next/link";

// abstract browser/app preview, no real image
function WorkMock({ hue, image }: { hue: number , image?: string}) {
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
				<div style={{ width: "100%", height: "100%", background: "rgba(255,255,255,0.1)", border: `1px solid ${acc}55` }} >
					<Image src={image} alt={image} width={800} height={600} style={{  width: "100%", height: "100%", borderRadius: 8 }} />
				</div>
			
			</div>
		</div>
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
							<Link
								key={p.title}
								href={p.link}
								className="work-stack-item"
								/* --i escalona o topo de cada card, criando a borda do baralho */
								style={{ "--i": i } as React.CSSProperties}
							>
							<motion.article
								key={p.title}
								className="work-card"
								layout
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
									<WorkMock hue={p.hue} image={p.image} />
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
						))}
					</AnimatePresence>
				</motion.div>
			</div>
		</section>
	);
}
