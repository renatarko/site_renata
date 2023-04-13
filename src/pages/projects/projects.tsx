import Link from "next/link";
import ReactLoading from "react-loading";

import {
  FaBookmark,
  FaCalculator,
  FaCheckCircle,
  FaCode,
  FaGithubAlt,
  FaIdBadge,
  FaMugHot,
  FaStoreAlt,
} from "react-icons/fa";

import MenuMobile from "../../components/menuMobile/menuMobile";
import {
  Card,
  ContainerGrid,
  Header,
  // IconBack,
  Main,
  Title,
} from "./projectsStyle";

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

export default function Projects() {
  return (
    <>
      <Main>
        <Header>
          <Link href="/">{/* <IconBack /> */}</Link>
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
