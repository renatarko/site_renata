import type { AppProps } from "next/app";
import Head from "next/head";
import { DefaultTheme, ThemeProvider } from "styled-components";
import GlobalStyle from "../globalstyles";

import ReactGA from "react-ga";

const TRACKING_ID = "UA-257131607-1";
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

const theme: DefaultTheme = {
  colors: {
    darkBg: "#1A1A1A",
    primary: "#8067A9",
    secondary: "#BFB0D1",
    baseDark: "#161223",
    baseLight: "#FAF9FB",
    secondaryOpa: "rgba(191, 176, 209, 0.4)",
  },
  fontFamily: {
    poppins: "'Poppins', sans-serif",
  },
  fontSize: {
    title: "2.5rem",
    subTitle: "1.8rem",
    description: "1rem",
    titleSection: "1.3rem",
    icon: "25px",
  },
  borderRadius: {
    baseRadius: "8px",
  },
  spacing: {
    gap: "2rem",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Renata Karolina</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
