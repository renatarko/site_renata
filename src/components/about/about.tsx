// import { Main } from "../pages/projects";
import { useState } from "react";
import { FaRegCommentAlt } from "react-icons/fa";

import {
  ButtonOpen,
  ContainerIconAboutMe,
  ContainerText,
  Description,
  DescriptionMedia,
  ImageProfile,
  SubTitle,
  Title,
} from "./style";

import { Container, Main } from "../../sharedstyles";

export default function About() {
  const [openMedia, setOpenMedia] = useState(false);

  function handleOpenMedia() {
    setOpenMedia(!openMedia);
  }

  return (
    <>
      <Main>
        <Container>
          <ContainerText>
            <div>
              <Title>Olá! Sou Renata,</Title>
              <SubTitle>Desenvolvedora Front-end.</SubTitle>
              <Description>
                Iniciei a transição para a área de desenvolvimento de software
                em Abril de 2022 estudando lógica de programação e algoritmos,
                tecnologias HTML, CSS e a linguagem de JavaScript.
                <br />
                Atualmente, desenvolvo projetos web com React utilizando o
                framework Next.js e o ecossistema JavaScript. Faço o deploy
                (implantação) dos projetos no Github Pages, Netlify, Vercel e
                Heroku.
              </Description>
            </div>

            <ButtonOpen openMedia={openMedia} onClick={handleOpenMedia}>
              <FaRegCommentAlt />
            </ButtonOpen>
          </ContainerText>

          <ContainerIconAboutMe openMedia={openMedia}>
            <DescriptionMedia>
              Iniciei a transição para a área de desenvolvimento de software em
              Abril de 2022 estudando lógica de programação e algoritmos,
              tecnologias HTML, CSS e a linguagem de JavaScript.
            </DescriptionMedia>
            <DescriptionMedia>
              Atualmente, desenvolvo projetos web com React utilizando o
              framework Next.js e o ecossistema JavaScript. Faço o deploy
              (implantação) dos projetos no Github Pages, Netlify, Vercel e
              Heroku.
            </DescriptionMedia>
          </ContainerIconAboutMe>

          <ImageProfile src="/assets/foto.png" />
        </Container>
      </Main>
    </>
  );
}
