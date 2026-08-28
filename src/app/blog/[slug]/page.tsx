import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { blogPostingJsonLd, breadcrumbJsonLd } from "../../../blog/jsonld";
import { mdxComponents } from "../../../blog/mdx-components";
import { getAllPostMeta, getNeighbours, getPost } from "../../../blog/posts";

/**
 * Todo post vira HTML no build. Como não existe `dynamicParams`, um slug fora
 * desta lista é 404 direto — nada de ler o disco em runtime na Vercel.
 */
export const dynamicParams = false;

export function generateStaticParams() {
	return getAllPostMeta().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;
	const post = getPost(slug);
	if (!post) return {};

	const { title, description, date, cover, tags, draft } = post.meta;
	// o metadataBase do layout raiz torna esta relativa em absoluta — obrigatório
	// para o preview do WhatsApp, que ignora og:image relativa em silêncio
	const image = cover ?? "/assets/tumblr.webp";

	return {
		title,
		description,
		alternates: { canonical: `/blog/${slug}` },
		// rascunho aparece em dev, mas nunca deve ser indexado
		...(draft ? { robots: { index: false, follow: false } } : {}),
		openGraph: {
			type: "article",
			url: `/blog/${slug}`,
			title,
			description,
			publishedTime: date,
			tags,
			images: [{ url: image, width: 1200, height: 630 }],
		},
		twitter: { card: "summary_large_image", title, description, images: [image] },
	};
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const post = getPost(slug);
	if (!post) notFound();

	const { prev, next } = getNeighbours(slug);
	const data = new Date(`${post.meta.date}T12:00:00Z`).toLocaleDateString("pt-BR", {
		day: "2-digit",
		month: "long",
		year: "numeric",
	});

	return (
		<article className="article">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd(post.meta)) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(post.meta)) }}
			/>

			<div className="wrap">
				<nav className="breadcrumb" aria-label="Você está em">
					<Link href="/">Início</Link>
					<span aria-hidden="true">/</span>
					<Link href="/blog">Blog</Link>
				</nav>

				<header className="article-head">
					<p className="post-meta">
						<time dateTime={post.meta.date}>{data}</time>
						<span aria-hidden="true">·</span>
						<span>{post.meta.readingMinutes} min de leitura</span>
					</p>
					{/* o único <h1> da página: o corpo do .mdx começa em ## */}
					<h1>{post.meta.title}</h1>
					<p className="article-lead">{post.meta.description}</p>
					{post.meta.tags.length > 0 && (
						<div className="post-tags">
							{post.meta.tags.map((tag) => (
								<span key={tag}>{tag}</span>
							))}
						</div>
					)}
				</header>

				{post.meta.cover && (
					// eslint-disable-next-line @next/next/no-img-element
					<img className="article-cover" src={post.meta.cover} alt="" />
				)}

				<div className="prose">
					<MDXRemote
						source={post.content}
						components={mdxComponents}
						options={{
							mdxOptions: {
								remarkPlugins: [remarkGfm],
								// slug primeiro: o autolink precisa do id já existir
								rehypePlugins: [
									rehypeSlug,
									[rehypeAutolinkHeadings, { behavior: "wrap", properties: { className: "heading-link" } }],
								],
							},
						}}
					/>
				</div>

				{(prev || next) && (
					<nav className="post-nav" aria-label="Outros posts">
						{next ? (
							<Link href={`/blog/${next.slug}`} className="post-nav-item">
								<span className="post-nav-dir">← Mais recente</span>
								<span className="post-nav-title">{next.title}</span>
							</Link>
						) : (
							<span />
						)}
						{prev && (
							<Link href={`/blog/${prev.slug}`} className="post-nav-item post-nav-next">
								<span className="post-nav-dir">Mais antigo →</span>
								<span className="post-nav-title">{prev.title}</span>
							</Link>
						)}
					</nav>
				)}
			</div>
		</article>
	);
}
