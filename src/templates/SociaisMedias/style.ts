import styled, { css } from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  margin: 2rem 0;
  align-self: center;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  border: none;
  background: none;
  top: 0;
  right: 0;
  margin: 1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const ContentInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 1rem; */
  margin-top: 1.9rem;
  color: ${({ theme }) => theme.colors.third};

  h2 {
    font-size: ${({ theme }) => theme.fontSize.description};
  }
`;

export const ContentTitle = styled.div`
  text-align: center;
  line-height: 2.3rem;
  margin: 2rem 0;

  h1 {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => theme.fontSize.title};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.subTitle};
    color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: 450px) {
    h1 {
      font-size: ${({ theme }) => theme.fontSize.subTitle};
    }

    h3 {
      font-size: ${({ theme }) => theme.fontSize.titleSection};
    }
  }
`;

export const ContentLinks = styled.section`
  width: 100%;

  li {
    background-color: ${({ theme }) => theme.colors.third};
    text-align: center;
    padding: 1rem;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.1rem;
    margin-bottom: 0.7rem;
    transition: all 0.3s;
  }

  li:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.background};
  }

  li a {
    flex: 1;
    display: flex;
    justify-content: center;
  }
`;

export const ImageContainer = styled.div`
  width: 6rem;
  height: 6rem;
  margin-bottom: 1rem;

  img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
`;

export const Sharing = styled.a`
  ${({ theme }) => css`
    width: 100%;
    background: none;
    color: ${theme.colors.text};
    position: relative;
    text-align: center;
    border-radius: 6px;
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }
  `}
`;
