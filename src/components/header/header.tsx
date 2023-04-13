import Link from "next/link";
import { ReactNode } from "react";

import { ContainerMenu, LinkPage, Menu, MenuLink } from "./style";

import Logo from "../logo/logo";
import MenuMobile from "../menuMobile/menuMobile";

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
        <Logo />
        <MenuLink>
          <StyledLink href="/" name="Sobre mim" />
          <StyledLink href="/projects" name="Projetos" />
          <StyledLink href="/contact" name="Contato" />
        </MenuLink>

        <MenuMobile />
      </Menu>
    </ContainerMenu>
  );
}
