import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import TagManager from "react-gtm-module";
import { ThemeProvider } from "styled-components";

import dark from "../styles/theme/dark";
import "../styles/site.css";

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		TagManager.initialize({ gtmId: "GTM-T98BFRQ" });
	}, []);

	return (
		// ThemeProvider kept so the legacy /contato page's styled-components resolve.
		// The landing page manages its own theme via the [data-theme] attribute + site.css.
		<ThemeProvider theme={dark}>
			<Head>
				<title>Renata Karolina · Desenvolvedora Web</title>
			</Head>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
