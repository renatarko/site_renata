import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  /* width: 50%; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SectionTitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.titleSection};
    color: ${theme.colors.primary};
    text-transform: uppercase;
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
    margin-bottom: -0.5rem;
  `}
`;
export const SubTitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.title};
    color: ${theme.colors.secondary};
  `}
`;
export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.description};
    color: ${theme.colors.baseLight};
    margin-top: 2.75rem;
  `}
`;
