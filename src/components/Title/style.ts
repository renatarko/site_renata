import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 100;
`;

export const Container = styled.div`
  position: absolute;
  padding: 0.5rem;

  @media (max-width: 320px) {
    left: 0;
    right: 0;
  }
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.fontSize.title};
    text-align: start;
    margin-top: -15px;
    text-transform: uppercase;

    @media (max-width: 570px) {
      font-size: ${theme.fontSize.subTitle};
    }
  `}
`;

export const SubTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.fontSize.subTitle};
    text-align: start;
    margin-bottom: 0.5rem;
    @media (max-width: 570px) {
      font-size: ${theme.fontSize.description};
    }
  `}
`;

export const SubTitleAfter = styled.h2`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    color: ${theme.colors.text};
    font-size: ${theme.fontSize.subTitle};
    text-align: end;
    margin-top: -8px;
    position: relative;

    &::before {
      content: "";
      width: 60%;
      height: 2px;
      background-color: ${theme.colors.third};
      position: absolute;
      left: 0;
      bottom: 1.2rem;
    }

    @media (max-width: 570px) {
      font-size: ${theme.fontSize.titleSection};

      &::before {
        bottom: 1rem;
      }
    }
  `}
`;
