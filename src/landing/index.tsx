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
import { useTheme } from "./useTheme";

// Composes the "Violet Nocturne" landing page and owns theme state.
export default function Landing() {
	const { theme, toggleTheme } = useTheme();

	return (
		<>
			<Background />
			<Nav theme={theme} toggleTheme={toggleTheme} />
			<Hero theme={theme} />
			<Sobre />
			<Trabalhos />
			<StackSection />
			<Servicos />
			<Contato />
			<Footer />
			<WhatsAppFab />
		</>
	);
}
