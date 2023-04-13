// import Head from "next/head";
import About from "../components/about/about";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import { Main } from "../sharedstyles";

export default function Home() {
  return (
    <>
      <Main>
        <Header children />
        <About />
        <Footer />
      </Main>
    </>
  );
}
