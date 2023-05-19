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
    /* max-width: 20rem; */
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    width: 380px;
    height: 400px;
    background-color: #1e1e1e;
    border-radius: 70px 0 70px 0;

    z-index: 2;
  `}
`;

export const ImageProfile = styled.img`
  width: 13.5rem;
  /* max-height: 12rem; */
  /* object-position: 0 -6.8rem; */
  object-fit: cover;
  /* transform: scale(2); */
  position: absolute;
  top: -1.85rem;
  z-index: 2;
`;

// export const AfterProto = styled.div`
//   ${({ theme }) => css`
//     width: 380px;
//     height: 400px;
//     background-color: ${theme.colors.primary};
//     opacity: 10%;
//     z-index: 1;
//     position: absolute;
//     top: -2.5rem;
//     border-radius: 70px 0 70px 0;
//   `}
// `;

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
      top: 3rem;
      right: 2rem;
    }

    100% {
      position: fixed;
      top: 1.5rem;
      right: 1rem;
      /* transform: rotate(90deg); */
    }
  }
`;

export const Icon = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(191, 176, 209, 0.1);
    border-radius: 100%;
    padding: 0.7rem;
    font-size: ${theme.fontSize.icon};
    color: ${theme.colors.primary};
    cursor: pointer;

    &:hover {
      color: ${theme.colors.baseLight};
      opacity: 0.7;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
        rgba(0, 0, 0, 0.13) 0px 3px 6px;
    }
  `}
`;
