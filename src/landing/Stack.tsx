import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SITE from "./data";

export default function StackSection() {
	return (
		<section className="sec" id="stack">
			<div className="wrap">
				<Reveal className="sec-head">
					<span className="kicker">// stack principal</span>
					<h2>As ferramentas por trás dos projetos.</h2>
					<p>Tecnologias modernas, escolhidas para entregar sites rápidos, escaláveis e fáceis de manter.</p>
				</Reveal>
				<div className="stack-groups">
					{SITE.stack.map((g, gi) => (
						<Reveal key={g.group} className="stack-col" delay={gi * 0.08}>
							<h4>{g.group}</h4>
							<div className="stack-items">
								{g.items.map((t) => (
									<motion.div
										key={t.name}
										className="tech"
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
								))}
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
