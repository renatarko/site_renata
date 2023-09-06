import Image from "next/image";
import styled, { css, keyframes } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: relative;

  /* @media (max-width: 410px) {
    flex-direction: column;
  } */
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  `}
`;

const loadingKeyframe = keyframes`
  50% {
    opacity: 0.3;
    filter: blur(5px);
  }
  100% {
    opacity: 0.5;
    filter: blur(5px);
  }
`;

type imageProps = {
  imageLoading: boolean;
};

export const Back = styled.div<imageProps>`
  ${({ theme, imageLoading }) => css`
    width: 380px;
    height: 400px;
    border-radius: 70px 0 70px 0;
    background-color: ${theme.colors.secondaryOpa};

    @media (max-width: 400px) {
      width: 15rem;
      height: 17rem;
    }

    @media (max-width: 410px) {
      background-image: url("/assets/profile.png");
      background-size: cover;
      background-position: center;
      opacity: 100%;

      .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      ${imageLoading &&
      css`
        animation: placeholderShimmer 1s linear forwards;
        background-image: linear-gradient(
          to right,
          ${theme.colors.secondaryOpa} 0%,
          ${theme.colors.secondaryOpa} 20%,
          ${theme.colors.secondaryOpa} 40%,
          #f6f7f810 100%
        );
        background-size: 80rem 14rem;
      `};
    }

    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
        filter: blur(4px);
      }
      100% {
        background-position: 40rem 0;
      }
    }
  `}
`;

export const ImageProfile = styled(Image)<imageProps>`
  ${({ imageLoading }) => css`
    ${imageLoading &&
    css`
      animation: ${loadingKeyframe} ease-in-out 2s;
    `}
    width: 100%;
    position: absolute;
    bottom: -3rem;
    z-index: 10;
    object-fit: contain;
    opacity: 100%;

    @media (max-width: 410px) {
      display: none;
    }
  `}
`;

// export const ImageProfileMobile = styled(ImageProfile)`
//   @media (max-width: 410px) {
//     display: block;
//   }
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
