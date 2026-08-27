import { motion } from "framer-motion";
import { CSSProperties, ReactNode } from "react";
import { entr } from "./util";

interface Props {
	children: ReactNode;
	y?: number;
	delay?: number;
	className?: string;
	style?: CSSProperties;
}

export default function Reveal({ children, y = 26, delay = 0, className, style }: Props) {
	return (
		<motion.div
			className={className}
			style={style}
			initial={entr({ opacity: 0, y }) as any}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-70px" }}
			transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
		>
			{children}
		</motion.div>
	);
}
