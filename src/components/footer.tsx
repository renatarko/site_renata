import styled from "styled-components";
import { FaWhatsapp, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";

const FooterDiv = styled.footer`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 1rem;

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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const StyledA = styled.a`
  color: rgb(130, 92, 168);
  cursor: pointer;
  transition: all 0.2s;
  font-size: 2.2rem;

  &:hover {
    color: rgb(221, 151, 219);
    transform: scale(1.2);
  }
`;

const FooterText = styled.p`
  width: 100%;
  font-size: 1rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: ${({ theme }) => theme.colors.secondary};
  /* padding: 10px; */
`;

export default function Footer() {
  return (
    <>
      <FooterDiv>
        <FooterText>Feito com ❤️ por Renata Karolina</FooterText>
        <ContainerButton>
          <StyledA href="https://wa.me/+5567991687767" target="_blank">
            <FaWhatsapp />
          </StyledA>
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
      </FooterDiv>
    </>
  );
}
