import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const Container = styled.div`
  width: 100%;
  padding: 2rem 2rem;
  display: flex;
  align-items: center;
  // margin-top: 5rem;

  @media (max-width: 655px) {
    a {
      width: 20rem;
    }
  }

  @media (max-width: 470px) {
    p {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 432px) {
    padding: 0rem 1rem;

    p {
      font-size: 1rem;
    }
  }
`;

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 470px) {
    width: 100%;
    align-items: center;
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 2.6rem;

  ::selection {
    color: ${({ theme }) => theme.colors.purpleLigth};
    background: none;
  }
`;

const SubTitle = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.purpleLigth};
  margin: 0;

  ::selection {
    color: ${({ theme }) => theme.colors.purple};
    background: none;
  }
`;

const Description = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.colors.secondary};

  ::selection {
    color: ${({ theme }) => theme.colors.purpleLigth};
    background: none;
  }

  @media (max-width: 320px) {
    line-height: 1.8rem;
  }
`;

const ContainerTextAndA = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 30px;
`;

const LinkExtern = styled.a`
  display: none;
  background: rgb(221, 151, 219);
  width: 20rem;
  padding: 8px;
  border-radius: 15px;
  text-align: center;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 5px 8px 0px rgba(40, 36, 40, 0.2) !important;
    transform: scale(1.1);
  }
`;

const StyledA = styled.a``;

const StyledLink = ({ href, name }) => (
  <Link href={href} passHref>
    <StyledA>{name}</StyledA>
  </Link>
);

export default function Mains() {
  return (
      <Container>
        <ContainerText>
          <Title>
            Olá! Sou Renata,
            <SubTitle>Desenvolvedora Front-end.</SubTitle>
          </Title>

          <Description>
            Iniciei a transição para a área de desenvolvimento de software em
            Abril de 2022 estudando lógica de programação e algoritmos,
            tecnologias HTML, CSS e a linguagem de JavaScript.
            <br />
            <br /> Atualmente, desenvolvo projetos com a biblioteca React com
            seu ecossistema e o framework Next.js.
          </Description>

          <ContainerTextAndA>
            <LinkExtern>
              <StyledLink href="/projects" name="Projetos" />
            </LinkExtern>
          </ContainerTextAndA>
        </ContainerText>
      </Container>
  );
}
