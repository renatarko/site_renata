"use client";

import Background from "./Background";
import Contato from "./Contato";
import Footer from "./Footer";
import Hero from "./Hero";
import Nav from "./Nav";
import Servicos from "./Servicos";
import Sobre from "./Sobre";
import StackSection from "./Stack";
import Trabalhos from "./Trabalhos";
import WhatsAppFab from "./WhatsAppFab";

// A landing inteira é cliente: 9 dos 12 componentes usam framer-motion ou
// estado. Marcar aqui basta — a diretiva vale para todo o subgrafo importado.
// Composes the "Violet Nocturne" landing page and owns theme state.
export default function Landing() {
	return (
		<>
			<Background />
			<Nav />
			<Hero />
			<Trabalhos />
			<StackSection />
			<Servicos />
			<Sobre />
			<Contato />
			<Footer />
			<WhatsAppFab />
		</>
	);
}
