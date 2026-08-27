import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import Head from "next/head";
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
			</Head>
			<Component {...pageProps} />
			<Analytics />
		</>
	);
}
