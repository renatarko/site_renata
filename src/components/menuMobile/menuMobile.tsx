import Link from "next/link";
import { useState } from "react";

import { LinkPage, MenuIconOpen, MenuLink } from "./style";

import { FaBars } from "react-icons/fa";

export const StyledLink = ({ href, name }) => (
  <Link href={href} passHref>
    <LinkPage>{name}</LinkPage>
  </Link>
);

export default function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const hadleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MenuIconOpen onClick={hadleIsOpen}>
        <FaBars />
      </MenuIconOpen>
      <MenuLink isOpen={isOpen}>
        <StyledLink href="/" name="Sobre mim" />
        <StyledLink href="/projects" name="Projetos" />
        <StyledLink href="/contact" name="Contato" />
      </MenuLink>
    </>
  );
}
