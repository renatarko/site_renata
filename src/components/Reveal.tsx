import { motion, useReducedMotion } from "framer-motion";
import { CSSProperties, ReactNode } from "react";
import { entr } from "./util";

interface Props {
	children: ReactNode;
	y?: number;
	delay?: number;
	className?: string;
	style?: CSSProperties;
	/** escala inicial; sem isto o card só sobe, como era antes */
	scale?: number;
	/** desfoque inicial em px, no mesmo espírito da troca de mockups da hero */
	blur?: number;
}

export default function Reveal({ children, y = 26, delay = 0, className, style, scale, blur }: Props) {
	// O site trata prefers-reduced-motion em todo o CSS; as animações do Framer
	// não seguiam essa regra. Com desfoque e escala na entrada isso passa a
	// incomodar de verdade, então aqui a animação simplesmente não acontece.
	const semMovimento = useReducedMotion();

	const escondido: Record<string, number | string> = { opacity: 0, y };
	if (scale !== undefined) escondido.scale = scale;
	if (blur !== undefined) escondido.filter = `blur(${blur}px)`;

	const visivel: Record<string, number | string> = { opacity: 1, y: 0 };
	if (scale !== undefined) visivel.scale = 1;
	if (blur !== undefined) visivel.filter = "blur(0px)";

	if (semMovimento) {
		return (
			<div className={className} style={style}>
				{children}
			</div>
		);
	}

	return (
		<motion.div
			className={className}
			style={style}
			initial={entr(escondido) as any}
			whileInView={visivel}
			viewport={{ once: true, margin: "-70px" }}
			transition={{ duration: blur !== undefined ? 0.7 : 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
		>
			{children}
		</motion.div>
	);
}
