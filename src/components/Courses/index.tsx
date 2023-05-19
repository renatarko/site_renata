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
          console.log(item.course);
          return (
            <S.Card
              key={item.id}
              href={item.url}
              className={item.id}
              target="_blank"
            >
              <S.Teaching>{item.teaching}</S.Teaching>
              <S.Course>{item.course}</S.Course>
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
