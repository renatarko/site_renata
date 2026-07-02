import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import TagManager from "react-gtm-module";
import "../styles/site.css";

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		TagManager.initialize({ gtmId: "GTM-T98BFRQ" });
	}, []);

	return (
		<>
			<Head>
				<title>Renata Karolina · Desenvolvedora Web</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<ThemeProvider
				attribute="class"
				defaultTheme="dark"
				enableSystem={false}
				disableTransitionOnChange
			>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}
