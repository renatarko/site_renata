import { motion } from "framer-motion";
import { useId, useState } from "react";
import Reveal from "./Reveal";
import SITE from "./data";

const go = (sel: string) => document.querySelector(sel)?.scrollIntoView({ behavior: "smooth", block: "start" });

/**
 * Card de plano. No mobile a lista de itens fica atrás de um botão; no desktop
 * ela aparece sempre, exatamente como antes. Quem decide é o CSS — aqui só
 * existe o estado de aberto/fechado, que no desktop é ignorado.
 */
function PlanoCard({ plan }: { plan: (typeof SITE.plans)[number] }) {
	const [aberto, setAberto] = useState(false);
	const listaId = useId();

	return (
		<motion.div
			className={plan.featured ? "svc-feature" : "svc-feature svc-feature-plain"}
			whileHover={{ y: -6 }}
			transition={{ type: "spring", stiffness: 200, damping: 20 }}
		>
			<span className="badge">{plan.badge}</span>
			<h3>{plan.name}</h3>
			<div className="price">
				<span className="v grad">{plan.price}</span>
				<span className="per">/mês</span>
			</div>
			<div className="price-note">{plan.note}</div>
			{plan.inherits && <p className="svc-inherits">{plan.inherits}</p>}

			<button
				type="button"
				className="svc-toggle"
				aria-expanded={aberto}
				aria-controls={listaId}
				onClick={() => setAberto((v) => !v)}
			>
				<span>Veja o que está incluso!</span>
				<svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2" fill="none" aria-hidden="true">
					<path d="M6 9l6 6 6-6" />
				</svg>
			</button>

			{/* wrapper que anima de 0fr para 1fr; no desktop vira display:contents
			    e some do layout, deixando a lista exatamente como era */}
			<div className="svc-includes" data-aberto={aberto}>
				<ul className="svc-list" id={listaId}>
					{plan.features.map((f) => (
						<li key={f}>
							<span className="ck">
								<svg width="13" height="13" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" fill="none">
									<path d="M5 12l5 5L20 6" />
								</svg>
							</span>
							{f}
						</li>
					))}
				</ul>
			</div>

			<button
				className={plan.featured ? "btn btn-primary" : "btn btn-ghost"}
				style={{ width: "100%", justifyContent: "center" }}
				onClick={() => go("#contato")}
			>
				{plan.cta}
			</button>
		</motion.div>
	);
}

export default function Servicos() {
	return (
		<section className="sec" id="servicos">
			<div className="wrap">
				<Reveal className="sec-head">
					<span className="kicker">// serviços</span>
					<h2>Dois planos para tirar seu site do papel.</h2>
					<p>
						Sem orçamento gigante de uma vez só. Você paga uma mensalidade e recebe um site sob medida, com
						tudo incluso.
					</p>
				</Reveal>
				<div className="svc-plans">
					{SITE.plans.map((plan, i) => (
						<Reveal key={plan.id} delay={i * 0.1} y={30} scale={0.96} blur={8}>
							<PlanoCard plan={plan} />
						</Reveal>
					))}
				</div>
				<div className="svc-extras">
					<Reveal y={30} scale={0.96} blur={8}>
					<motion.div className="svc-card" whileHover={{ y: -5, borderColor: "var(--accent)" }}>
						<h4>Sistemas & Integrações</h4>
						<p>
							Plataformas, painéis administrativos, áreas de membros e integrações com pagamentos e APIs.
							Escopo e prazo combinados sob medida.
						</p>
						<a
							href="#contato"
							className="small-cta"
							onClick={(e) => {
								e.preventDefault();
								go("#contato");
							}}
						>
							Pedir orçamento 
						</a>
					</motion.div>
					</Reveal>
					<Reveal delay={0.1} y={30} scale={0.96} blur={8}>
					<motion.div className="svc-card" whileHover={{ y: -5, borderColor: "var(--accent)" }}>
						<h4>Design UI/UX no Figma</h4>
						<p>
							Protótipos navegáveis e design system antes de uma linha de código. Ideal pra validar a
							ideia com o time ou investidores.
						</p>
						<a
							href="#contato"
							className="small-cta"
							onClick={(e) => {
								e.preventDefault();
								go("#contato");
							}}
						>
							Conversar sobre design 
						</a>
					</motion.div>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
