import Background from "../../components/Background";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import WhatsAppFab from "../../components/WhatsAppFab";

/**
 * A casca das páginas do blog. Reaproveita os mesmos componentes da landing —
 * o layout do App Router existe justamente para isso: nav e rodapé deixam de
 * ser repetidos por página e não remontam ao navegar entre posts.
 */
export default function BlogLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Background />
			<Nav />
			<main>{children}</main>
			<Footer />
			<WhatsAppFab />
		</>
	);
}
