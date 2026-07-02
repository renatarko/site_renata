import { Head, Html, Main, NextScript } from "next/document";

export default function MyDocument() {
	return (
		<Html lang="pt-BR">
			<Head>
				<meta charSet="utf-8" />

				<meta name="author" content="Renata Karolina de Oliveira" />
				<meta
					name="description"
					content="Renata Karolina, desenvolvedora web — landing pages, sites, blogs e sistemas sob medida. React, Next.js, TypeScript e Figma."
				/>
				<meta
					name="keywords"
					content="renata karolina, web developer, front-end, desenvolvedora web"
				/>

				<meta property="og:url" content="https://renatakarolina.vercel.app" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Renata Karolina | Desenvolvedora Web" />
				<meta
					property="og:description"
					content="Renata Karolina, desenvolvedora web apaixonada por tecnologia e design."
				/>
				<meta property="og:site_name" content="renatakarolina.vercel.app" />
				<meta
					property="og:image"
					content="https://renatakarolina.vercel.app/assets/tumblr.webp"
				/>
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="renatakarolina.vercel.app" />
				<meta property="twitter:url" content="https://renatakarolina.vercel.app" />
				<meta name="twitter:title" content="Renata Karolina | Desenvolvedora Web" />
				<meta
					name="twitter:description"
					content="Renata Karolina, desenvolvedora web apaixonada por tecnologia e design."
				/>
				<meta
					name="twitter:image"
					content="https://renatakarolina.vercel.app/assets/tumblr.webp"
				/>

				<link rel="apple-touch-icon" sizes="180x180" href="./favicon/apple-icon-180x180.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="./favicon/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="./favicon/favicon-16x16.png" />
				<link rel="manifest" href="./favicon/manifest.json" />

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link
					href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
