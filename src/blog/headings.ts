import type { Element, Nodes, Parents } from "hast";

/** Um item do índice. Só h2 e h3 — h4 em diante deixaria a lista comprida demais. */
export interface Heading {
	id: string;
	text: string;
	level: 2 | 3;
}

function textOf(node: Nodes): string {
	if (node.type === "text") return node.value;
	if ("children" in node) return (node as Parents).children.map(textOf).join("");
	return "";
}

/**
 * Plugin rehype que colhe os headings enquanto o MDX compila.
 *
 * Ler o `.mdx` por fora com uma regex seria mais simples, mas os ids teriam que
 * ser recalculados na mão e bastaria uma divergência de acentuação para o link
 * do índice apontar para o nada. Rodando DEPOIS do rehype-slug, na mesma
 * árvore, os ids são literalmente os mesmos que vão para o HTML.
 *
 * O array é preenchido durante o compile — por isso a página usa `compileMDX`
 * com await, e não `<MDXRemote>` direto: o índice precisa estar pronto antes
 * de montar o JSX.
 */
export function collectHeadings(into: Heading[]) {
	return () => (tree: Nodes) => {
		const walk = (node: Nodes) => {
			if (node.type === "element") {
				const el = node as Element;
				const level = el.tagName === "h2" ? 2 : el.tagName === "h3" ? 3 : null;
				const id = el.properties?.id;
				if (level && typeof id === "string") {
					into.push({ id, text: textOf(el).trim(), level });
				}
			}
			if ("children" in node) (node as Parents).children.forEach(walk);
		};
		walk(tree);
	};
}
