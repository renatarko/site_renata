import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import Reveal from "./Reveal";
import SITE from "./data";

interface Fields {
	nome: string;
	contato: string;
	projeto: string;
}

const EMPTY: Fields = { nome: "", contato: "", projeto: "" };

function buildMessage({ nome, contato, projeto }: Fields) {
	return `Oi, Renata! Sou ${nome}.\n\nContato: ${contato}\n\nSobre o projeto: ${projeto}`;
}

export default function Contato() {
	const [fields, setFields] = useState<Fields>(EMPTY);
	const [sent, setSent] = useState<"whatsapp" | "email" | null>(null);
	const [sending, setSending] = useState(false);
	const [error, setError] = useState<string | null>(null);
	// honeypot — hidden from people, filled in by bots
	const [empresa, setEmpresa] = useState("");
	// both buttons submit the form so the browser still runs `required` validation
	const intent = useRef<"whatsapp" | "email">("whatsapp");

	const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
		setFields((f) => ({ ...f, [k]: e.target.value }));

	const openWhatsApp = () => {
		const url = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(buildMessage(fields))}`;
		// opened straight from the submit handler so it counts as a user gesture and dodges popup blockers
		window.open(url, "_blank", "noopener,noreferrer");
		setSent("whatsapp");
	};

	const sendEmail = async () => {
		setSending(true);
		setError(null);
		try {
			const res = await fetch("/api/contato", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ ...fields, empresa }),
			});
			const data = await res.json().catch(() => ({}));
			if (!res.ok) throw new Error(data.error || "Não consegui enviar agora.");
			setSent("email");
		} catch (e) {
			setError(e instanceof Error ? e.message : "Não consegui enviar agora.");
		} finally {
			setSending(false);
		}
	};

	const hasWhatsApp = SITE.whatsapp !== "";

	let submitLabel = "Enviar por e-mail →";
	if (hasWhatsApp) submitLabel = "Chamar no WhatsApp →";
	else if (sending) submitLabel = "Enviando...";

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
							{SITE.socials.map((s) => (
								<motion.a
									key={s.k}
									href={s.href || "#"}
									target={s.href && s.href.startsWith("http") ? "_blank" : undefined}
									rel={s.href && s.href.startsWith("http") ? "noopener noreferrer" : undefined}
									onClick={(e) => {
										if (!s.href) e.preventDefault();
									}}
									className="social-row"
									whileHover={{ x: 6 }}
								>
									<span className="k">{s.k}</span>
									<span className="v">{s.v}</span>
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
							if (sending) return;
							if (hasWhatsApp && intent.current === "whatsapp") openWhatsApp();
							else void sendEmail();
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
									<h3 style={{ fontSize: 24 }}>{sent === "whatsapp" ? "Quase lá!" : "Recebido!"}</h3>
									<p style={{ color: "var(--text-2)", marginTop: 8 }}>
										{sent === "whatsapp"
											? "Abri o WhatsApp com sua mensagem pronta — é só apertar enviar por lá. ✨"
											: "Mensagem enviada! Te respondo no contato que você deixou. ✨"}
									</p>
									<button
										type="button"
										className="btn btn-ghost"
										style={{ marginTop: 20 }}
										onClick={() => {
											setSent(null);
											setFields(EMPTY);
										}}
									>
										Escrever outra mensagem
									</button>
								</motion.div>
							) : (
								<motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
									<div className="field">
										<label htmlFor="nome">Nome</label>
										<input
											id="nome"
											type="text"
											placeholder="Como te chamo?"
											value={fields.nome}
											onChange={set("nome")}
											required
										/>
									</div>
									<div className="field">
										<label htmlFor="contato">Seu contato</label>
										<p className="hint">Onde eu te respondo — e-mail ou WhatsApp, você escolhe.</p>
										<input
											id="contato"
											type="text"
											placeholder="seu@email.com ou (11) 91234-5678"
											value={fields.contato}
											onChange={set("contato")}
											required
										/>
									</div>
									<div className="field">
										<label htmlFor="projeto">Sobre o projeto</label>
										<textarea
											id="projeto"
											placeholder="Conte sua ideia, prazo, referências..."
											value={fields.projeto}
											onChange={set("projeto")}
											required
										/>
									</div>
									<input
										type="text"
										name="empresa"
										className="hp"
										tabIndex={-1}
										autoComplete="off"
										aria-hidden="true"
										value={empresa}
										onChange={(e) => setEmpresa(e.target.value)}
									/>
									<button
										type="submit"
										className="btn btn-primary"
										disabled={sending}
										onClick={() => (intent.current = hasWhatsApp ? "whatsapp" : "email")}
									>
										{submitLabel}
									</button>
									{hasWhatsApp && (
										<p className="form-alt">
											ou{" "}
											<button
												type="submit"
												disabled={sending}
												onClick={() => (intent.current = "email")}
											>
												{sending ? "enviando..." : "enviar por e-mail"}
											</button>
										</p>
									)}
									{error && (
										<p className="form-error" role="alert">
											{error}
										</p>
									)}
								</motion.div>
							)}
						</AnimatePresence>
					</form>
				</Reveal>
			</div>
		</section>
	);
}
