import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: relative;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  `}
`;

export const Back = styled.div`
  ${({ theme }) => css`
    width: 380px;
    height: 400px;
    border-radius: 70px 0 70px 0;
    background-color: ${theme.colors.secondaryOpa};

    @media (max-width: 400px) {
      width: 15rem;
      height: 17rem;
    }
  `}
`;

export const ImageProfile = styled.img`
  width: 100%;
  max-width: 22rem;
  position: absolute;
  bottom: -3rem;
  z-index: 10;
`;

export const ContentIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  z-index: 10;
  transition: all 0.4s;

  &.isNotFixed {
    gap: 18px;
    z-index: 10;
    position: absolute;
    right: -4rem;

    @media (max-width: 900px) {
      right: 0;
    }
  }

  &.isFixed {
    position: fixed;
    flex-direction: row;
    animation: identifier 1s forwards;
    backdrop-filter: blur(12px);
    border-radius: ${({ theme }) => theme.borderRadius.baseRadius};
    padding: 0.5rem;
    & svg {
      color: ${({ theme }) => theme.colors.secondary};
    }

    @media (max-width: 500px) {
      width: 100%;
      backdrop-filter: blur(5px);
      padding: 0.5rem;
      margin: 0 auto;
      left: 0;
      right: 0;
      justify-content: center;
    }
  }

  @keyframes identifier {
    0% {
      top: 0.5rem;
      right: 2rem;
    }

    100% {
      position: fixed;
      top: 1.5rem;
      right: 1rem;
    }
  }
`;

export const LinkMedias = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(191, 176, 209, 0.1);
    border-radius: 100%;
    padding: 0.7rem;
    font-size: ${theme.fontSize.icon};
    color: ${theme.colors.secondary};
    cursor: pointer;

    &:hover {
      opacity: 0.7;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
        rgba(0, 0, 0, 0.13) 0px 3px 6px;
    }
  `}
`;
