import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  width: 100%;
  /* height: 50%; */
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  align-items: center;
  flex: 3;

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
  }
`;

const TextPrimary = styled.p`
  width: 100%;
  font-size: 1.2rem;
  font-family: "Roboto", sans-serif;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: justify;
  display: flex;
`;

const ContainerTextAndA = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 30px;
`;

const TextSecundy = styled.span`
  padding: 1rem;
  /* border-radius: 10px 20px; */
  width: 45%;
  font-size: 1.1rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: justify;
`;

const LinkExtern = styled.a`
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

const StyledA = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 800;
  text-transform: uppercase; ;
`;

const StyledLink = ({ href, name }) => (
  <Link href={href} passHref>
    <StyledA>{name}</StyledA>
  </Link>
);

export default function Cards() {
  return (
    <>
      <Container>
        <TextPrimary>
          Iniciei a transição para a área de desenvolvimento de software em
          Abril de 2022 estudando lógica de programação e algoritmos,
          tecnologias HTML, CSS e a linguagem de JavaScript.
          <br />
          <br /> Atualmente, desenvolvo projetos com a biblioteca React com seu
          ecossistema e o framework Next.js.
        </TextPrimary>

        <ContainerTextAndA>
          {/* <FaLongArrowAltRight color="#f5f5f5" fontSize={30} /> */}
          <LinkExtern>
            <StyledLink href="/projects" name="Projetos" />
          </LinkExtern>
        </ContainerTextAndA>
      </Container>
    </>
  );
}
