import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import SITE from "./data";
import { Theme } from "./useTheme";

const links: [string, string][] = [
	["Sobre", "#sobre"],
	["Trabalhos", "#trabalhos"],
	["Serviços", "#servicos"],
	["Contato", "#contato"],
];

function ThemeIcon({ theme }: { theme: Theme }) {
	return (
		<AnimatePresence mode="wait" initial={false}>
			<motion.span
				key={theme}
				initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
				animate={{ rotate: 0, opacity: 1, scale: 1 }}
				exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
				transition={{ duration: 0.3 }}
				style={{ display: "grid" }}
			>
				{theme === "dark" ? (
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
						<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
					</svg>
				) : (
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
						<circle cx="12" cy="12" r="4.5" />
						<path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19" />
					</svg>
				)}
			</motion.span>
		</AnimatePresence>
	);
}

interface Props {
	theme: Theme;
	toggleTheme: () => void;
}

export default function Nav({ theme, toggleTheme }: Props) {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const on = () => setScrolled(window.scrollY > 24);
		on();
		window.addEventListener("scroll", on);
		return () => window.removeEventListener("scroll", on);
	}, []);

	const go = (e: React.MouseEvent, href: string) => {
		e.preventDefault();
		setOpen(false);
		const el = document.querySelector(href);
		if (el)
			window.scrollTo({
				top: el.getBoundingClientRect().top + window.scrollY - 80,
				behavior: "smooth",
			});
	};

	return (
		<nav className={"nav" + (scrolled ? " scrolled" : "")}>
			<div className="nav-inner">
				<a href="#top" className="logo" onClick={(e) => go(e, "#top")}>
					<span className="dot" />
					{SITE.brand}
					<span style={{ color: "var(--accent)" }}>.reko</span>
				</a>
				<div className="nav-links">
					{links.map(([t, h]) => (
						<a key={h} href={h} onClick={(e) => go(e, h)}>
							{t}
						</a>
					))}
				</div>
				<div className="nav-right">
					<button className="theme-btn" onClick={toggleTheme} aria-label="Alternar tema">
						<ThemeIcon theme={theme} />
					</button>
					<a
						href="#contato"
						onClick={(e) => go(e, "#contato")}
						className="btn btn-primary nav-cta"
						style={{ padding: "11px 20px" }}
					>
						Vamos conversar
					</a>
					<button className="theme-btn menu-btn" onClick={() => setOpen((o) => !o)} aria-label="Menu">
						<svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
							<path d={open ? "M6 6l12 12M6 18L18 6" : "M3 6h18M3 12h18M3 18h18"} />
						</svg>
					</button>
				</div>
			</div>
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						style={{ maxWidth: "var(--maxw)", margin: "8px auto 0", padding: "0 18px" }}
					>
						<div
							style={{
								background: "var(--bg-2)",
								border: "1px solid var(--border)",
								borderRadius: 16,
								padding: 10,
								display: "grid",
								gap: 4,
							}}
						>
							{links.map(([t, h]) => (
								<a
									key={h}
									href={h}
									onClick={(e) => go(e, h)}
									style={{ padding: "12px 14px", borderRadius: 10, fontFamily: "Space Grotesk", fontWeight: 600 }}
								>
									{t}
								</a>
							))}
							<div
								style={{
									padding: "0 14px",
									width: "100%",
									borderTop: "1px solid var(--border)",
									display: "flex",
									flexDirection: "column",
									alignItems: "flex-start",
									gap: 12,
								}}
							>
								<span
								style={{paddingTop: 14,
									fontSize: 14,
									color: "var(--text-2)"}}
								>Fale comigo sobre o seu projeto</span>
							<a
								href="#contato"
								onClick={(e) => go(e, "#contato")}
								className="btn btn-primary"
								style={{ justifyContent: "center", width: "100%" }}
								>
								Vamos conversar
							</a>
								</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}
