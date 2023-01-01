import styled from "styled-components";
import Link from "next/link";
import Logo from "./logo";
import MenuMobile from "./menuMobile";
import { ReactNode } from "react";

const ContainerMenu = styled.div`
  background-color: ${({theme}) => theme.colors.primary};
  width: 100%;
  height: 6rem;
  padding:0 2rem;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 10;

  @media (max-width: 450px) {
    padding: 0 1rem;
  }
`;

const Menu = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuLink = styled.ul`

  display: inline-flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 600px) {
    display: none;
  }
`;

const LinkPage = styled.a`
  color: ${({ theme }) => theme.colors.purple};
  text-transform: uppercase;
  transition: 0.4s;
  font-weight: bold;
  padding: 1rem;

  :hover {
    color: ${({ theme }) => theme.colors.purpleLigth};
    border-bottom: 2px solid ${({theme}) => theme.colors.purpleLigth};
  }

  ::selection {
    color: ${({ theme }) => theme.colors.purpleLigth};
    background: none;
  }
`;



const StyledLink = ({ href, name }) => (
  <Link href={href} passHref>
    <LinkPage>{name}</LinkPage>
  </Link>
);

type HeaderProps = {
  children: ReactNode;
}

export default function Header({children}: HeaderProps) {

    return (
    <ContainerMenu>
      <Menu>
        <Logo/>
          <MenuLink>
            <StyledLink href="/" name="Sobre mim" />
            <StyledLink href="/projects" name="Projetos" />
            <StyledLink href="/contact" name="Contato" />
          </MenuLink>

          <MenuMobile/>
      </Menu>
    </ContainerMenu>
  );
}
