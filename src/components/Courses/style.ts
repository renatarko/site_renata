import styled, { css } from "styled-components";

export const Wrapper = styled.div`
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
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    position: relative;

    .one,
    .two,
    .three,
    .four {
      width: auto;
      border-radius: ${theme.borderRadius.baseRadius};
      font-size: calc(${theme.fontSize.description} - 0.2rem);
      color: ${theme.colors.text};
      padding: 0.3rem;
      position: absolute;
      bottom: 0rem;
      transition: 0.4s;
      opacity: 0;
    }

    .card_one:hover .one,
    .card_two:hover .two,
    .card_three:hover .three {
      opacity: 1;
      bottom: 0.5rem;
    }

    .card_four:hover {
      &::before {
        content: "em progresso";
        position: absolute;
        width: 100%;
        opacity: 1;
        bottom: 0.5rem;
        color: ${theme.colors.text};
        font-size: calc(${theme.fontSize.description} - 0.2rem);
        text-align: center;
      }
    }
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    width: 190px;
    height: 200px;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid #8067A9;
    filter: drop-shadow(${theme.colors.primary});
    border-radius: ${theme.borderRadius.baseRadius};
    transition: 0.3s;

    &:hover {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, ${theme.colors.secondary} 0px 3px 7px -3px;
      transform: scale(1.02);
    }
  `}
`;
export const Teaching = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: calc(${theme.fontSize.description} - 0.125rem);
    font-weight: 400;
    letter-spacing: 2px;
  `}
`;

export const Course = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    /* font-size: calc(${theme.fontSize.subTitle} - 0.125rem); */
    font-size: ${theme.fontSize.titleSection};
    border-bottom: 1px solid ${theme.colors.third};
    padding: 0.2rem 0;
  `}
`;
