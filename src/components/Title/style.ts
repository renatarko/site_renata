import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  position: absolute;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.baseLight};
    font-size: ${theme.fontSize.title};
    text-align: start;
    margin-top: -15px;
  `}
`;

export const SubTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.baseLight};
    font-size: ${theme.fontSize.subTitle};
    text-align: start;
  `}
`;

export const SubTitleAfter = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.baseLight};
    font-size: ${theme.fontSize.subTitle};
    text-align: end;
    margin-top: -15px;
  `}
`;

export const Line = styled.div`
  ${({ theme }) => css`
    width: 70%;
    height: 2px;
    background: ${theme.colors.primary};
    position: absolute;
    bottom: 1.2rem;
  `}
`;
