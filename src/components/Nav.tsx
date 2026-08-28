import { AnimatePresence, motion } from "framer-motion";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useEffect, useState } from "react";
import SITE from "./data";
import { useTheme } from "next-themes";

const links: [string, string][] = [
	["Sobre", "#sobre"],
	["Trabalhos", "#trabalhos"],
	["Serviços", "#servicos"],
	["Contato", "#contato"],
];

function ThemeIcon({ theme }: { theme: string | undefined }) {
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

export default function Nav() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);

	// O servidor não sabe a preferência salva, então antes de montar assume o
	// defaultTheme do provider ("dark"). Isso mantém servidor e cliente iguais na
	// primeira renderização e, para quem usa escuro, o ícone nem chega a trocar.
	// Deixar `undefined` aqui forçava uma troca de key em TODO carregamento, e o
	// AnimatePresence com mode="wait" só monta o novo depois que o antigo sai —
	// numa aba em segundo plano essa saída não completa e o ícone ficava errado.
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);
	const { resolvedTheme, setTheme } = useTheme();
	// o ?? cobre o instante entre montar e o next-themes resolver, em que
	// resolvedTheme ainda é undefined e causaria uma troca de ícone à toa
	const theme = (mounted ? resolvedTheme : undefined) ?? "dark";
	const toggleTheme = () => setTheme(resolvedTheme === "dark" ? "light" : "dark");

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
				<div className="flex items-center gap-3">
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
					{/* Popover em vez de Sheet: são 4 links, e um painel de altura
					    inteira deixava um vazio enorme e colidia com o botão do
					    WhatsApp. Reproduz o dropdown que existia antes, mas com o
					    ESC, o foco e o clique-fora que o Radix dá. */}
					<Popover open={open} onOpenChange={setOpen}>
						<PopoverTrigger asChild>
							<button className="theme-btn menu-btn" aria-label={open ? "Fechar menu" : "Abrir menu"}>
								<svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
									<path d={open ? "M6 6l12 12M6 18L18 6" : "M3 6h18M3 12h18M3 18h18"} />
								</svg>
							</button>
						</PopoverTrigger>
						<PopoverContent
							align="end"
							sideOffset={8}
							className="grid w-[calc(100vw-36px)] max-w-[var(--maxw)] gap-1 rounded-2xl border-border-soft bg-bg-2 p-2.5 text-text shadow-site"
						>
							{links.map(([t, h]) => (
								<a
									key={h}
									href={h}
									onClick={(e) => go(e, h)}
									className="rounded-[10px] px-[14px] py-3 font-display font-semibold hover:bg-surface-2"
								>
									{t}
								</a>
							))}
							<p className="mt-2 border-t border-border-soft px-[14px] pt-[14px] text-sm text-text-2">
								Fale comigo sobre o seu projeto
							</p>
							<a
								href="#contato"
								onClick={(e) => go(e, "#contato")}
								className="btn btn-primary justify-center"
							>
								Vamos conversar
							</a>
						</PopoverContent>
					</Popover>
				</div>
			</div>
		</nav>
	);
}
