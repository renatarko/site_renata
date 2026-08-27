import type { Metadata } from "next";
import SociaisMedias from "../../templates/SociaisMedias";

export const metadata: Metadata = {
	title: "Contato",
	description: "Todos os canais para falar com a Renata Karolina.",
	alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
	return <SociaisMedias />;
}
