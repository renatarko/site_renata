import Link from "next/link";

import PostCard from "../blog/PostCard";
import Reveal from "./Reveal";
import type { PostMeta } from "../blog/types";

/**
 * Teaser do blog na landing.
 *
 * Os posts NÃO são lidos aqui: a landing inteira é `"use client"` e o
 * posts.ts é `server-only`. Quem lê o disco é o Server Component em
 * src/app/page.tsx, que passa a lista já pronta como prop — PostMeta é um
 * objeto simples e atravessa a fronteira sem problema.
 */
export default function Blog({ posts }: { posts: PostMeta[] }) {
	// sem post publicado, a seção inteira some em vez de mostrar um vazio
	if (posts.length === 0) return null;

	return (
		<section className="sec" id="blog">
			<div className="wrap">
				<Reveal className="sec-head">
					<span className="kicker">// do blog</span>
					<h2>Respostas para as dúvidas que sempre chegam.</h2>
					<p>
						Site, Google e presença digital explicados sem jargão — do jeito que eu explico no WhatsApp para
						quem me procura.
					</p>
				</Reveal>

				<div className="post-grid">
					{posts.map((post, i) => (
						<Reveal key={post.slug} className="post-grid-item" delay={i * 0.08}>
							<PostCard post={post} nivel="h3" />
						</Reveal>
					))}
				</div>

				<div className="blog-sec-cta">
					<Link href="/blog" className="btn btn-ghost">
						Ver todos os textos
						<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<path d="M5 12h14M13 6l6 6-6 6" />
						</svg>
					</Link>
				</div>
			</div>
		</section>
	);
}
