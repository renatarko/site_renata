import Landing from "../components";
import { getAllPostMeta } from "../blog/posts";

/** Quantos posts a seção do blog mostra na home — uma linha do grid. */
const DESTAQUES = 3;

export default function HomePage() {
	// Server Component: é aqui que o disco é lido. A landing é toda "use client"
	// e não pode importar o posts.ts, então recebe a lista já pronta.
	const posts = getAllPostMeta().slice(0, DESTAQUES);

	return <Landing posts={posts} />;
}
