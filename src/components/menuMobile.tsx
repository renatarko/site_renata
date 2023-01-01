import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import styled, { css } from "styled-components";

type MenuLinkProps = {
  isOpen: boolean
}

const MenuLink = styled.ul<MenuLinkProps>`
  display: none;
  
  @media (max-width: 600px) {
    position: absolute;
    display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      top: 5.3rem;
      right: 0;
      bottom: 0;
      left: 0;
      background: ${({theme}) => theme.colors.primary};
      gap: 2rem;
      overflow: hidden;
      transition: all .5s; 
      z-index: 10;  

    ${({ isOpen}) => css`
      visibility: ${isOpen ? "visible" : "hidden"};
      height: ${isOpen ? "100vh" : 0};
      pointer-events: ${isOpen ? "all" : "none"};
      opacity: ${isOpen ? "1" : 0.3};
    `} 
  }
`
const MenuIconOpen = styled.button`
  display: none;
    @media (max-width: 600px) {
      display: block;
      background: none;
      border: none;
      cursor: pointer;
      z-index: 10;  

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
    padding: .4rem;
    border-radius: 8px;
    z-index: 10;  
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

  const [isOpen, setIsOpen] = useState(false)

  const hadleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
  <>
    <MenuIconOpen onClick={hadleIsOpen}><FaBars /></MenuIconOpen>
    <MenuLink isOpen={isOpen}>
      <StyledLink href="/" name="Sobre mim" />
      <StyledLink href="/projects" name="Projetos" />
      <StyledLink href="/contact" name="Contato" />
    </MenuLink> 
  </>
    )
}