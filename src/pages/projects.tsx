import Link from "next/link";
import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { IconBase } from "react-icons";

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
    url: "https://calculadoraimcapp.netlify.app/",
  },
  {
    id: 6,
    name: "Site Empresa",
    image: "/projects/6.png",
    url: "https://biancoea.netlify.app/",
  },
];

const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  width: 100%;
  height: 100%;
  max-width: 800px;
`;

const Header = styled.header`
  width: 100%;
  height: 4rem;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  /* @media (max-width: 790px) {
    padding: 0px 5rem;
  }
  @media (max-width: 545px) {
    padding: 0px 2rem;
  }
  @media (max-width: 360px) {
    padding: 0px 1rem;
    gap: 20px;
  } */
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.purple};
  text-transform: uppercase;
  font-size: 1.3rem;

  @media (max-width: 430px) {
    font-size: 1rem;
  }
`;

const ContainerGrid = styled.div`
  display: grid;
  width: 100%;
  height: 60%;
  margin-top: 5rem;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  gap: 2rem;

  @media (max-width: 790px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 545px) {
    grid-template-columns: 1fr;
  }
`;

const ContainerCard = styled.a`
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  width: 170px;
  height: 170px;
  background: #1d1d1d;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  gap: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.03);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background: #1d1d1d;
  }

    &:hover > p {
      padding: .3rem;
      background: ${({theme}) => theme.colors.secondary};
      color: ${({theme}) => theme.colors.purple}
    }
`;

const IconWorld = styled(TbWorld)`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.purpleLigth};
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.purpleLigth};
  border-radius: 10px;
  transition: all 0.3s;
  font-size: .8rem;
`;

const IconBack = styled(FaArrowLeft)`
  color: ${({theme}) => theme.colors.purple};
  font-size: 1.8rem;
  cursor: pointer;
  transition: .5s;

  &:hover {
    color: ${({theme}) => theme.colors.purpleLigth};
   
  }
`

export default function Projects() {
  return (
    <Main>
      <Header>
        <Link href="/">
          <IconBack/>
        </Link>
        <Title>Meus Projetos</Title>
      </Header>
      <ContainerGrid>
        {myProjects.map((project) => (
          <ContainerCard key={project.id} href={project.url} target="_blank">
            <Card>
              <IconWorld/>
              <Paragraph>{project.name}</Paragraph>
            </Card>
          </ContainerCard>
        ))}
      </ContainerGrid>
    </Main>
  );
}
