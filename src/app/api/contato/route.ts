import { NextResponse } from "next/server";
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

// O 405 automático do Next não manda o header `Allow`, que a RFC 7231 exige e
// que o handler antigo mandava. Declarar os outros métodos restaura o header e
// o mesmo corpo de erro de antes.
const methodNotAllowed = () =>
	NextResponse.json(
		{ error: "Método não permitido" },
		{ status: 405, headers: { Allow: "POST" } }
	);

export const GET = methodNotAllowed;
export const PUT = methodNotAllowed;
export const PATCH = methodNotAllowed;
export const DELETE = methodNotAllowed;

export async function POST(req: Request) {
	let body: Record<string, unknown>;
	try {
		body = (await req.json()) ?? {};
	} catch {
		return NextResponse.json({ error: "Corpo inválido." }, { status: 400 });
	}

	const { nome, contato, projeto, empresa } = body;

	// honeypot: humans never see this field, bots fill everything
	if (typeof empresa === "string" && empresa.trim() !== "") {
		return NextResponse.json({ ok: true });
	}

	const fields = { nome, contato, projeto };
	for (const [key, value] of Object.entries(fields)) {
		if (typeof value !== "string" || value.trim() === "") {
			return NextResponse.json({ error: `Campo "${key}" é obrigatório.` }, { status: 400 });
		}
		if (value.length > LIMITS[key as keyof typeof LIMITS]) {
			return NextResponse.json({ error: `Campo "${key}" é longo demais.` }, { status: 400 });
		}
	}

	const clean = {
		nome: (nome as string).trim(),
		contato: (contato as string).trim(),
		projeto: (projeto as string).trim(),
	};

	if (!process.env.RESEND_API_KEY) {
		console.error("[contato] RESEND_API_KEY não configurada");
		return NextResponse.json({ error: "Envio indisponível no momento." }, { status: 500 });
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
			return NextResponse.json(
				{ error: "Não consegui enviar agora. Tenta pelo WhatsApp?" },
				{ status: 502 }
			);
		}

		return NextResponse.json({ ok: true });
	} catch (err) {
		console.error("[contato]", err);
		return NextResponse.json(
			{ error: "Não consegui enviar agora. Tenta pelo WhatsApp?" },
			{ status: 500 }
		);
	}
}
