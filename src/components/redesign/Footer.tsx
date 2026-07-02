import { SITE } from "../../data/site";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="wrap footer-inner">
				<a className="logo" href="#top">
					<span className="dot"></span>
					{SITE.brand}
					<span style={{ color: "var(--accent)" }}>.dev</span>
				</a>
				<span className="muted">
					© {new Date().getFullYear()} {SITE.name} · Desenvolvido com café e Next.js
				</span>
				<span className="muted">Feito no Brasil 🇧🇷</span>
			</div>
		</footer>
	);
}
