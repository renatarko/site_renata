import { motion } from "framer-motion";
import { Fragment } from "react";
import { SITE } from "../../data/site";
import Reveal from "./Reveal";

const render = (txt: string) =>
	txt.split("**").map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : <Fragment key={i}>{part}</Fragment>));

export default function Sobre() {
	return (
		<section className="sec" id="sobre">
			<div className="wrap about-grid">
				<Reveal className="about-photo">
					<motion.div
						className="frame-3d"
						whileHover={{ rotateY: 6, rotateX: -4 }}
						transition={{ type: "spring", stiffness: 200, damping: 18 }}
						style={{ transformStyle: "preserve-3d" }}
					>
						{/* Placeholder da foto — trocar por next/image com a foto real da Renata */}
						<div
							style={{
								width: "100%",
								height: "100%",
								display: "grid",
								placeItems: "center",
								color: "var(--muted)",
								fontFamily: "Space Mono, monospace",
								fontSize: 13,
								textAlign: "center",
								padding: 20,
							}}
						>
							Foto da Renata aqui
						</div>
					</motion.div>
					<div className="about-badge">
						<div className="big">Olá 👋</div>
						<div className="sm">prazer, sou a Renata</div>
					</div>
				</Reveal>
				<div className="about-body">
					<Reveal>
						<span className="kicker">// sobre mim</span>
					</Reveal>
					<Reveal delay={0.05}>
						<h2 style={{ fontSize: "clamp(30px,3.6vw,44px)", margin: "14px 0 26px" }}>
							Código com capricho,
							<br />
							conversa sem juridiquês.
						</h2>
					</Reveal>
					{SITE.about.map((p, i) => (
						<Reveal key={i} delay={0.08 + i * 0.06}>
							<p>{render(p)}</p>
						</Reveal>
					))}
					<Reveal delay={0.3}>
						<div className="about-tags">
							{SITE.aboutTags.map((t) => (
								<span key={t}>{t}</span>
							))}
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
