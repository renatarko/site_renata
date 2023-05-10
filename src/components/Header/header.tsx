import Link from "next/link";
import { ReactNode } from "react";
import { FaGithub, FaSun } from "react-icons/fa";

import useAnalyticsEventTracker from "../useAnalticsEventTraker";

import * as S from "./style";

type HeaderProps = {
  children: ReactNode;
};

export const StyledLink = ({ href, name }) => (
  <Link href={href} passHref>
    <S.LinkPage>{name}</S.LinkPage>
  </Link>
);

export default function Header({ children }: HeaderProps) {
  const gaEventTracker = useAnalyticsEventTracker("header");

  return (
    <S.Container>
      <S.Menu>
        {/* <Logo /> */}
        {/* <S.MenuLinks>
          <StyledLink href="/home" name="Home" />
          <StyledLink href="/services" name="Serviços" />
          <StyledLink href="/courses" name="Cursos" />
        </S.MenuLinks> */}

        <S.ContainerIcon>
          <S.ButtonTheme>
            <FaSun />
          </S.ButtonTheme>
          <Link
            href={"https://github.com/renatarko"}
            target="_blank"
            onClick={() => gaEventTracker("linkGitHub")}
          >
            <S.ButtonIcon>
              <FaGithub />
            </S.ButtonIcon>
          </Link>
        </S.ContainerIcon>

        {/* <MenuMobile /> */}
      </S.Menu>
    </S.Container>
  );
}
