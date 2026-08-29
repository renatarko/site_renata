/**
 * Só tipos. Este módulo é seguro no cliente — o `posts.ts`, que lê o disco,
 * NÃO é. Por isso o PostCard importa daqui com `import type`.
 */

/** O contrato do frontmatter, depois de normalizado pelo posts.ts. */
export interface PostMeta {
	/** vem do nome do arquivo, não do frontmatter. É a URL. */
	slug: string;
	title: string;
	/** até ~160 caracteres: é o que o Google mostra abaixo do título */
	description: string;
	/** ISO `YYYY-MM-DD`, sempre string — ver a armadilha da data no posts.ts */
	date: string;
	tags: string[];
	/** caminho absoluto a partir de /public, ou null para cair no gradiente */
	cover: string | null;
	/** escondido do índice, do sitemap e das rotas geradas (só aparece em dev) */
	draft: boolean;
	/** minutos, calculado a partir do corpo */
	readingMinutes: number;
}

export interface Post {
	meta: PostMeta;
	/** o corpo do .mdx, sem o frontmatter */
	content: string;
}
