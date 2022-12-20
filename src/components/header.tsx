import styled, { ThemeConsumer } from "styled-components";
import Image from "next/image";
import Link from "next/link";

const ContainerMenu = styled.div`
  width: 100%;
  height: 4rem;
  padding: 0 2rem;
  margin-top: 1rem;
  display: flex;
  aligm-items: center;

  @media (max-width: 655px) {
    h1 {
      font-size: 2rem;
    }
  }

  @media (max-width: 520px) {
    h1 {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 470px) {
    h1 {
      font-size: 1.4rem;
      margin: 0;
    }
  }
  @media (max-width: 432px) {
    padding: 1rem;
    flex-direction: column;

    h1 {
      font-size: 1.1rem;
      align-items: center;
      text-align: center;
    }
  }

  @media (max-width: 470px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

const Logo = styled(Image)``;

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
`;

const LinkPage = styled.a`
  color: ${({ theme }) => theme.colors.purple};
  text-transform: uppercase;
  transition: 0.2s;

  :hover {
    color: ${({ theme }) => theme.colors.purpleLigth};
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

const StyledA = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 800;
  text-transform: uppercase; ;
`;

const StyledLink = ({ href, name }) => (
  <Link href={href} passHref>
    <LinkPage>{name}</LinkPage>
  </Link>
);

export default function Header(props) {
  return (
    <ContainerMenu>
      <Menu>
        <Logo
          {...props}
          src="/assets/rk.png"
          layout="fixed"
          width={50}
          height={50}
        />

        <MenuLink>
          <StyledLink href="/about" name="Sobre mim" />
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
