// import Head from "next/head";
import Header from "../components/header";
import Cards from "../components/cards";
import Footer from "../components/footer";
import { Container, Main } from "../components/sharedstyles";

export default function Home() {
  return (
    <Main>
      <Container>
        <Header />
        <Cards />
        <Footer />
      </Container>
    </Main>
  );
}
