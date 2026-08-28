import { SITE_URL } from "../lib/site";

import type { PostMeta } from "./types";

const AUTHOR = {
	"@type": "Person",
	name: "Renata Karolina de Oliveira",
	url: SITE_URL,
} as const;

const abs = (path: string) => (path.startsWith("http") ? path : `${SITE_URL}${path}`);

/**
 * Dados estruturados do artigo. A Metadata API cobre meta e Open Graph, mas
 * não emite JSON-LD — é o único pedaço de SEO que continua na mão.
 */
export function blogPostingJsonLd(post: PostMeta) {
	const url = abs(`/blog/${post.slug}`);
	return {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		mainEntityOfPage: { "@type": "WebPage", "@id": url },
		url,
		headline: post.title,
		description: post.description,
		image: [abs(post.cover ?? "/assets/tumblr.webp")],
		datePublished: post.date,
		dateModified: post.date,
		author: AUTHOR,
		publisher: AUTHOR,
		keywords: post.tags.join(", "),
		inLanguage: "pt-BR",
	};
}

export function breadcrumbJsonLd(post: PostMeta) {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{ "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
			{ "@type": "ListItem", position: 2, name: "Blog", item: abs("/blog") },
			{ "@type": "ListItem", position: 3, name: post.title, item: abs(`/blog/${post.slug}`) },
		],
	};
}
