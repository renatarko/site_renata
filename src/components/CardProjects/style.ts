import styled, { css } from "styled-components";

export const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  /* max-width: 500px; */
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 7.6rem;
    height: 5.6rem;
    object-fit: cover;
    border-radius: ${theme.borderRadius.baseRadius};
    transition: 0.4s;

    @media (max-width: 450px) {
      width: 80%;
      height: 90%;
    }
  `}
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(191, 176, 209, 0.2);
  padding: 1.25rem;
  border-radius: ${({ theme }) => theme.borderRadius.baseRadius};
  cursor: pointer;

  &:hover {
    background-color: ${({theme}) => theme.colors.secondaryOpa};
  }

  &:hover ${Image} {
    transform: scale(1.2);
  }

  @media (max-width: 450px) {
    justify-content: center;
    margin-bottom: 1rem;
  }
`;

export const BoxImage = styled.div`
  display: flex;
  align-items: self-start;
  gap: 15px;

  @media (max-width: 450px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Description = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.fontSize.description};
    padding: 0 10px;
    margin-top: 20px;
    font-weight: 700;
    /* text-align: start; */
  `}
`;

export const LinkAs = styled.a`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    color: ${theme.colors.secondary};
    font-size: ${theme.fontSize.subTitle};

    @media (max-width: 450px) {
      display: none;
    }
  `}
`;
