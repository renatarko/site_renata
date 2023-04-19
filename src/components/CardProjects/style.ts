import styled, { css } from "styled-components";

export const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  /* max-width: 500px; */
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(191, 176, 209, 0.2);
  padding: 1.25rem 0;
`;

export const BoxImage = styled.div`
  display: flex;
  align-items: self-start;
  gap: 15px;
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 5.6rem;
    height: 5.6rem;
    object-fit: cover;
    border-radius: ${theme.borderRadius.baseRadius};
  `}
`;
export const Description = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.baseLight};
    font-size: ${theme.fontSize.description};
    padding: 0 10px;
    margin-top: 20px;
    /* text-align: start; */
  `}
`;

export const LinkAs = styled.a`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    color: ${theme.colors.primary};
    font-size: ${theme.fontSize.subTitle};
  `}
`;
