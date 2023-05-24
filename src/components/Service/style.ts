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
    color: ${theme.colors.primary};
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

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.title};
    color: ${theme.colors.baseLight};
    margin-bottom: 0;

    @media (max-width: 500px) {
      font-size: ${theme.fontSize.subTitle};
    }
  `}
`;
export const SubTitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.title};
    color: ${theme.colors.secondary};

    @media (max-width: 500px) {
      font-size: ${theme.fontSize.titleSection};
    }
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.description};
    color: ${theme.colors.baseLight};
    margin-top: 2.75rem;
    line-height: 1.6rem;
    text-align: justify;
  `}
`;
