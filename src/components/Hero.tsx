import { motion, Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import SITE from "./data";
import HeroMockups from "./HeroMockups";
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

export default function Hero() {
	// Anotados como Variants para o framer-motion 13 estreitar o array de bezier
	// para tupla; sem isso o TS o alarga para number[] e recusa.
	const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } } };
	const item: Variants = {
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
					<motion.div className="flex flex-wrap gap-[14px]" variants={item}>
						<a href="#servicos" className="btn btn-ghost btn-border-loop" onClick={(e) => scrollTo(e, "#servicos")}>
							Conhecer os planos
						</a>
						<a href="#trabalhos" className="btn btn-primary btn-shine" onClick={(e) => scrollTo(e, "#trabalhos")}>
							Ver mais trabalhos
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
					<HeroMockups />
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
