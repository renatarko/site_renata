import Link from "next/link";
import type { MDXComponents } from "mdx/types";

/**
 * O que o MDX vira em React.
 *
 * A tipografia mora no `.prose` do blog.css — aqui só ficam os elementos que
 * precisam de comportamento, não de estilo. Todos são Server Components: o
 * artigo inteiro sai como HTML, que é a premissa de SEO do blog.
 */

/** Destaque para uma observação — `<Callout>texto</Callout>` dentro do .mdx. */
export function Callout({ children, tipo = "nota" }: { children: React.ReactNode; tipo?: "nota" | "atencao" }) {
	return (
		<aside className="callout" data-tipo={tipo}>
			{children}
		</aside>
	);
}

/** Lista com check em vez de bolinha — `<Checklist>` com um `<ul>` dentro. */
export function Checklist({ children }: { children: React.ReactNode }) {
	return <div className="checklist">{children}</div>;
}

export const mdxComponents: MDXComponents = {
	Callout,
	Checklist,

	/**
	 * Link interno vira <Link> (rota no cliente, sem recarregar a página);
	 * externo abre em nova aba com o rel de segurança. Âncora de heading
	 * (o `#` que o rehype-autolink-headings injeta) fica como <a> puro.
	 */
	a: ({ href = "", children, ...rest }) => {
		if (href.startsWith("/")) {
			return (
				<Link href={href} {...rest}>
					{children}
				</Link>
			);
		}
		if (href.startsWith("#")) {
			return (
				<a href={href} {...rest}>
					{children}
				</a>
			);
		}
		return (
			<a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
				{children}
			</a>
		);
	},

	/**
	 * <img> puro, e não next/image: o MDX não sabe as dimensões do arquivo, e
	 * next/image sem width/height exige `fill` + container posicionado. O
	 * `aspect-ratio` do CSS e o lazy nativo resolvem o essencial aqui.
	 */
	img: ({ src, alt = "", ...rest }) => (
		// eslint-disable-next-line @next/next/no-img-element
		<img src={src as string} alt={alt} loading="lazy" decoding="async" {...rest} />
	),
};
