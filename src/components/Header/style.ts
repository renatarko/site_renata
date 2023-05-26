import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  background-color: transparent;
  width: 100%;
  height: 6rem;
  padding:  2rem;
  display: flex;
  align-items: center;

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


export const Container = styled.ul`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacing.gap};
  `}
`;

export const ButtonTheme = styled.button`
  ${({ theme }) => css`
    background: none;
    border: none;
    color: ${theme.colors.secondary};
    font-size: ${theme.fontSize.icon};
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0.8rem;
    border-radius: 50%;
    transition: all .2s;

    &:hover {
      color: ${theme.colors.text};
      background-color: rgba(191, 176, 209, 0.1);
      opacity: 0.7;
    }
  `}
`;

export const ButtonIcon = styled.a`
  ${({ theme }) => css`
    background: none;
    border: none;
    color: ${theme.colors.secondary};
    font-size: ${theme.fontSize.icon};
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0.8rem;
    border-radius: 50%;
    transition: all .2s;

    &:hover {
      color: ${theme.colors.text};
      background-color: rgba(191, 176, 209, 0.1);
      opacity: 0.7;
    }
  `}
`;
