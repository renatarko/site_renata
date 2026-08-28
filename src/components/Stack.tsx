import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import SITE from "./data";

type Tech = (typeof SITE.stack)[number]["items"][number];

/**
 * Hover do card e do ícone como VARIANTES, não como objetos.
 *
 * `whileHover={{ ... }}` com objeto só afeta o próprio elemento. Com rótulo, o
 * Framer propaga o estado para os filhos — é o que faz o ícone reagir ao hover
 * do card inteiro em vez de exigir o ponteiro em cima dos 38px do quadradinho.
 */
const cardHover: Variants = {
	hover: { x: 6, borderColor: "var(--accent)", backgroundColor: "var(--surface-2)" },
};

// só rotate/scale: `x` e `opacity` do ícone vêm da rolagem, via MotionValue no
// style, e são propriedades independentes — os dois convivem no mesmo transform
const iconHover: Variants = {
	hover: { rotate: [0, -10, 10, 0], scale: 1.12 },
};

/**
 * Item da stack. O card fica parado; quem entra é o ÍCONE, que desliza da
 * esquerda até a posição final.
 *
 * Cada item tem a PRÓPRIA timeline, ancorada na posição dele na tela — mesmo
 * padrão dos cards de projeto e de serviço. É o que faz o movimento acompanhar
 * a rolagem: o ícone entra enquanto aquele card sobe. A versão anterior usava
 * um progresso único da seção com janelas calculadas por índice, e a cascata
 * inteira terminava antes da seção chegar ao topo da tela.
 *
 * A cascata sai de graça: itens mais abaixo na coluna entram na tela depois.
 */
function TechItem({ t, ativo }: { readonly t: Tech; readonly ativo: boolean }) {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
	const x = useTransform(scrollYProgress, [0, 1], [-52, 0]);
	const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

	const cores = {
		background: t.color + "22",
		color: t.color,
		border: `1px solid ${t.color}44`,
	};

	return (
		<motion.div
			ref={ref}
			className="tech"
			variants={cardHover}
			whileHover="hover"
			transition={{ type: "spring", stiffness: 300, damping: 20 }}
		>
			<motion.span
				className="ic"
				style={ativo ? { ...cores, x, opacity } : cores}
				variants={iconHover}
				transition={{ duration: 0.5 }}
			>
				{t.abbr}
			</motion.span>
			<span className="name">{t.name}</span>
			<span className="lvl">{t.lvl}</span>
		</motion.div>
	);
}

export default function StackSection() {
	const semMovimento = useReducedMotion();
	const ativo = !semMovimento;

	return (
		<section className="sec" id="stack">
			<div className="wrap">
				{/* sem Reveal aqui: ele animaria a coluna inteira ao entrar na tela e
				    se somaria à entrada dos ícones, embolando os dois movimentos */}
				<div className="sec-head">
					<span className="kicker">// stack principal</span>
					<h2>As ferramentas por trás dos projetos.</h2>
					<p>Tecnologias modernas, escolhidas para entregar sites rápidos, escaláveis e fáceis de manter.</p>
				</div>
				<div className="stack-groups">
					{SITE.stack.map((g) => (
						<div key={g.group} className="stack-col">
							<h3>{g.group}</h3>
							<div className="flex flex-col gap-3">
								{g.items.map((t) => (
									<TechItem key={t.name} t={t} ativo={ativo} />
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
