import styled, { css } from "styled-components";

export type OpenHistoryProps = {
  open?: boolean;
};

export const Wrapper = styled.div<OpenHistoryProps>`
  ${({ open }) => css`
    width: 100%;
    min-height: ${open ? "10rem" : "8.5rem"};
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;
  padding: 3rem 8rem;
  transition: all 0.3s;

  @media (max-width: 900px) {
    padding: 3rem 0;
  }
`;

export const ShowHistory = styled.button<OpenHistoryProps>`
  ${({ theme, open }) => css`
    background: none;
    border: none;
    font-family: ${theme.fontFamily.poppins};
    color: ${({ theme }) => theme.colors.baseLight};
    font-size: ${theme.fontSize.description};
    text-decoration: underline;
    cursor: pointer;
    transition: all 0.3s;

    align-self: ${open ? "flex-end" : "center"};
    margin-top: ${open ? "2rem" : "none"};
  `}
`;

export const Myhistory = styled.p<OpenHistoryProps>`
  ${({ theme, open }) => css`
    color: ${({ theme }) => theme.colors.baseLight};
    font-size: ${theme.fontSize.description};
    display: ${open ? "flex" : "none"};
  `}
`;
