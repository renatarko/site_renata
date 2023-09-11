import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const SectionTitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.titleSection};
    color: ${theme.colors.secondary};
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 3px;
    margin-bottom: 2rem;
  `}
`;

export const Container = styled.article`
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  ${({ theme }) => css`
    margin-bottom: 1rem;

    h1 {
      font-size: ${theme.fontSize.title};
      color: ${theme.colors.text};

      @media (max-width: 500px) {
        font-size: ${theme.fontSize.subTitle};
      }
    }

    h2 {
      font-size: ${theme.fontSize.title};
      color: ${theme.colors.third};

      @media (max-width: 500px) {
        font-size: ${theme.fontSize.titleSection};
      }
    }
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.description};
    color: ${theme.colors.text};
    margin-top: 1rem;
    line-height: 1.6rem;
    text-align: justify;
  `}
`;
