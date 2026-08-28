import type { MetadataRoute } from "next";
import { SITE_URL } from "../lib/site";

// Convenção de arquivo do App Router: o Next gera /sitemap.xml a partir daqui,
// no build. Substitui o script de postbuild que o docs/blog.md previa — sem
// dependência nova e sem ler o disco em runtime.
export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: SITE_URL,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1,
		},
	];
}
