import styled from "styled-components";

export const FooterDiv = styled.footer`
  width: 100%;
  height: 5rem;
  /* position: absolute; */
  bottom: 0;
  left: 0;
  z-index: 1;

  @media (max-width: 600px) {
    position: relative;
    bottom: 0;
    margin-top: 1rem;
  }
`;

export const Media = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  gap: 1.5rem;
`;

export const StyledA = styled.a`
  text-align: center;
  font-size: 1.5rem;

  > p {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 0.7rem;
    padding: 5px 0;
  }

  > svg {
    color: ${({ theme }) => theme.colors.purpleLight};
    cursor: pointer;
    transition: all 0.3s;
    opacity: 0.6;
  }

  &:hover svg {
    color: ${({ theme }) => theme.colors.purpleLight};
    transform: scale(1.2);
    opacity: 1;
  }
`;
