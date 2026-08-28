import { Analytics } from "@vercel/analytics/next";
import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";

import { SITE_URL } from "../lib/site";
import { Toaster } from "../components/ui/sonner";
import { ThemeProvider } from "./theme-provider";
// o tailwind.css importa o site.css dentro de layer(components)
import "../styles/tailwind.css";

const DESCRIPTION =
	"Renata Karolina, desenvolvedora web focada em landing pages, sites e sistemas que unem design afiado e código limpo.";

export const metadata: Metadata = {
	// torna absoluta toda URL relativa daqui pra baixo (OG, ícones, canonical)
	metadataBase: new URL(SITE_URL),
	title: {
		default: "Renata Karolina · Desenvolvedora Web",
		template: "%s · Renata Karolina",
	},
	description: DESCRIPTION,
	authors: [{ name: "Renata Karolina de Oliveira" }],
	alternates: { canonical: "/" },
	openGraph: {
		type: "website",
		locale: "pt_BR",
		url: "/",
		siteName: "renata.reko",
		title: "Renata Karolina · Desenvolvedora Web",
		description: DESCRIPTION,
		images: [{ url: "/assets/tumblr.webp", width: 1200, height: 630 }],
	},
	twitter: {
		card: "summary_large_image",
		title: "Renata Karolina · Desenvolvedora Web",
		description: DESCRIPTION,
		images: ["/assets/tumblr.webp"],
	},
	icons: {
		icon: [
			{ url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
			{ url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
			{ url: "/favicon/android-icon-192x192.png", sizes: "192x192", type: "image/png" },
		],
		apple: [{ url: "/favicon/apple-icon-180x180.png", sizes: "180x180", type: "image/png" }],
	},
	manifest: "/favicon/manifest.json",
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	themeColor: "#1A1A1A",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		// suppressHydrationWarning é exigido pelo next-themes: ele escreve a
		// classe do tema no <html> antes do React hidratar.
		<html lang="pt-BR" suppressHydrationWarning>
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link
					href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				<ThemeProvider>
					{children}
					<Toaster position="top-center" richColors />
				</ThemeProvider>
				<Analytics />
				{/* dentro do <body>: como irmão dele, o Next quebra o prerender
				    do /_not-found com "Invariant: missing bootstrap script" */}
				<GoogleTagManager gtmId="GTM-T98BFRQ" />
			</body>
		</html>
	);
}
