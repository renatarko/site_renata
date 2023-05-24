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
    padding: 2rem 1rem;
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
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: ${theme.fontSize.title};
      font-weight: 600;
      color: ${theme.colors.primary};
      position: relative;
      z-index: 10;
      border-radius: 50%;
      background-color: #1e1e1f;
      padding: .5rem;
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

export const Links = styled.nav`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: ${theme.colors.baseLight};
    text-transform: uppercase;
    
    & a {
      transition: 0.3s;
      padding: 0.4rem;
      border-radius: ${theme.borderRadius.baseRadius};
    } 
    
    & a:hover {
      color: ${theme.colors.secondary};
      cursor: pointer;
      background-color:#1e1e1f ;
    }
  `}
`;
