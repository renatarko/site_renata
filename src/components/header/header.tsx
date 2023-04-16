import { ReactNode } from "react";

import { ButtonTheme, ContainerMenu, LinkPage, Menu, MenuLinks } from "./style";

import Link from "next/link";
import { FaSun } from "react-icons/fa";

type HeaderProps = {
  children: ReactNode;
};

export const StyledLink = ({ href, name }) => (
  <Link href={href} passHref>
    <LinkPage>{name}</LinkPage>
  </Link>
);

export default function Header({ children }: HeaderProps) {
  return (
    <ContainerMenu>
      <Menu>
        {/* <Logo /> */}
        <MenuLinks>
          <StyledLink href="/" name="Home" />
          <StyledLink href="/projects" name="Serviços" />
          <StyledLink href="/contact" name="Cursos" />
        </MenuLinks>

        <ButtonTheme>
          <FaSun />
        </ButtonTheme>
        {/* <MenuMobile /> */}
      </Menu>
    </ContainerMenu>
  );
}
