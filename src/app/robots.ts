import type { MetadataRoute } from "next";
import { SITE_URL } from "../lib/site";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			// a rota de API não tem nada para indexar
			disallow: "/api/",
		},
		sitemap: `${SITE_URL}/sitemap.xml`,
	};
}
