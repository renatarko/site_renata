import SITE from "./data";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="wrap flex flex-wrap items-center justify-between gap-4">
				<a className="logo" href="#top">
					<span className="dot" />
					{SITE.brand}
					<span style={{ color: "var(--accent)" }}>.reko</span>
				</a>
				<span className="muted">
					© {new Date().getFullYear()} {SITE.name} · Desenvolvido com café e Next.js { " "}☕
				</span>
				<span className="muted">Feito no Brasil 🇧🇷</span>
			</div>
		</footer>
	);
}
