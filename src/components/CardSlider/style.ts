import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    padding: 0 7.5rem;

    .slick-track,
    .slick-list {
      display: flex !important;
      gap: 1rem;
    }

    .slick-list {
      margin: 1rem;
    }

    .slick-track {
      padding: 1.5rem 0;
    }

    .slick-dots {
      display: flex !important;
      align-items: center;
      justify-content: center;
      margin-top: 1.5rem;
      list-style: none;
      gap: 0.5rem !important;
    }

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${theme.colors.third};
      border-radius: 50%;
      /* margin-left: 1rem; */

      &.slick-active {
        background-color: ${theme.colors.secondary};
      }
    }

    .slick-arrow {
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      color: ${theme.colors.secondary};
      cursor: pointer;
      font-size: ${theme.fontSize.icon};
      transition: 0.3s;

      :hover {
        transform: scale(1.1);
      }
    }

    .slick-next {
      right: -0.8rem;
    }

    .slick-prev {
      left: -0.8rem;
    }

    button {
      width: 1.1rem;
      height: 1.1rem;
      opacity: 0;
      cursor: pointer;
    }

    @media (max-width: 990px) {
      padding: 0 1rem;
      justify-content: center;
      button {
        max-width: 0.8rem;
        max-height: 0.8rem;
      }
    }

    @media (max-width: 690px) {
      padding: 0 2rem;
      justify-content: center;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    height: 190px;
    background-color: ${theme.colors.third};
    padding: 0.5rem;
    border-radius: ${theme.borderRadius.baseRadius};
    display: flex !important;
    flex-direction: column;
    justify-content: space-between;

    transition: 0.2s;

    &:hover {
      transform: scale(1.01);
    }

    & svg {
      color: ${theme.colors.primary};
      font-size: ${theme.fontSize.icon};
    }
  `}
`;

export const ContainerRepo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  position: relative;
  gap: 0.5rem;
`;

export const RepoLetter = styled.div`
  ${({ theme }) => css`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;

    & p {
      font-weight: 700;
      font-size: calc(${theme.fontSize.icon} - 0.2rem);
      color: ${theme.colors.primary};
    }
  `}
`;

export const RepoName = styled.p`
  ${({ theme }) => css`
    width: 80%;
    color: ${theme.colors.text};
    font-size: ${theme.fontSize.description};
    line-height: 1.2rem;
  `}
`;

export const LinkRepo = styled.label`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;

    & a {
      color: ${theme.colors.text};
      text-decoration: underline;
      font-size: calc(${theme.fontSize.description} - 0.2rem);
    }

    & svg {
      color: ${theme.colors.text};
      width: calc(${theme.fontSize.icon} - 0.5rem);
    }
  `}
`;

export const ContainerStacks = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Stars = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    color: ${theme.colors.text};

    & svg {
      color: ${theme.colors.text};
      width: ${theme.fontSize.description};
    }
  `}
`;

export const Stack = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.text};
  `}
`;
