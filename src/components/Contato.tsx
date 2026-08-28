import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import Reveal from "./Reveal";
import SITE from "./data";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./ui/form";

/**
 * Os limites espelham os de src/app/api/contato/route.ts de propósito.
 * Isto aqui é só experiência de uso: a validação que vale continua sendo a do
 * servidor, que não confia em nada que venha do cliente.
 */
const schema = z.object({
	nome: z.string().trim().min(1, "Me diz como te chamo.").max(120, "Nome longo demais."),
	contato: z
		.string()
		.trim()
		.min(1, "Preciso de um contato para te responder.")
		.max(160, "Contato longo demais."),
	projeto: z
		.string()
		.trim()
		.min(1, "Conta um pouquinho sobre o projeto.")
		.max(5000, "Texto longo demais — resume nos pontos principais?"),
});

type Fields = z.infer<typeof schema>;

const EMPTY: Fields = { nome: "", contato: "", projeto: "" };

function buildMessage({ nome, contato, projeto }: Fields) {
	return `Oi, Renata! Sou ${nome}.\n\nContato: ${contato}\n\nSobre o projeto: ${projeto}`;
}

export default function Contato() {
	const hasWhatsApp = SITE.whatsapp !== "";
	const [sent, setSent] = useState<"whatsapp" | "email" | null>(null);
	// honeypot — hidden from people, filled in by bots
	const [empresa, setEmpresa] = useState("");
	// both buttons submit the form, so a ref decides which path runs
	const intent = useRef<"whatsapp" | "email">("whatsapp");

	const form = useForm<Fields>({
		resolver: zodResolver(schema),
		defaultValues: EMPTY,
		mode: "onTouched",
	});
	const sending = form.formState.isSubmitting;

	const openWhatsApp = (fields: Fields) => {
		const url = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(buildMessage(fields))}`;
		// opened straight from the submit handler so it counts as a user gesture and dodges popup blockers
		window.open(url, "_blank", "noopener,noreferrer");
		setSent("whatsapp");
	};

	const sendEmail = async (fields: Fields) => {
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
			// erro de requisição vai para toast; erro de campo fica inline, no próprio campo
			toast.error(e instanceof Error ? e.message : "Não consegui enviar agora.", {
				description: "Se preferir, me chama no WhatsApp.",
			});
		}
	};

	const onSubmit = async (fields: Fields) => {
		if (hasWhatsApp && intent.current === "whatsapp") openWhatsApp(fields);
		else await sendEmail(fields);
	};

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
					<Form {...form}>
						<form className="form" onSubmit={form.handleSubmit(onSubmit)} noValidate>
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
												form.reset(EMPTY);
											}}
										>
											Escrever outra mensagem
										</button>
									</motion.div>
								) : (
									<motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
										<FormField
											control={form.control}
											name="nome"
											render={({ field }) => (
												<FormItem className="field">
													<FormLabel>Nome</FormLabel>
													<FormControl>
														<input type="text" placeholder="Como te chamo?" {...field} />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											control={form.control}
											name="contato"
											render={({ field }) => (
												<FormItem className="field">
													<FormLabel>Seu contato</FormLabel>
													<FormDescription className="hint">
														Onde eu te respondo — e-mail ou WhatsApp, você escolhe.
													</FormDescription>
													<FormControl>
														<input
															type="text"
															placeholder="seu@email.com ou (11) 91234-5678"
															{...field}
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											control={form.control}
											name="projeto"
											render={({ field }) => (
												<FormItem className="field">
													<FormLabel>Sobre o projeto</FormLabel>
													<FormControl>
														<textarea placeholder="Conte sua ideia, prazo, referências..." {...field} />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
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
									</motion.div>
								)}
							</AnimatePresence>
						</form>
					</Form>
				</Reveal>
			</div>
		</section>
	);
}
