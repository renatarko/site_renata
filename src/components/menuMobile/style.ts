import styled, { css } from "styled-components";

type MenuLinkProps = {
  isOpen: boolean;
};

export const MenuLink = styled.ul<MenuLinkProps>`
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
    background: ${({ theme }) => theme.colors.darkBg};
    gap: 2rem;
    overflow: hidden;
    transition: all 0.5s;
    z-index: 100;

    ${({ isOpen }) => css`
      visibility: ${isOpen ? "visible" : "hidden"};
      height: ${isOpen ? "calc(100vh - 5.3rem)" : 0};
      pointer-events: ${isOpen ? "all" : "none"};
      opacity: ${isOpen ? "1" : 0.3};
    `}
  }
`;
export const MenuIconOpen = styled.button`
  display: none;
  @media (max-width: 600px) {
    display: block;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 100;

    > svg {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 2rem;

      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

export const LinkPage = styled.a`
  display: none;

  @media (max-width: 600px) {
    font-size: 1.5rem;
    display: flex;
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
    transition: 0.5s;
    font-weight: bold;
    padding: 0.4rem;
    border-radius: 8px;
    z-index: 100;
  }

  :hover {
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.primary};
  }

  ::selection {
    color: ${({ theme }) => theme.colors.primary};
    background: none;
  }
`;
