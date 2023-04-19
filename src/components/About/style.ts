import styled, { css } from "styled-components";

export type OpenHistoryProps = {
  open?: boolean;
};

export const Wrapper = styled.section<OpenHistoryProps>`
  ${({ theme, open }) => css`
    width: 100%;
    min-height: ${open ? "10rem" : "8.5rem"};
    background-color: ${theme.colors.baseDark};
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 8rem;
  transition: all 0.3s;
  margin-right: 5rem;
  margin-left: 5rem;
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
