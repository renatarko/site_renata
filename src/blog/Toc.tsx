"use client";

import { useEffect, useState } from "react";

import type { Heading } from "./headings";

/**
 * Índice do artigo, fixo na coluna da direita.
 *
 * O salto é âncora nativa (`href="#id"`) — nada de JS para isso, e o link
 * continua funcionando compartilhado ou em nova aba. O `scroll-margin-top` das
 * headings no blog.css é o que impede a nav fixa de cobrir o título.
 *
 * O único trabalho do cliente é marcar qual seção está sendo lida.
 */
export default function Toc({ headings }: { headings: Heading[] }) {
	const [active, setActive] = useState(headings[0]?.id ?? "");

	// string estável: o array chega novo a cada render do Server Component, e
	// depender dele direto refaria o listener à toa
	const ids = headings.map((h) => h.id).join("|");

	useEffect(() => {
		const els = ids
			.split("|")
			.map((id) => document.getElementById(id))
			.filter((el): el is HTMLElement => el !== null);
		if (els.length === 0) return;

		let frame = 0;
		const onScroll = () => {
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(() => {
				// a última heading que já passou da linha de leitura (abaixo da nav)
				let current = els[0].id;
				for (const el of els) {
					if (el.getBoundingClientRect().top > 120) break;
					current = el.id;
				}
				setActive(current);
			});
		};

		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", onScroll);
			cancelAnimationFrame(frame);
		};
	}, [ids]);

	return (
		<aside className="toc">
			<nav aria-labelledby="toc-titulo">
				<p className="toc-titulo" id="toc-titulo">
					Neste artigo
				</p>
				<ol>
					{headings.map((h) => (
						<li key={h.id} data-nivel={h.level}>
							<a href={`#${h.id}`} aria-current={active === h.id ? "true" : undefined}>
								{h.text}
							</a>
						</li>
					))}
				</ol>
			</nav>
		</aside>
	);
}
