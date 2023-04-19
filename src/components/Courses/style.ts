import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    .container-title {
      display: flex;
      align-items: center;
      margin-bottom: 3.75rem;
      gap: 1rem;
      z-index: 100;

      svg {
        color: ${theme.colors.secondary};
        font-size: ${theme.fontSize.icon};
      }
    }
  `}
`;
export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 3px;
  `}
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Card = styled.a`
  ${({ theme }) => css`
    width: 190px;
    height: 200px;
    background-color: rgba(22, 18, 35, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid ${theme.colors.primary};
    filter: drop-shadow(${theme.colors.primary});
    border-radius: ${theme.borderRadius.baseRadius};

    &:hover {
      background-color: rgba(22, 18, 35, 1.2);
    }
  `}
`;
export const Teaching = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.baseLight};
    font-size: calc(${theme.fontSize.description} - 0.125rem);
    font-weight: 400;
    letter-spacing: 2px;
  `}
`;

export const Course = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.baseLight};
    font-size: calc(${theme.fontSize.subTitle} - 0.125rem);
    border-bottom: 1px solid ${theme.colors.secondary};
    padding: 0.2rem 0;
  `}
`;
