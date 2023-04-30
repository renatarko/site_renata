// import { Main } from "../pages/projects";

import { useState } from "react";
import * as S from "./style";

export default function About() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <S.Wrapper open={open}>
        <S.Content>
          <S.Myhistory open={open}>
            Iniciei a transição para a área de desenvolvimento de software em
            Abril de 2022 estudando lógica de programação e algoritmos,
            tecnologias HTML, CSS e a linguagem de JavaScript.
            <br />
            Atualmente, desenvolvo projetos web com React utilizando o framework
            Next.js e o ecossistema JavaScript. Faço o deploy (implantação) dos
            projetos no Github Pages, Netlify, Vercel e Heroku.
          </S.Myhistory>
          <S.ShowHistory onClick={() => setOpen(!open)} open={open}>
            {!open ? <p>Minha história</p> : <p>Mostrar menos</p>}
          </S.ShowHistory>
        </S.Content>
      </S.Wrapper>
    </>
  );
}
