import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import SITE from "./data";
import { Theme } from "./useTheme";
import { entr } from "./util";

const glyphs: {
	t: string;
	s: React.CSSProperties;
	fs: number;
	d: number;
}[] = [
	{ t: "</>", s: { top: "3%", left: "12%" }, fs: 26, d: 6 },
	{ t: "{ }", s: { top: "84%", left: "6%" }, fs: 23, d: 7.2 },
	{ t: "( )", s: { top: "8%", right: "6%" }, fs: 21, d: 5.6 },
	{ t: "=>", s: { top: "70%", right: "3%" }, fs: 24, d: 6.6 },
	{ t: "01", s: { top: "40%", left: "-3%" }, fs: 19, d: 8 },
	{ t: "[ ]", s: { top: "92%", right: "32%" }, fs: 20, d: 6.1 },
	{ t: "#", s: { top: "26%", right: "-2%" }, fs: 22, d: 5.2 },
	{ t: "*", s: { top: "2%", left: "46%" }, fs: 20, d: 7.6 },
];

export default function Hero({ theme }: { theme: Theme }) {
	const container = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } } };
	const item = {
		hidden: { opacity: 0, y: 26 },
		show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
	};

	const scrollTo = (e: React.MouseEvent, sel: string) => {
		e.preventDefault();
		document.querySelector(sel)?.scrollIntoView({ behavior: "smooth", block: "start" });
	};

	return (
		<header className="hero" id="top">
			<div className="wrap hero-grid">
				<motion.div variants={container} initial={entr("hidden") as any} animate="show">
					<motion.div variants={item}>
						<span className="eyebrow">
							<span className="pulse" />
							Disponível para novos projetos
						</span>
					</motion.div>
					<motion.h1 variants={item}>
						Ideias viram
						<br />
						<span className="grad">produtos digitais</span>
						<br />
						que vendem.
					</motion.h1>
					<motion.p className="hero-sub" variants={item}>
						Sou {SITE.name}, desenvolvedora web focada em landing pages, sites e sistemas que unem design
						afiado e código limpo — do Figma ao deploy.
					</motion.p>
					<motion.div className="hero-btns" variants={item}>
						<a href="#trabalhos" className="btn btn-primary" onClick={(e) => scrollTo(e, "#trabalhos")}>
							Ver trabalhos →
						</a>
						<a href="#servicos" className="btn btn-ghost" onClick={(e) => scrollTo(e, "#servicos")}>
							Conhecer os planos
						</a>
					</motion.div>
					<motion.div className="hero-stats" variants={item}>
						{SITE.stats.map((s) => (
							<div key={s.lbl}>
								<div className="num grad">{s.num}</div>
								<div className="lbl">{s.lbl}</div>
							</div>
						))}
					</motion.div>
				</motion.div>

				<motion.div
					className="hero-3d"
					initial={entr({ opacity: 0, scale: 0.92 }) as any}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
				>
					<div className="hero-orbits" aria-hidden="true">
						<span className="orbit o1" />
						<span className="orbit o2" />
						<span className="orbit o3" />
					</div>
					<div className="hero-dots" aria-hidden="true" />
					<svg className="hero-circuit" viewBox="0 0 160 120" fill="none" aria-hidden="true">
						<path
							d="M2 18h40l14 14h40M2 60h22l16-16h54M2 100h48l18-18h44"
							stroke="currentColor"
							strokeWidth="1.4"
							strokeLinecap="round"
						/>
						<circle cx="96" cy="32" r="3.4" fill="currentColor" />
						<circle cx="94" cy="44" r="3.4" fill="currentColor" />
						<circle cx="112" cy="82" r="3.4" fill="currentColor" />
						<rect x="40" y="13" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.4" />
						<rect x="20" y="55" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.4" />
						<rect x="46" y="95" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.4" />
					</svg>
					<div className="hero-glyphs" aria-hidden="true">
						{glyphs.map((g, i) => (
							<span
								key={i}
								className="glyph"
								style={{
									...g.s,
									fontSize: g.fs,
									animationDuration: g.d + "s",
									animationDelay: i * 0.4 + "s",
								}}
							>
								{g.t}
							</span>
						))}
					</div>
					<motion.div
						className="float-chip"
						style={{ top: "12%", left: "-2%" }}
						animate={{ y: [0, -12, 0] }}
						transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
					>
						<span style={{ color: "#61dafb" }}>◆</span> React + Next.js
					</motion.div>
					<motion.div
						className="float-chip"
						style={{ bottom: "14%", right: "-2%" }}
						animate={{ y: [0, 12, 0] }}
						transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
					>
						<span className="pulse" /> {SITE.stats[0].num} projetos no ar
					</motion.div>
				</motion.div>
			</div>
		</header>
	);
}
