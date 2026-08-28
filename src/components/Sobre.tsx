import { motion } from "framer-motion";
import Image from "next/image";
import { Fragment } from "react";
import Reveal from "./Reveal";
import SITE from "./data";

// Render **bold** markers inside the about copy.
function renderCopy(txt: string) {
	return txt.split("**").map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : <Fragment key={i}>{part}</Fragment>));
}

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
						<Image
							src="/assets/profile.png"
							alt="Foto da Renata Karolina"
							fill
							sizes="(max-width: 980px) 360px, 40vw"
							style={{ objectFit: "cover" }}
							priority
						/>
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
							<p>{renderCopy(p)}</p>
						</Reveal>
					))}
					<Reveal delay={0.3}>
						<div className="about-tags flex flex-wrap gap-2.5 mt-7">
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
