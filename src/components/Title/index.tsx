import { useInView } from "framer-motion";
import { useRef } from "react";
import * as S from "./style";

export default function Title() {

  const ref = useRef(null)
  const isInView = useInView(ref)
  
  return (
      <S.Wrapper ref={ref}>
        <S.Container>
          <S.SubTitle>Olá!</S.SubTitle>
          <S.Title>Renata Karolina</S.Title>
          <S.SubTitleAfter>aqui!</S.SubTitleAfter>
        </S.Container>
      </S.Wrapper>
  );
}
