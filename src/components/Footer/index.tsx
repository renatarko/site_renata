import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";
import * as S from "./style";

export default function Footer() {
  return (
    <S.Wrapper>
      <S.ContainerLogo>
        <p className="rk">RK</p>
        <p className="name">Renata Karolina</p>
      </S.ContainerLogo>

      <S.ContainerLinks>
        <S.Links>
          <Link href="/">home</Link>
          <Link href="/">serviços</Link>
          <Link href="/">cursos</Link>
        </S.Links>
        <span>
          <FaEnvelope /> renatakarolinarko@gmail.com
        </span>
        <a className="createdby" href="">
          created by @renata_rko
        </a>
      </S.ContainerLinks>
    </S.Wrapper>
  );
}
