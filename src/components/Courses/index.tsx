import { FaCode } from "react-icons/fa";
import * as S from "./style";

const items = [
  {
    id: 1,
    teaching: "Rocketseat",
    course: "NLW",
    url: "",
  },
  {
    id: 2,
    teaching: "Rocketseat",
    course: "NLW",
    url: "",
  },
  {
    id: 3,
    teaching: "Rocketseat",
    course: "NLW",
    url: "",
  },
  {
    id: 4,
    teaching: "Rocketseat",
    course: "NLW",
    url: "",
  },
];

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
            <S.Card key={item.id} href={item.url}>
              <S.Teaching>{item.teaching}</S.Teaching>
              <S.Course>{item.course}</S.Course>
            </S.Card>
          );
        })}
      </S.Container>
    </S.Wrapper>
  );
}
