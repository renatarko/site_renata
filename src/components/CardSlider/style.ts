import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    padding: 0 7.5rem;

    .slick-track,
    .slick-list {
      display: flex;
      gap: 1rem;
    }

    .slick-track {
      padding: 1.5rem 0;
    }

    .slick-slide div {
      display: flex !important;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: ${theme.borderRadius.baseRadius};
      transition: 0.2s;

      &:hover {
        transform: scale(1.01);
      }
    }

    .slick-dots {
      display: flex !important;
      align-items: center;
      justify-content: center;
      margin-top: 1.5rem;
      list-style: none;
    }

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${theme.colors.primary};
      border-radius: 50%;
      margin-left: 1rem;

      &.slick-active {
        background-color: ${theme.colors.secondary};
      }
    }
    button {
      width: 1.1rem;
      height: 1.1rem;
      opacity: 0;
      cursor: pointer;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 190px;
    height: 170px;
    background-color: ${theme.colors.secondaryOpa};
    padding: 0.5rem;
  `}
`;

export const Title = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.baseDark};
    font-weight: 700;
    font-size: calc(${theme.fontSize.description} - 0.2rem);
  `}
`;

export const LinkGit = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.baseLight};
    font-size: calc(${theme.fontSize.title} + 1rem);
    /* margin-top: 1rem; */
    cursor: pointer;

    svg {
      &:hover {
        filter: drop-shadow(rgba(0, 0, 0, 0.16) 0px 3px 6px);
      }
    }
  `}
`;
