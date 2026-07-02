import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SITE } from "../../data/site";
import Reveal from "./Reveal";

export default function Contato() {
	const [sent, setSent] = useState(false);
	const socials: [string, string][] = [
		["E-mail", SITE.email],
		["WhatsApp", SITE.whatsapp],
		["LinkedIn", "/in/renatakarolina"],
		["GitHub", "@renatakarolina"],
		["Instagram", "@renata.dev"],
	];
	return (
		<section className="sec" id="contato">
			<div className="wrap contact-grid">
				<div className="contact">
					<Reveal>
						<span className="kicker">// contato</span>
					</Reveal>
					<Reveal delay={0.05}>
						<h2>
							Bora tirar sua
							<br />
							ideia <span className="grad">do papel?</span>
						</h2>
					</Reveal>
					<Reveal delay={0.1}>
						<p className="lead">
							Me conta um pouco sobre o projeto. Respondo rapidinho — geralmente no mesmo dia.
						</p>
					</Reveal>
					<Reveal delay={0.15}>
						<div className="socials">
							{socials.map(([k, v]) => (
								<motion.a
									key={k}
									href="#"
									onClick={(e) => e.preventDefault()}
									className="social-row"
									whileHover={{ x: 6 }}
								>
									<span className="k">{k}</span>
									<span className="v">{v}</span>
								</motion.a>
							))}
						</div>
					</Reveal>
				</div>
				<Reveal delay={0.1}>
					<form
						className="form"
						onSubmit={(e) => {
							e.preventDefault();
							setSent(true);
						}}
					>
						<AnimatePresence mode="wait">
							{sent ? (
								<motion.div
									key="ok"
									className="form-ok"
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
								>
									<div className="ck-big">
										<svg width="26" height="26" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" fill="none">
											<path d="M5 12l5 5L20 6" />
										</svg>
									</div>
									<h3 style={{ fontSize: 24 }}>Mensagem enviada!</h3>
									<p style={{ color: "var(--text-2)", marginTop: 8 }}>
										Obrigada pelo contato — em breve eu respondo. ✨
									</p>
								</motion.div>
							) : (
								<motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
									<div className="field">
										<label>Nome</label>
										<input type="text" placeholder="Como te chamo?" required />
									</div>
									<div className="field">
										<label>E-mail ou WhatsApp</label>
										<input type="text" placeholder="pra eu te responder" required />
									</div>
									<div className="field">
										<label>Sobre o projeto</label>
										<textarea placeholder="Conte sua ideia, prazo, referências..." required></textarea>
									</div>
									<button type="submit" className="btn btn-primary">
										Enviar mensagem →
									</button>
								</motion.div>
							)}
						</AnimatePresence>
					</form>
				</Reveal>
			</div>
		</section>
	);
}
