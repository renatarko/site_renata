import styled, { css } from "styled-components";

export const Wrapper = styled.footer`
  width: 100%;
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
  }
`;

export const ContainerLogo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    .rk {
      font-size: ${theme.fontSize.title};
      font-weight: 600;
      color: ${theme.colors.primary};
      position: relative;
      z-index: 10;

      &::before {
        content: "";
        width: 65px;
        height: 65px;
        background: ${theme.colors.primary};
        opacity: 0.09;
        border-radius: 50%;
        position: absolute;
        top: 0;
        bottom: 0;
        right: -7px;
        /* left: 10px; */
        z-index: -1;
      }
    }
    .name {
      color: ${theme.colors.baseLight};
      text-transform: uppercase;
      font-weight: 200;
      letter-spacing: 1.5px;
    }

    @media (max-width: 900px) {
      border-bottom: 1px solid ${theme.colors.secondaryOpa};
      padding-bottom: 1.5rem;
    }
  `}
`;

export const ContainerLinks = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    /* gap: 0.8rem; */

    span {
      color: ${theme.colors.baseLight};
      font-size: ${theme.fontSize.description};
      margin-top: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      svg {
        color: ${theme.colors.secondary};
      }
    }

    .createdby {
      color: ${theme.colors.baseLight};
      margin-top: 1rem;
      font-size: calc(${theme.fontSize.description} - 0.275rem);
    }
  `}
`;

export const Links = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    /* gap: 1rem; */
    color: ${theme.colors.baseLight};
    text-transform: uppercase;
  `}
`;
