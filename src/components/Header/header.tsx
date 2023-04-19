import { ReactNode } from "react";

import * as S from "./style";

import Link from "next/link";
import { FaGithub, FaSun } from "react-icons/fa";

type HeaderProps = {
  children: ReactNode;
};

export const StyledLink = ({ href, name }) => (
  <Link href={href} passHref>
    <S.LinkPage>{name}</S.LinkPage>
  </Link>
);

export default function Header({ children }: HeaderProps) {
  return (
    <S.Container>
      <S.Menu>
        {/* <Logo /> */}
        <S.MenuLinks>
          <StyledLink href="/" name="Home" />
          <StyledLink href="/projects" name="Serviços" />
          <StyledLink href="/contact" name="Cursos" />
        </S.MenuLinks>

        <S.ContainerIcon>
          <S.ButtonTheme>
            <FaSun />
          </S.ButtonTheme>
          <S.ButtonIcon>
            <FaGithub />
          </S.ButtonIcon>
        </S.ContainerIcon>

        {/* <MenuMobile /> */}
      </S.Menu>
    </S.Container>
  );
}
