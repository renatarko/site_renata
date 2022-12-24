import styled from "styled-components";
import Link from "next/link";
import Logo from "./logo";
import MenuMobile from "./menuMobile";

const ContainerMenu = styled.div`
  width: 100%;
  height: 4rem;
  padding: 0 2rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  position: relative;

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

export default function Header() {

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
