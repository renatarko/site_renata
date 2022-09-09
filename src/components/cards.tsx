import styled from "styled-components";
import {
  FaWhatsapp,
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaRegWindowMaximize,
} from "react-icons/fa";
import Link from "next/link";

const ContainerButton = styled.section`
  background: transparent;
  width: 100%;
  height: 60%;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

const LinkExtern = styled.a`
  width: 80%;
  box-shadow: 0px 0px 4px 2px rgba(26, 17, 24, 0.2);
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  padding-left: 20px;
  padding: 10px;
  border-radius: 10px;
  background: transparent;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  cursor: pointer;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

  &:hover,
  :focus,
  :active {
    background: ${({ theme }) => theme.colors.secondary};
  }

  &:hover > span {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }

  &:hover > a {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }

  &:hover > svg {
    transform: scale(1.2);
    transition: all 0.4s;
  }
`;

const SocialName = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;

const StyledA = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
`;

const StyledLink = ({ href, name }) => (
  <Link href={href} passHref>
    <StyledA>{name}</StyledA>
  </Link>
);

export default function Cards() {
  return (
    <div>
      <ContainerButton>
        <LinkExtern>
          <FaWhatsapp color="rgb(130, 92, 168)" fontSize={25} />
          <SocialName>Whatsapp</SocialName>
        </LinkExtern>
        <LinkExtern>
          <FaInstagram color="rgb(130, 92, 168)" fontSize={25} />
          <SocialName>Instagram</SocialName>
        </LinkExtern>
        <LinkExtern>
          <FaGithub color="rgb(130, 92, 168)" fontSize={25} />
          <SocialName>GitHub</SocialName>
        </LinkExtern>
        <LinkExtern>
          <FaTwitter color="rgb(130, 92, 168)" fontSize={25} />
          <SocialName>Twitter</SocialName>
        </LinkExtern>
        <LinkExtern>
          <FaRegWindowMaximize color="rgb(130, 92, 168)" fontSize={25} />
          <StyledLink href="/projects" name="Projects" />
        </LinkExtern>
      </ContainerButton>
      <ContainerButton>
        <FaWhatsapp color="rgb(130, 92, 168)" fontSize={25} />
        <FaInstagram color="rgb(130, 92, 168)" fontSize={25} />
        <FaGithub color="rgb(130, 92, 168)" fontSize={25} />
        <FaTwitter color="rgb(130, 92, 168)" fontSize={25} />
      </ContainerButton>
    </div>
  );
}
