import type { Metadata } from "next";

import PostCard from "../../blog/PostCard";
import { getAllPostMeta } from "../../blog/posts";

const TITLE = "Blog";
const DESCRIPTION =
	"Textos sobre site, Google e presença digital para quem tem um negócio e não é da área de tecnologia. Sem jargão.";

export const metadata: Metadata = {
	title: TITLE,
	description: DESCRIPTION,
	alternates: { canonical: "/blog" },
	// a imagem precisa ser repetida: o Next SUBSTITUI o openGraph do layout raiz
	// em vez de mesclar, então sem isto o /blog ficaria sem og:image nenhuma
	openGraph: {
		type: "website",
		url: "/blog",
		title: `${TITLE} · Renata Karolina`,
		description: DESCRIPTION,
		images: [{ url: "/assets/tumblr.webp", width: 1200, height: 630 }],
	},
	twitter: {
		card: "summary_large_image",
		title: `${TITLE} · Renata Karolina`,
		description: DESCRIPTION,
		images: ["/assets/tumblr.webp"],
	},
};

export default function BlogIndexPage() {
	const posts = getAllPostMeta();

	return (
		<section className="sec article-top">
			<div className="wrap">
				<div className="sec-head">
					<span className="kicker">Blog</span>
					<h1>
						Site, Google e <span className="grad">presença digital</span>
					</h1>
					<p>{DESCRIPTION}</p>
				</div>

				{posts.length === 0 ? (
					<p className="post-empty">Ainda não publiquei nada por aqui. Em breve.</p>
				) : (
					<div className="post-grid">
						{posts.map((post) => (
							<PostCard key={post.slug} post={post} />
						))}
					</div>
				)}
			</div>
		</section>
	);
}
