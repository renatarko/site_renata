import Link from "next/link";
import styled from "styled-components";
import { FaArrowLeft, FaCode } from "react-icons/fa";
import MenuMobile from "../components/menuMobile";
import {
  FaGithubAlt,
  FaCalculator,
  FaCheckCircle,
  FaMugHot,
  FaStoreAlt,
  FaIdBadge,
  FaBookmark,
} from "react-icons/fa";
import ReactLoading from "react-loading";

let id = Math.floor(Date.now() * Math.random()).toString(36);
const myProjects = [
  {
    id: id,
    name: "Minhas Tarefas",
    description: `Projeto "to do" onde tive o primeiro contato com hooks do React. Feito com React e ViteJS`,
    url: "https://minhastarefasapp.netlify.app/",
    icon: <FaCheckCircle />,
  },
  {
    id: id,
    name: "GitHub Repositories",
    description:
      "Primeiro projeto com React. A aplicação lista os repositórios dos usuários do GitHub",
    url: "https://github-tracker-rko.netlify.app/",
    icon: <FaGithubAlt />,
  },
  {
    id: id,
    name: <p style={{ fontSize: "1.15rem" }}>Formulário de Cadastro</p>,
    description: "Formulário com validações utilizando HTML, CSS e JS",
    url: "https://renatarko.github.io/formulario/",
    icon: <FaIdBadge />,
  },
  {
    id: id,
    name: "Site Salão de Beleza",
    description:
      "Projeto desenvolvido durante a NLW Origin da Rocketseat, utilizando HTML, CSS e JS",
    url: "https://renatarko.github.io/beatysalon/",
    icon: <FaStoreAlt />,
  },
  {
    id: id,
    name: "Calculadora IMC",
    description:
      "Primeiro projeto autônomo assim que iniciei os estudos na área. Feito com HTML, CSS e JS",
    url: "https://calculadoraimcapp.netlify.app/",
    icon: <FaCalculator />,
  },
  {
    id: id,
    name: "Site Cafeteria",
    description:
      "Landing Page sobre uma cafeteria fictícia que criei do zero, feito com HTML, CSS e JS",
    url: "https://cafeteriaapp.vercel.app/",
    icon: <FaMugHot />,
  },
  {
    id: id,
    name: "Site Book",
    description: "Página de Compra de Livro feito com HTML, CSS e JS",
    url: "https://redexbook.netlify.app",
    icon: <FaBookmark />,
  },
  {
    id: id,
    name: "Em Progresso",
    description: <ReactLoading color={"rgb(130, 92, 168)"} width={50} />,
    url: "",
    icon: <FaCode />,
  },
  {
    id: id,
    name: "Em Progresso",
    description: <ReactLoading color={"rgb(130, 92, 168)"} width={50} />,
    url: "",
    icon: <FaCode />,
  },
];

export const Main = styled.main`
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  margin: 0px auto;
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
  background: none;

  @media (max-width: 430px) {
    padding: 0 0.9rem;
  }
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
  background: transparent;
  width: 100%;
  display: grid;
  margin-top: 5rem;
  margin-bottom: 2rem;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  gap: 2rem;

  @media (max-width: 850px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem 0;
  }

  @media (max-width: 570px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  width: 15rem;
  height: 14rem;

  background: #1d1d1d;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;

  transition: all 0.5s;

  > h3 {
    color: ${({ theme }) => theme.colors.secondary};
    transition: all 0.3s;
    font-size: 1.3rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 20px;
    font-weight: 600;
    opacity: 1;
    transition: 0.5s;
  }

  > span {
    width: 100%;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 0.9rem;
    position: absolute;
    left: 0;
    bottom: 0;
    opacity: 0;
    margin: 0 auto;
    transition: 0.5s;
    padding: 5px;
  }

  span > div {
    position: absolute;
    top: -2rem;
    right: 0;
    left: 0;
    margin: 0 auto;
  }

  > svg {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.purple};
    position: absolute;
    top: 4.5rem;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    transition: 0.5s;
  }

  > a {
    width: 4.5rem;
    padding: 2px;
    background-color: ${({ theme }) => theme.colors.purple};
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 0.8rem;
    transition: all 0.5s;

    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    opacity: 0;
    cursor: pointer;

    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.purple};
      bottom: 0.5rem;
      background: transparent;
    }
  }

  &:hover {
    transform: scale(1.03);
    box-shadow: rgba(0, 0, 0, 0.432) 0px 5px 15px;
    border: 1px solid ${({ theme }) => theme.colors.purple};
  }

  &:hover h3 {
    opacity: 1;
    bottom: 8.5rem;
  }

  &:hover span {
    bottom: 3rem;
    opacity: 1;
    margin: 0 auto;
  }

  &:hover span > div {
    top: -3rem;
  }

  &:hover svg {
    font-size: 1.5rem;
    top: 1rem;
  }

  &:hover a {
    bottom: 10px;
    opacity: 1;
  }
`;

const IconBack = styled(FaArrowLeft)`
  color: ${({ theme }) => theme.colors.purple};
  font-size: 1.8rem;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    color: ${({ theme }) => theme.colors.purpleLight};
  }
`;

export default function Projects() {
  return (
    <>
      <Main>
        <Header>
          <Link href="/">
            <IconBack />
          </Link>
          <Title>Meus Projetos</Title>
          <MenuMobile />
        </Header>
        <ContainerGrid>
          {myProjects.map((project) => (
            <Card key={project.id}>
              {project.icon}
              <h3>{project.name}</h3>
              <span>{project.description}</span>
              <a href={project.url} target="_blank" rel="noreferrer">
                acessar
              </a>
            </Card>
          ))}
        </ContainerGrid>
      </Main>
    </>
  );
}
