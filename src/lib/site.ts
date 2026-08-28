/**
 * Fonte única da URL base. Consumida pelo metadataBase do layout, pelo sitemap
 * e pelo robots — trocar de domínio é mexer só na env var da Vercel.
 * A barra final é removida para não gerar `https://dominio.com//rota`.
 */
export const SITE_URL = (
	process.env.NEXT_PUBLIC_SITE_URL ?? "https://portifolio.rerko.net/"
).replace(/\/$/, "");
