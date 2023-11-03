import type { AppProps } from "next/app";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import TagManager from "react-gtm-module";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalstyles";

import Header from "../components/Header";
import dark from "../styles/theme/dark";
import light from "../styles/theme/light";

export default function App({ Component, pageProps }: AppProps) {
  const [currentTheme, setCurrentTheme] = React.useState("");

  useEffect(() => {
    const tagManagerArgs = {
      gtmId: `GTM-T98BFRQ`,
    };
    TagManager.initialize(tagManagerArgs);
  }, []);

  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <>
      <Head>
        <title>Renata Karolina | Web Developer</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
