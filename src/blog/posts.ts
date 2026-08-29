/**
 * Leitura do conteúdo. SÓ SERVIDOR.
 *
 * O `server-only` é a versão App Router da fronteira que o docs/blog.md
 * desenhava com um `throw` se `typeof window !== "undefined"`: se um Client
 * Component importar este arquivo, o build falha com uma mensagem clara em vez
 * de estourar num `Can't resolve 'fs'` no meio do bundle.
 *
 * Os tipos moram em `./types` justamente para que o cliente possa usá-los sem
 * arrastar este módulo junto.
 */
import "server-only";

import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

import type { Post, PostMeta } from "./types";

const DIR = path.join(process.cwd(), "content", "blog");

/**
 * Rascunhos ficam commitados mas fora do ar. Em `npm run dev` eles aparecem,
 * para dar para trabalhar no texto e ver o card no índice; em produção não
 * existem — nem no /blog, nem no sitemap, nem como rota (dão 404).
 */
const SHOW_DRAFTS = process.env.NODE_ENV === "development";

/** Média de leitura em português adulto. Arredonda para cima, mínimo 1. */
function readingMinutes(body: string): number {
	const words = body.trim().split(/\s+/).length;
	return Math.max(1, Math.round(words / 200));
}

/**
 * Sem aspas no frontmatter, o js-yaml do gray-matter devolve um objeto `Date`
 * em vez de string. A convenção é escrever com aspas; esta função é a segunda
 * linha de defesa, e recorta para `YYYY-MM-DD` (o fuso do toISOString não
 * importa: a data do post não tem hora).
 */
function normalizeDate(value: unknown, slug: string): string {
	const date = new Date(value as string);
	if (Number.isNaN(date.getTime())) {
		throw new Error(`[blog] "${slug}": campo \`date\` ausente ou inválido no frontmatter.`);
	}
	return date.toISOString().slice(0, 10);
}

function require_(value: unknown, field: string, slug: string): string {
	if (typeof value !== "string" || !value.trim()) {
		throw new Error(`[blog] "${slug}": campo \`${field}\` obrigatório no frontmatter.`);
	}
	return value.trim();
}

/**
 * `null` para arquivo em branco: dá para criar o .mdx e começar a escrever sem
 * derrubar o build. Qualquer arquivo COM conteúdo é validado a sério — um
 * `title` com typo tem que estourar, senão o post some do site em silêncio.
 */
function parse(slug: string): Post | null {
	// trimStart porque o gray-matter só reconhece o frontmatter quando o `---`
	// está na PRIMEIRA linha: uma linha em branco antes dele fazia o arquivo
	// inteiro virar corpo, e o post quebrava o build por "title obrigatório".
	const raw = fs.readFileSync(path.join(DIR, `${slug}.mdx`), "utf8").trimStart();
	if (!raw) return null;

	const { data, content } = matter(raw);

	return {
		meta: {
			slug,
			title: require_(data.title, "title", slug),
			description: require_(data.description, "description", slug),
			date: normalizeDate(data.date, slug),
			tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
			cover: typeof data.cover === "string" && data.cover ? data.cover : null,
			draft: data.draft === true,
			readingMinutes: readingMinutes(content),
		},
		content,
	};
}

/** Todos os posts visíveis, do mais recente para o mais antigo. */
export function getAllPosts(): Post[] {
	if (!fs.existsSync(DIR)) return [];

	return fs
		.readdirSync(DIR)
		.filter((file) => file.endsWith(".mdx"))
		.map((file) => parse(file.replace(/\.mdx$/, "")))
		.filter((post): post is Post => post !== null)
		.filter((post) => SHOW_DRAFTS || !post.meta.draft)
		.sort((a, b) => b.meta.date.localeCompare(a.meta.date));
}

export function getAllPostMeta(): PostMeta[] {
	return getAllPosts().map((post) => post.meta);
}

/** `null` quando o slug não existe ou é rascunho em produção — vira 404. */
export function getPost(slug: string): Post | null {
	if (!/^[a-z0-9-]+$/.test(slug)) return null;
	if (!fs.existsSync(path.join(DIR, `${slug}.mdx`))) return null;

	const post = parse(slug);
	if (!post) return null;
	if (post.meta.draft && !SHOW_DRAFTS) return null;
	return post;
}

/**
 * Vizinhos na ordem cronológica, para o rodapé do artigo. `prev` é o post mais
 * antigo (o anterior na linha do tempo) e `next` o mais recente.
 */
export function getNeighbours(slug: string): { prev: PostMeta | null; next: PostMeta | null } {
	const all = getAllPostMeta();
	const i = all.findIndex((post) => post.slug === slug);
	if (i === -1) return { prev: null, next: null };
	return { prev: all[i + 1] ?? null, next: all[i - 1] ?? null };
}
