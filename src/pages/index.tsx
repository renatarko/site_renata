// import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import { Main } from "../components/sharedstyles";
import About from "../components/about";

export default function Home() {

  return (
      <>
      <Main>
        <Header children/>
        <About/>
        <Footer/>
      </Main>
     </>
  );
}
