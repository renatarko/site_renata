import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  position: absolute;
  padding: 0.5rem;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.baseLight};
    font-size: ${theme.fontSize.title};
    text-align: start;
    margin-top: -15px;

    @media (max-width: 570px) {
      font-size: ${theme.fontSize.subTitle};
    }
  `}
`;

export const SubTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.baseLight};
    font-size: ${theme.fontSize.subTitle};
    text-align: start;
    margin-bottom: 0.5rem;

    @media (max-width: 570px) {
      font-size: ${theme.fontSize.titleSection};
    }
  `}
`;

export const SubTitleAfter = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.baseLight};
    font-size: ${theme.fontSize.subTitle};
    text-align: end;
    margin-top: -15px;

    @media (max-width: 570px) {
      font-size: ${theme.fontSize.titleSection};
    }
  `}
`;

export const Line = styled.div`
  ${({ theme }) => css`
    width: 70%;
    height: 2px;
    background: ${theme.colors.primary};
    position: absolute;
    bottom: 1.2rem;

    @media (max-width: 570px) {
      bottom: 0.5rem;
    }
  `}
`;
