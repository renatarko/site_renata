// import Head from "next/head";
import Header from "../components/header";
import Mains from "../components/mains";
import Footer from "../components/footer";
import { Container, Main } from "../components/sharedstyles";

export default function Home() {
  return (
    <Main>
      <Container>
        <Header />
        <Mains />
        <Footer />
      </Container>
    </Main>
  );
}
