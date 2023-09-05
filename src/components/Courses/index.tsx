import { FaCode } from "react-icons/fa";
import items from "./mock";
import * as S from "./style";

export default function Courses() {
  return (
    <S.Wrapper id="services">
      <div className="container-title">
        <S.Title>Cursos</S.Title>
        <FaCode />
      </div>

      <S.Container>
        {items.map((item) => {
          return (
            <S.Card key={item.id} className={item.id}>
              <S.Teaching>{item.teaching}</S.Teaching>
              <S.Course href={item.url} target="_blank">
                {item.course}
              </S.Course>
              <div className={`${item.class}`}>
                <a href={item.urlEn} target="_blank">
                  certificate in english
                </a>
              </div>
            </S.Card>
          );
        })}
      </S.Container>
    </S.Wrapper>
  );
}
