import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { entr } from "./util";

interface Mockup {
	src: string;
	title: string;
	tag: string;
}

const mockups: Mockup[] = [
	{ src: "/projects/mock-ana.webp", title: "Dra. Ana Oliveira", tag: "Site + Blog" },
	{ src: "/projects/mock-romualdo.webp", title: "Romualdo Costa", tag: "Site de Venda de Cursos" },
	{ src: "/projects/mock-prensecamais.webp", title: "Presença+", tag: "Sistema web" },
	{ src: "/projects/mock-itop-lp.webp", title: "iTOP Sistema Web", tag: "Landing Page · Evento" },
	{ src: "/projects/mock-itop.webp", title: "iTOP Sistema Web", tag: "Sistema + App" },
];

const INTERVAL = 4200;

// Auto-playing showcase of delivered-project mockups, layered over the hero art.
export default function HeroMockups() {
	const [i, setI] = useState(0);
	const [paused, setPaused] = useState(false);

	useEffect(() => {
		// warm the cache so a swap never lands on a still-loading image
		for (const m of mockups) new Image().src = m.src;
	}, []);

	useEffect(() => {
		if (paused || mockups.length < 2) return;
		const id = window.setInterval(() => setI((n) => (n + 1) % mockups.length), INTERVAL);
		return () => window.clearInterval(id);
	}, [paused, i]);

	const current = mockups[i];

	return (
		<div
			className="hero-mocks"
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}
		>
			<div className="hero-mocks-stage">
				<AnimatePresence initial={false}>
					<motion.img
						key={current.src}
						src={current.src}
						alt={`Mockup do projeto ${current.title}`}
						decoding="async"
						className="hero-mock-img"
						initial={entr({ opacity: 0, scale: 0.86, y: 34, rotateY: -18, filter: "blur(10px)" }) as any}
						animate={{ opacity: 1, scale: 1, y: 0, rotateY: 0, filter: "blur(0px)" }}
						exit={{ opacity: 0, scale: 1.06, y: -28, rotateY: 16, filter: "blur(10px)" }}
						transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
					/>
				</AnimatePresence>
			</div>

			<div className="hero-mock-meta">
				<AnimatePresence mode="wait" initial={false}>
					<motion.div
						key={current.src}
						initial={entr({ opacity: 0, y: 10 }) as any}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.4, ease: "easeOut" }}
					>
						<span className="hero-mock-tag">{current.tag}</span>
						<strong className="hero-mock-title">{current.title}</strong>
					</motion.div>
				</AnimatePresence>

				<div className="hero-mock-dots" role="tablist" aria-label="Projetos em destaque">
					{mockups.map((m, n) => (
						<button
							key={m.src}
							type="button"
							role="tab"
							aria-selected={n === i}
							aria-label={m.title}
							className={"hero-mock-dot" + (n === i ? " is-active" : "")}
							onClick={() => setI(n)}
						>
							<span
								className="hero-mock-dot-fill"
								style={{ animationDuration: INTERVAL + "ms", animationPlayState: paused ? "paused" : "running" }}
							/>
						</button>
					))}
				</div>
			</div>
		</div>
	);
}
