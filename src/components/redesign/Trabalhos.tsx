import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SITE } from "../../data/site";
import { entr } from "./helpers";
import Reveal from "./Reveal";

function WorkMock({ hue }: { hue: number }) {
	// preview abstrato de browser/app, sem imagem real
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
				<div style={{ display: "flex", gap: 12 }}>
					<div style={{ flex: 1, display: "grid", gap: 9 }}>
						<div style={{ width: "72%", height: 13, borderRadius: 5, background: acc }} />
						<div style={{ width: "90%", height: 8, borderRadius: 4, background: "rgba(255,255,255,0.22)" }} />
						<div style={{ width: "82%", height: 8, borderRadius: 4, background: "rgba(255,255,255,0.16)" }} />
						<div style={{ width: 90, height: 26, borderRadius: 8, background: acc, marginTop: 6 }} />
					</div>
					<div
						style={{
							width: 92,
							height: 92,
							borderRadius: 14,
							background: "rgba(255,255,255,0.1)",
							border: `1px solid ${acc}55`,
						}}
					/>
				</div>
				<div style={{ display: "flex", gap: 8, marginTop: 16 }}>
					{[0, 1, 2].map((i) => (
						<div
							key={i}
							style={{
								flex: 1,
								height: 40,
								borderRadius: 10,
								background: "rgba(255,255,255,0.07)",
								border: "1px solid rgba(255,255,255,0.08)",
							}}
						/>
					))}
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
				<div className="filters">
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
				<motion.div className="work-grid" layout>
					<AnimatePresence mode="popLayout">
						{list.map((p, i) => (
							<motion.article
								key={p.title}
								className="work-card"
								layout
								initial={entr({ opacity: 0, y: 30 })}
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
									<WorkMock hue={p.hue} />
									<span className="work-cat">{p.catLabel}</span>
								</div>
								<div className="work-body">
									<h3>{p.title}</h3>
									<p>{p.desc}</p>
									<div className="work-tags">
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
						))}
					</AnimatePresence>
				</motion.div>
			</div>
		</section>
	);
}
