import styled, { css } from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.darkBg};
  width: 100%;
  height: 6rem;
  padding: 0 2rem;
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

export const Menu = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuLinks = styled.ul`
  ${({ theme }) => css`
    display: inline-flex;
    gap: ${theme.spacing.gap};
    align-items: center;
  `}

  @media (max-width: 600px) {
    display: none;
  }
`;

export const LinkPage = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  transition: 0.4s;
  font-weight: bold;
  padding: 1rem;

  :hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const ContainerIcon = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacing.gap};
  `}
`;

export const ButtonTheme = styled.button`
  ${({ theme }) => css`
    background: none;
    border: none;
    color: ${theme.colors.primary};
    font-size: ${theme.fontSize.icon};
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover {
      color: ${theme.colors.baseLight};
      opacity: 0.7;
    }
  `}
`;

export const ButtonIcon = styled.button`
  ${({ theme }) => css`
    background: none;
    border: none;
    color: ${theme.colors.primary};
    font-size: ${theme.fontSize.icon};
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover {
      color: ${theme.colors.baseLight};
      opacity: 0.7;
    }
  `}
`;
