import { useInView } from "framer-motion";
import { useRef } from "react";
import * as S from "./style";

export default function Title() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <S.Wrapper ref={ref}>
      <S.Container>
        <S.SubTitle>Olá, sou Renata Karolina</S.SubTitle>
        <S.Title>Desenvolvedora</S.Title>
        <S.SubTitleAfter>Frontend</S.SubTitleAfter>
      </S.Container>
    </S.Wrapper>
  );
}
