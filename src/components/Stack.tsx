import { MotionValue, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { RefObject, useRef } from "react";
import SITE from "./data";

type Tech = (typeof SITE.stack)[number]["items"][number];

/**
 * Item da stack. O card fica parado; quem entra é o ÍCONE, que desliza da
 * esquerda até a posição final conforme a seção rola.
 *
 * A versão anterior movia o card inteiro, e eles se sobrepunham no meio do
 * caminho — como o fundo do .tech é translúcido, um vazava através do outro.
 * Animando só o ícone o problema deixa de existir: nada sai do lugar no fluxo.
 */
function TechItem({ t, index, progresso, ativo }: {
	readonly t: Tech;
	readonly index: number;
	readonly progresso: MotionValue<number>;
	readonly ativo: boolean;
}) {
	// cada ícone entra um pouco depois do anterior
	const inicio = Math.min(0.6, index * 0.06);
	const x = useTransform(progresso, [inicio, inicio + 0.3], [-52, 0], { clamp: true });
	const opacity = useTransform(progresso, [inicio, inicio + 0.22], [0, 1], { clamp: true });

	const cores = {
		background: t.color + "22",
		color: t.color,
		border: `1px solid ${t.color}44`,
	};

	return (
		<motion.div
			className="tech"
			whileHover={{ x: 6, borderColor: "var(--accent)", backgroundColor: "var(--surface-2)" }}
			transition={{ type: "spring", stiffness: 300, damping: 20 }}
		>
			<motion.span
				className="ic"
				style={ativo ? { ...cores, x, opacity } : cores}
				whileHover={{ rotate: [0, -10, 10, 0], scale: 1.12 }}
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
	const secRef = useRef<HTMLElement>(null);
	const semMovimento = useReducedMotion();
	const ativo = !semMovimento;

	// progresso ao longo da seção: começa quando o topo dela encosta na base da
	// viewport e só termina quando a base chega ao meio da tela, para o efeito
	// acontecer DURANTE a rolagem da seção
	const { scrollYProgress } = useScroll({
		target: secRef as RefObject<HTMLElement>,
		offset: ["start end", "end center"],
	});

	return (
		<section className="sec" id="stack" ref={secRef}>
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
							<h4>{g.group}</h4>
							<div className="flex flex-col gap-3">
								{g.items.map((t, i) => (
									<TechItem key={t.name} t={t} index={i} progresso={scrollYProgress} ativo={ativo} />
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
