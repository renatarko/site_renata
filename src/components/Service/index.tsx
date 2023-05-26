import { useInView } from "framer-motion";
import { useRef } from "react";
import * as S from "./style";

export default function Service() {

  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true
  })
  
  return (
    <S.Wrapper ref={ref}>
      <S.Container>
        <S.SectionTitle>Serviços</S.SectionTitle>
        <S.Title>Desenvolvedora</S.Title>
        <S.SubTitle>Front-End</S.SubTitle>
        <S.Description>
          <strong>Principais Projetos</strong> que aprimorei e consolidei minhas
          hard skills em HTML, CSS, JavaScript, React, TypeScript e
          Styled-Components. Foram realizados em freelances, cursos e projetos
          pessoais.
        </S.Description>
      </S.Container>
    </S.Wrapper>
  );
}
