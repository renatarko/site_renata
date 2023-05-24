import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";
import * as S from "./style";

export default function Footer() {
  return (
    <S.Wrapper>
      <S.ContainerLogo>
        <div className="rk">
          <p>RK</p>
        </div>
        <p className="name">Renata Karolina</p>
      </S.ContainerLogo>

      <S.ContainerLinks>
        <S.Links>
          <Link to="home" spy={true} smooth={true} activeClass="active" duration={1000}>home</Link>
          <Link to="service" spy={true} smooth={true} activeClass="active" duration={1000}>serviços</Link>
          <Link to="courses" spy={true} smooth={true} activeClass="active" duration={1000}>cursos</Link>
        </S.Links>
        <span>
          <FaEnvelope /> renatakarolinarko@gmail.com
        </span>
        <a className="createdby" href="https://twitter.com/renatarko_" target="_blank">
          created by @renata_rko
        </a>
      </S.ContainerLinks>
    </S.Wrapper>
  );
}
