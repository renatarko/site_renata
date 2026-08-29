import Link from "next/link";

import type { PostMeta } from "./types";

/**
 * Card do índice, espelhando o .work-card dos projetos.
 *
 * Importa `PostMeta` com `import type` de propósito: o tipo some na compilação,
 * então este componente nunca arrasta o posts.ts (e o `fs`) junto.
 */
/** Hash estável do slug numa matiz entre 230 e 299 — do índigo ao roxo. */
function hueFromSlug(slug: string): number {
	let h = 0;
	for (const char of slug) h = (h * 31 + char.charCodeAt(0)) % 70;
	return 230 + h;
}

/**
 * `nivel` existe por causa da hierarquia de headings: em /blog o h1 é o título
 * da página e o card é h2; na home o h2 já é o título da seção, então o card
 * desce para h3. Continua sem pular nível nos dois casos.
 */
export default function PostCard({ post, nivel = "h2" }: { post: PostMeta; nivel?: "h2" | "h3" }) {
	const Titulo = nivel;

	const data = new Date(`${post.date}T12:00:00Z`).toLocaleDateString("pt-BR", {
		day: "2-digit",
		month: "short",
		year: "numeric",
	});

	return (
		<Link href={`/blog/${post.slug}`} className="post-card">
			{/* Sem capa os cards sairiam todos iguais. A matiz vem do slug e fica
			    presa na faixa violeta/índigo da marca — mesma ideia do campo `hue`
			    dos cards de projeto. */}
			<div className="post-thumb" style={{ "--post-hue": hueFromSlug(post.slug) } as React.CSSProperties}>
				{post.cover ? (
					// eslint-disable-next-line @next/next/no-img-element
					<img src={post.cover} alt="" loading="lazy" decoding="async" />
				) : (
					// sem capa, o gradiente da marca com a inicial do título
					<span className="post-thumb-fallback" aria-hidden="true">
						{post.title.charAt(0)}
					</span>
				)}
				{post.draft && <span className="post-draft">rascunho</span>}
			</div>
			<div className="post-body">
				<p className="post-meta">
					<time dateTime={post.date}>{data}</time>
					<span aria-hidden="true">·</span>
					<span>{post.readingMinutes} min de leitura</span>
				</p>
				<Titulo>{post.title}</Titulo>
				<p className="post-desc">{post.description}</p>
				{post.tags.length > 0 && (
					<div className="post-tags">
						{post.tags.slice(0, 3).map((tag) => (
							<span key={tag}>{tag}</span>
						))}
					</div>
				)}
			</div>
		</Link>
	);
}
