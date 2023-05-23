import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import Analytics from "../components/Analytics";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />

          <meta name="author" content="Renata Karolina de Oliveira" />
          <meta
            name="description"
            content="Renata Karolina, desenvolvedora front-end apaixonada por tecnologia e design."
          />
          <meta
            name="keywords"
            content="renata karolina, web developer, front-end, desenvolvedora front-end"
          />

          <meta name="msapplication-TileColor" content="#1A1A1A" />
          <meta
            name="msapplication-TileImage"
            content="favicon/ms-icon-144x144.png"
          />
          <meta name="theme-color" content="#1A1A1A" />

          <meta property="og:url" content="https://renatakarolina.vercel.app" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Renata Karolina | Web Developer" />
          <meta
            property="og:description"
            content="Renata Karolina, desenvolvedora front-end apaixonada por tecnologia e design."
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
          <meta
            property="twitter:url"
            content="https://renatakarolina.vercel.app"
          />
          <meta
            name="twitter:title"
            content="Renata Karolina | Web Developer"
          />
          <meta
            name="twitter:description"
            content="Renata Karolina, desenvolvedora front-end apaixonada por tecnologia e design."
          />
          <meta
            name="twitter:image"
            content="https://renatakarolina.vercel.app/assets/tumblr.webp"
          />

          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="./favicon/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="./favicon/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="./favicon/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="./favicon/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="./favicon/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="./favicon/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="./favicon/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="./favicon/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="./favicon/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="./favicon/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="./favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="./favicon/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="./favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="./favicon/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Analytics />
        </body>
      </Html>
    );
  }
}
