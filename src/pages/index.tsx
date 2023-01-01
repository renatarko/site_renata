// import Head from "next/head";
import Header from "../components/header";
import Mains from "../components/mains";
import Footer from "../components/footer";
import { Container, Main } from "../components/sharedstyles";
import MenuMobile from "../components/menuMobile";

export default function Home() {

  return (
    <Main>
      <Container>
        <Header children/>
        <Mains />
        {/* <Footer /> */}
      </Container>
    </Main>
  );
}
