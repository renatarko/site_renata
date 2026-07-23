import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SITE from "./data";

const go = (sel: string) => document.querySelector(sel)?.scrollIntoView({ behavior: "smooth", block: "start" });

export default function Servicos() {
	return (
		<section className="sec" id="servicos">
			<div className="wrap">
				<Reveal className="sec-head">
					<span className="kicker">// serviços</span>
					<h2>Um plano simples para tirar seu site do papel.</h2>
					<p>
						Sem orçamento gigante de uma vez só. Você paga uma mensalidade e recebe um site sob medida, com
						tudo incluso.
					</p>
				</Reveal>
				<div className="svc-grid">
					<Reveal>
						<motion.div
							className="svc-feature"
							whileHover={{ y: -6 }}
							transition={{ type: "spring", stiffness: 200, damping: 20 }}
						>
							<span className="badge">★ Plano principal</span>
							<h3>Site Sob Medida</h3>
							<div className="price">
								<span className="v grad">R$200</span>
								<span className="per">/mês</span>
							</div>
							<div className="price-note">Contrato de 12 meses · landing page ou site completo + blog</div>
							<ul className="svc-list">
								{SITE.planFeatures.map((f) => (
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
							<button
								className="btn btn-primary"
								style={{ width: "100%", justifyContent: "center" }}
								onClick={() => go("#contato")}
							>
								Quero meu site →
							</button>
						</motion.div>
					</Reveal>
					<Reveal delay={0.1} className="svc-side">
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
								Pedir orçamento →
							</a>
						</motion.div>
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
								Conversar sobre design →
							</a>
						</motion.div>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
