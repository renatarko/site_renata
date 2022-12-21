import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  margin-top: 4rem;

  @media (max-width: 655px) {
    a {
      width: 20rem;
    }
  }

  @media (max-width: 470px) {
    padding: 0 1rem;
  }
`;

const ContainerText = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 625px) {
    width: 100%;
  }

  @media (max-width: 510px) {
    width: 20rem;
  }

  @media (max-width: 340px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 2.6rem;
  margin: 0;

  ::selection {
    color: ${({ theme }) => theme.colors.purpleLigth};
    background: none;
  }

  @media (max-width: 625px) {
    font-size: 2rem;
  }

  @media (max-width: 340px) {
    font-size: 1.5rem;
  }

`;

const SubTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.purpleLigth};
  margin: 0;

  ::selection {
    color: ${({ theme }) => theme.colors.purple};
    background: none;
  }

  @media (max-width: 625px) {
    font-size: 2rem;
  }

  @media (max-width: 340px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  width: 40rem;
  color: ${({ theme }) => theme.colors.secondary};

  ::selection {
    color: ${({ theme }) => theme.colors.purpleLigth};
    background: none;
  }

  @media (max-width: 625px) {
    width: 100%;
  }

`;

export default function Mains() {
  return (
      <Container>
        <ContainerText>
          <Title>
            Olá! Sou Renata,
          </Title>
          <SubTitle>Desenvolvedora Front-end.</SubTitle>
        </ContainerText>
          <Description>
            Iniciei a transição para a área de desenvolvimento de software em
            Abril de 2022 estudando lógica de programação e algoritmos,
            tecnologias HTML, CSS e a linguagem de JavaScript.
            <br />
            <br /> Atualmente, desenvolvo projetos com a biblioteca React com
            seu ecossistema e o framework Next.js.
          </Description>        
      </Container>
  );
}
