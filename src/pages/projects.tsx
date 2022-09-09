import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";

const myProjects = [
  {
    id: 1,
    name: "Minhas Tarefas",
    image: "/projects/1.png",
    url: "https://minhastarefasapp.netlify.app/",
  },
  {
    id: 2,
    name: "GitHub Repositories",
    image: "/projects/2.png",
    url: "https://github-tracker-rko.netlify.app/",
  },
  {
    id: 3,
    name: "Formulário de Cadastro",
    image: "/projects/3.png",
    url: "https://renatarko.github.io/formulario/",
  },
  {
    id: 4,
    name: "Site Empresa",
    image: "/projects/4.png",
    url: "https://github.com/renatarko/beatysalon/blob/main/readme.gif",
  },
  {
    id: 5,
    name: "Calculadora IMC",
    image: "/projects/5.png",
    url: "",
  },
  {
    id: 6,
    name: "Site Empresa",
    image: "/projects/6.png",
    url: "biancoea.netlify.app/",
  },
];

const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  width: 100%;
  height: 100vh;
  max-width: 800px;
`;

const Header = styled.header`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 1rem;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 2.2rem;
`;

const ContainerGrid = styled.div`
  display: grid;
  width: 100%;
  height: 80%;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
`;

const ContainerCard = styled.a`
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover > p {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0px 0px 10px 3px rgba(26, 17, 24, 0.2);
  }
`;

const Card = styled(Image)`
  border: 3px solid #7d6883 !important;
  border-radius: 10px !important;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  width: 80%;
  padding: 5px;
  border-radius: 10px;
  transition: all 0.3s;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.2rem;
`;

export default function Projects() {
  return (
    <Main>
      <Header>
        <Link href="/">
          <a>
            <FaArrowLeft color="rgb(232, 229, 233)" fontSize={30} />
          </a>
        </Link>
        <Title>Meus Projetos</Title>
      </Header>
      <ContainerGrid>
        {myProjects.map((project) => (
          <ContainerCard key={project.id} href={project.url} target="_blank">
            <Card
              className=""
              src={project.image}
              alt="projeto"
              {...{
                width: 230,
                height: 230,
                overFlow: "hidden",
                objectFit: "cover",
              }}
            ></Card>
            <Paragraph>{project.name}</Paragraph>
          </ContainerCard>
        ))}
      </ContainerGrid>
    </Main>
  );
}
