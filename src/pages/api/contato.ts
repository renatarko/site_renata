import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

/** Verified sender. Stays on Resend's test domain until a custom one is verified. */
const FROM = process.env.CONTACT_FROM || "Site Renata <contatorenatadev@rerko.net>";
const TO = process.env.CONTACT_TO || "renatakarolinarko@gmail.com";

const LIMITS = { nome: 120, contato: 160, projeto: 5000 };

function isEmail(v: string) {
	if (/\s/.test(v)) return false;
	const parts = v.split("@");
	return parts.length === 2 && parts[0].length > 0 && /^[^.].*\.[^.]{2,}$/.test(parts[1]);
}

const escapeHtml = (v: string) =>
	v.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c] as string);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "POST") {
		res.setHeader("Allow", "POST");
		return res.status(405).json({ error: "Método não permitido" });
	}

	const { nome, contato, projeto, empresa } = (req.body ?? {}) as Record<string, unknown>;

	// honeypot: humans never see this field, bots fill everything
	if (typeof empresa === "string" && empresa.trim() !== "") {
		return res.status(200).json({ ok: true });
	}

	const fields = { nome, contato, projeto };
	for (const [key, value] of Object.entries(fields)) {
		if (typeof value !== "string" || value.trim() === "") {
			return res.status(400).json({ error: `Campo "${key}" é obrigatório.` });
		}
		if (value.length > LIMITS[key as keyof typeof LIMITS]) {
			return res.status(400).json({ error: `Campo "${key}" é longo demais.` });
		}
	}

	const clean = {
		nome: (nome as string).trim(),
		contato: (contato as string).trim(),
		projeto: (projeto as string).trim(),
	};

	if (!process.env.RESEND_API_KEY) {
		console.error("[contato] RESEND_API_KEY não configurada");
		return res.status(500).json({ error: "Envio indisponível no momento." });
	}

	try {
		const { error } = await resend.emails.send({
			from: FROM,
			to: TO,
			// only a real address can be replied to; phone numbers would bounce
			replyTo: isEmail(clean.contato) ? clean.contato : undefined,
			subject: `Projeto novo — ${clean.nome}`,
			text: `Nome: ${clean.nome}\nContato: ${clean.contato}\n\nSobre o projeto:\n${clean.projeto}`,
			html: `<p><strong>Nome:</strong> ${escapeHtml(clean.nome)}</p>
<p><strong>Contato:</strong> ${escapeHtml(clean.contato)}</p>
<p><strong>Sobre o projeto:</strong><br>${escapeHtml(clean.projeto).replace(/\n/g, "<br>")}</p>`,
		});

		if (error) {
			console.error("[contato] Resend:", error);
			return res.status(502).json({ error: "Não consegui enviar agora. Tenta pelo WhatsApp?" });
		}

		return res.status(200).json({ ok: true });
	} catch (err) {
		console.error("[contato]", err);
		return res.status(500).json({ error: "Não consegui enviar agora. Tenta pelo WhatsApp?" });
	}
}
