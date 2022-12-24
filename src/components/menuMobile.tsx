import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styled, { css } from "styled-components";

type MenuLinkProps = {
  isOpen: boolean
}

const MenuLink = styled.ul<MenuLinkProps>`
  ${({ isOpen}) => css`
    @media (max-width: 600px) {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      top: -1rem;
      right: 0;
      bottom: 0;
      left: 0;
      background: ${({theme}) => theme.colors.secondary};
      height:100vh;
      gap: 2rem;
      overflow: hidden;
      z-index: 10;
      transition: .5s;

      opacity: ${isOpen ? 1 : 0};
      pointer-events: ${isOpen ? "all" : "none"}
    }
  `} 
`

const IconMenuClose = styled.button`
  display: none;
  @media (max-width: 600px) {
    display: block;
    background: none;
    border: none;
    position: absolute;
    top: 0;
    bottom:34rem;
    right: 1.8rem;
    z-index: 10;
    cursor: pointer;
    
    > svg {
      color: ${({theme}) => theme.colors.purple} ;
      font-size: 2.5rem;

      &:hover {
        color: ${({theme}) => theme.colors.purpleLigth};
      }
    }
  }
`

const MenuIconOpen = styled.button`
  display: none;
    @media (max-width: 600px) {
      display: block;
      background: none;
      border: none;
      cursor: pointer;

      > svg {
        color: ${({theme}) => theme.colors.purple} ;
        font-size: 2rem;

        &:hover {
        color: ${({theme}) => theme.colors.purpleLigth};
      }
      }
    }
`

const LinkPage = styled.a`
  display: none;

  @media (max-width: 600px) {
    font-size: 1.5rem;
    display: flex;
    color: ${({ theme }) => theme.colors.purple};
    text-transform: uppercase;
    transition: 0.5s;
    font-weight: bold;
    padding: .5rem;
    border-radius: 10px;
  }

  :hover {
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({theme}) => theme.colors.purple};    
  }

  ::selection {
    color: ${({ theme }) => theme.colors.purpleLigth};
    background: none;
  }
`;

export const StyledLink = ({ href, name }) => (
  <Link href={href} passHref>
    <LinkPage>{name}</LinkPage>
  </Link>
);

export default function MenuMobile() {

  const [isOpen, setIsOpen] = useState(true)
  console.log(isOpen)
  return (
  <>
    <MenuIconOpen onClick={() => setIsOpen(true)}><FaBars /></MenuIconOpen>
    <MenuLink isOpen={isOpen}>
      <StyledLink href="/" name="Sobre mim" />
      <StyledLink href="/projects" name="Projetos" />
      <StyledLink href="/contact" name="Contato" />
      <IconMenuClose onClick={() => setIsOpen(false)}><FiX/></IconMenuClose>
    </MenuLink>
  </>
    )
}