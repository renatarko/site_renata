import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

export const Content = styled.div`
  position: relative;
`;

export const ImageProfile = styled.img`
  width: 350px;
  height: 400px;
  object-fit: cover;
  position: relative;
  z-index: 2;
`;

export const AfterProto = styled.div`
  ${({ theme }) => css`
    width: 380px;
    height: 400px;
    background-color: ${theme.colors.primary};
    opacity: 10%;
    z-index: 1;
    position: absolute;
    top: -2.5rem;
    border-radius: 70px 0 70px 0;
  `}
`;

export const ContentIcon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
export const Icon = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(191, 176, 209, 0.1);
    border-radius: 100%;
    padding: 0.5rem;
    font-size: ${theme.fontSize.icon};
    color: ${theme.colors.primary};
  `}
`;
