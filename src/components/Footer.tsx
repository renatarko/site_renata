import Link from "next/link";

import SITE from "./data";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="wrap flex flex-wrap items-center justify-between gap-4">
				<Link className="logo" href="/">
					<span className="dot" />
					{SITE.brand}
					<span style={{ color: "var(--accent)" }}>.reko</span>
				</Link>
				{/* link interno da página de maior autoridade: é assim que o /blog
				    é descoberto pelo crawler */}
				<Link className="footer-link" href="/blog">
					Blog
				</Link>
				<span className="muted">
					© {new Date().getFullYear()} {SITE.name} · Desenvolvido com café e Next.js { " "}☕
				</span>
				<span className="muted">Feito no Brasil 🇧🇷</span>
			</div>
		</footer>
	);
}
