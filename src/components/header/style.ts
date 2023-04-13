import styled from "styled-components";

export const ContainerMenu = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 6rem;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 10;

  @media (max-width: 450px) {
    padding: 0 1rem;
  }
`;

export const Menu = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuLink = styled.ul`
  display: inline-flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const LinkPage = styled.a`
  color: ${({ theme }) => theme.colors.purple};
  text-transform: uppercase;
  transition: 0.4s;
  font-weight: bold;
  padding: 1rem;

  :hover {
    color: ${({ theme }) => theme.colors.purpleLight};
    border-bottom: 2px solid ${({ theme }) => theme.colors.purpleLight};
  }

  ::selection {
    color: ${({ theme }) => theme.colors.purpleLight};
    background: none;
  }
`;
