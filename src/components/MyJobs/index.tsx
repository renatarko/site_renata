import { useInView } from "framer-motion";
import { useRef } from "react";
import * as S from "./style";

export default function MyJobs() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.SectionTitle>Serviços</S.SectionTitle>

        <S.TitleContainer>
          <h1>Desenvolvedora</h1>
          <h2>Front-End</h2>
        </S.TitleContainer>

        <S.Description>
          <strong>Principais Projetos</strong> que aprimorei e consolidei minhas
          hard skills em HTML, CSS, JavaScript, React, TypeScript e
          Styled-Components. Foram realizados em freelances, cursos e projetos
          pessoais.
        </S.Description>
        <S.Description>
          Nesses projetos, tive a oportunidade de aprimorar diversas
          habilidades, incluindo design de interface do usuário (UI/UX),
          execução de operações CRUD, integração com APIs e desenvolvimento de
          competências essenciais, como comunicação eficaz com clientes e
          gerenciamento de prazos de entrega.
        </S.Description>
      </S.Container>
    </S.Wrapper>
  );
}
