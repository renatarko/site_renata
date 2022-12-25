import styled from "styled-components";
import { FaWhatsapp, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";

import PageProgress from "../components/pageProgress";
import MenuMobile from "../components/menuMobile";
import Header from "../components/header";

const FooterDiv = styled.footer`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 655px) {
    a {
      font-size: 2rem;
    }
  }

  @media (max-width: 470px) {
    p {
      font-size: 0.8rem;
    }
    a {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 432px) {
    flex-direction: column;
    text-align: center;
    section {
      justify-content: space-around;
    }
    a {
      order: 1;
    }
    p {
      order: 2;
    }
  }
`;
const ContainerButton = styled.section`
  width: 100%;
  display: none;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const StyledA = styled.a`
  color: ${({ theme }) => theme.colors.purple};
  cursor: pointer;
  transition: all 0.2s;
  font-size: 2.2rem;

  &:hover {
    color: ${({ theme }) => theme.colors.purpleLigth};
    transform: scale(1.2);
  }
`;

const Main = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
  max-width: 800px;
`


export default function Contact() {
  return (
    <>
    <Header>
      <MenuMobile/>
    </Header>
    <Main>
    <PageProgress/>
      {/* <FooterDiv> */}
        <ContainerButton>
          {/* <StyledA href="https://wa.me/+5567991687767" target="_blank">
            <FaWhatsapp />
          </StyledA> */}
          <StyledA href="https://www.instagram.com/renata_rko/" target="_blank">
            <FaInstagram />
          </StyledA>
          <StyledA href="https://github.com/renatarko" target="_blank">
            <FaGithub />
          </StyledA>
          <StyledA href="https://twitter.com/renatarko_" target="_blank">
            <FaTwitter />
          </StyledA>
        </ContainerButton>
      {/* </FooterDiv> */}
      </Main>
    </>
  );
}
