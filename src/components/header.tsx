import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Logo from "./logo";

const ContainerMenu = styled.div`
  width: 100%;
  height: 4rem;
  padding: 0 2rem;
  margin-top: 1rem;
  display: flex;
  aligm-items: center;

  @media (max-width: 650px) {
    margin-top: 5rem;
  }
`;

const Menu = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuLink = styled.div`
  display: inline-flex;
  gap: 2rem;
  aligm-items: center;

  @media (max-width: 650px) {
   display: none;
  }
`;

const LinkPage = styled.a`
  color: ${({ theme }) => theme.colors.purple};
  text-transform: uppercase;
  transition: 0.4s;
  font-weight: bold;
  padding: 5px 0;

  :hover {
    color: ${({ theme }) => theme.colors.purpleLigth};
    border-bottom: 2px solid ${({theme}) => theme.colors.purpleLigth};
  }

  ::selection {
    color: ${({ theme }) => theme.colors.purpleLigth};
    background: none;
  }
`;

const LinkExtern = styled.a`
  display: none;
  background: rgb(221, 151, 219);
  width: 20rem;
  padding: 8px;
  border-radius: 15px;
  text-align: center;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 5px 8px 0px rgba(40, 36, 40, 0.2) !important;
    transform: scale(1.1);
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
        {/* <Logo
          {...props}
          src="/assets/rk.png"
          layout="fixed"
          width={50}
          height={50}
        /> */}

        <MenuLink>
          <StyledLink href="/" name="Sobre mim" />
          <StyledLink href="/projects" name="Projetos" />
          <StyledLink href="/contact" name="Contato" />
        </MenuLink>
      </Menu>
      {/* <Title>
          Olá! Sou Renata,
          <TitleGradient>Desenvolvedora Front-end.</TitleGradient>
        </Title> */}
    </ContainerMenu>
  );
}
