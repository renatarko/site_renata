import Contato from "../../components/redesign/Contato";
import Footer from "../../components/redesign/Footer";
import Hero from "../../components/redesign/Hero";
import Nav from "../../components/redesign/Nav";
import Servicos from "../../components/redesign/Servicos";
import Sobre from "../../components/redesign/Sobre";
import StackSection from "../../components/redesign/StackSection";
import Trabalhos from "../../components/redesign/Trabalhos";

export default function Home() {
	return (
		<>
			<div className="bg-fx" aria-hidden="true">
				<div className="grid"></div>
				<div className="glow1"></div>
				<div className="glow2"></div>
				<div className="noise"></div>
			</div>
			<Nav />
			<Hero />
			<Sobre />
			<Trabalhos />
			<StackSection />
			<Servicos />
			<Contato />
			<Footer />
		</>
	);
}
