import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider, DefaultTheme } from "styled-components";
import GlobalStyle from "../components/globalstyles";

const theme: DefaultTheme = {
  colors: {
    primary: "#1A1A1A",
    secondary: "rgb(232, 229, 233)",
    purple: "rgb(130, 92, 168)",
    purpleLigth: "rgb(221, 151, 219)",
  },
  fontFamily: {
    poppins: "'Poppins', sans-serif",
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
