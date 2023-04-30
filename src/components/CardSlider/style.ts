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
      /* display: flex !important; */
      /* flex-direction: column;
      justify-content: center;
      align-items: center; */
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
    background-color: ${theme.colors.primary};
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
      color: ${theme.colors.baseLight};
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
    background-color: ${theme.colors.baseLight};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;

    & p {
      font-weight: 700;
      font-size: calc(${theme.fontSize.icon} - 0.2rem);
      color: ${theme.colors.secondary};
    }
  `}
`;

export const RepoName = styled.p`
  ${({ theme }) => css`
    width: 9rem;
    color: ${theme.colors.baseLight};
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
      color: ${theme.colors.baseDark};
      text-decoration: underline;
      font-size: calc(${theme.fontSize.description} - 0.2rem);
    }

    & svg {
      color: ${theme.colors.baseDark};
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
    gap: 0.3rem;
    color: ${theme.colors.baseLight};

    & svg {
      width: ${theme.fontSize.description};
    }
  `}
`;

export const Stack = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.baseLight};
  `}
`;
