import type { MetadataRoute } from "next";

import { getAllPostMeta } from "../blog/posts";
import { SITE_URL } from "../lib/site";

// Convenção de arquivo do App Router: o Next gera /sitemap.xml a partir daqui,
// no build. Substitui o script de postbuild que o docs/blog.md previa — sem
// dependência nova e sem ler o disco em runtime.
export default function sitemap(): MetadataRoute.Sitemap {
	const posts = getAllPostMeta();

	// o post mais recente serve de lastmod do índice
	const ultimoPost = posts[0]?.date;

	return [
		{
			url: SITE_URL,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1,
		},
		{
			url: `${SITE_URL}/blog`,
			lastModified: ultimoPost ? new Date(ultimoPost) : new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		...posts.map((post) => ({
			url: `${SITE_URL}/blog/${post.slug}`,
			lastModified: new Date(post.date),
			changeFrequency: "monthly" as const,
			priority: 0.7,
		})),
	];
}
