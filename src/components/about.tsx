import styled, { css } from "styled-components";
import { Main } from "../pages/projects";
import {FaRegCommentAlt } from "react-icons/fa";
import { useState } from "react";
import Footer from "./footer";
import { Container } from "./sharedstyles";

// const SMain = styled(Main)`
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   gap: 5rem;
//   z-index: 1;
//   padding: 0 1rem;
//   margin-top: 10rem;   
// `;

const ContainerText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  padding-bottom: 3rem;
  /* margin-top: 12rem; */

  @media (max-width: 600px) {
     padding-top: 7rem;
     align-items: center;
     text-align: center;
     gap: 5rem;
  }

  /* @media (max-width: 320px) {
      padding-top: 10rem;
    } */
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 2rem;
  margin: 0;
  /* z-index: 1; */

  ::selection {
    color: ${({ theme }) => theme.colors.purpleLigth};
    background: none;
  }

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }

`;

const SubTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.purpleLigth};
  margin: 0;

  ::selection {
    color: ${({ theme }) => theme.colors.purple};
    background: none;
  }

  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

const Description = styled.p`
  width: 100%;
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.secondary};

  ::selection {
    color: ${({ theme }) => theme.colors.purpleLigth};
    background: none;
  }

  @media (max-width: 500px) {
    /* font-size: .95rem; */
    display: none;
  }
`;

const ImageProfile = styled.img`
    max-width: 100%;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    background-color: ${({theme}) => theme.colors.purple};
    box-shadow: 59px 47px 37px -7px rgba(0,0,0,0.09);
    -webkit-box-shadow: 19px 27px 37px -7px rgba(0,0,0,0.3);
    -moz-box-shadow: 59px 47px 37px -7px rgba(0,0,0,0.9);
    z-index: 1;
    animation: identifier 8s ease-in-out infinite 1s ;
  
    @keyframes identifier {
      0% {
        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
      }
      50% {
        border-radius: 30% 60% 70% 40%/50% 60% 60% 40%;
      }
      100%{
        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
      }
    }

  @media (max-width: 600px) {
      position: absolute;
      width: 8rem;
      height:8rem;
      top: 1rem;
  }
`

// Após 390px

type ButtonIconProps = {
  openMedia: boolean;
}

const ContainerIconAboutMe = styled.div<ButtonIconProps>`
  display: none;
  @media (max-width: 550px) {
    display: flex;
    position: absolute;
    min-height: 40%;
    width: 90%;
    background-color: ${({theme}) => theme.colors.purple};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    padding: 0 .8rem;
    z-index: 1;
    border-radius: 10px;
    transition: all .6s;
    /* padding-bottom: 1rem; */

    ${({openMedia}) => css`  
    visibility: ${openMedia ? "visible" : "hidden"};
    /* display: ${openMedia ? "flex" : "none"}; */
    pointer-events: ${openMedia ? "all" : "none"};
    bottom: ${openMedia ? "7rem" : "5rem" };
    opacity: ${openMedia ? "1" : 0};

    @media (max-width: 320px) {
      bottom: ${openMedia ? "5.5rem" : "5rem" };
    }

    &::after {
      content: " ";
      position: absolute;
      top: 97%;
      left: 50%;
      bottom: 0;
      border-width: 20px;
      border-style: solid;
      border-color: ${({theme}) => theme.colors.purple} transparent transparent transparent;
      margin-left: -20px;
    }
  `}
  }
`
const DescriptionMedia = styled.p`
  text-align: center;
  color: white;
  font-size: .95rem;
  z-index: 1;
`

const ButtonOpen = styled.button<ButtonIconProps>`
 display: none;
  
  @media (max-width: 500px) {
    display:flex;
    background: none;
    border: none;
    color: ${({theme}) => theme.colors.purple};
    font-size: 40px;
    position: relative;
    /* position: absolute; */
    /* top: 5rem; */
    /* bottom: -100px; */
    z-index: 1;
    transition: all .6s;

    ${({openMedia}) => css`
      top: ${openMedia ? "6rem" : "1rem"};
    `}
  }
`

export default function About() {

  const [openMedia, setOpenMedia] = useState(false)

  function handleOpenMedia() {
    setOpenMedia(!openMedia)
  }

  return (
  <>
      {/* <SMain> */}
    <Main>
      <Container>
        <ContainerText>
          <div>
            <Title>
              Olá! Sou Renata,
            </Title>
            <SubTitle>Desenvolvedora Front-end.</SubTitle>
            <Description>
              Iniciei a transição para a área de desenvolvimento de software em
              Abril de 2022 estudando lógica de programação e algoritmos,
              tecnologias HTML, CSS e a linguagem de JavaScript.
              <br />
              Atualmente, desenvolvo projetos com a biblioteca React com
              seu ecossistema e o framework Next.js.
            </Description>
          </div>

          <ButtonOpen openMedia={openMedia} onClick={handleOpenMedia}><FaRegCommentAlt/></ButtonOpen>
          
        </ContainerText>

        <ContainerIconAboutMe openMedia={openMedia}>
          <DescriptionMedia>
            Iniciei a transição para a área de desenvolvimento de software em
            Abril de 2022 estudando lógica de programação e algoritmos,
            tecnologias HTML, CSS e a linguagem de JavaScript.
          </DescriptionMedia>
          <DescriptionMedia>
             Atualmente, desenvolvo projetos com a biblioteca React com
            seu ecossistema e o framework Next.js.
          </DescriptionMedia>
        </ContainerIconAboutMe>

        <ImageProfile src="/assets/foto.png"/>
      </Container>

    </Main>
      {/* </SMain> */}
</>
  );
}