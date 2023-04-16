import styled from "styled-components";

export const Form = styled.form`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div {
    width: 100%;
    display: grid;

    > span {
      color: ${({ theme }) => theme.colors.purpleLight};
      font-size: 0.8rem;
      padding-left: 10px;
    }

    > input {
      width: 100%;
      opacity: 0.8;
      padding: 5px;
      border-radius: 10px;
      font-family: ${({ theme }) => theme.fontFamily.poppins};
      border: 1px solid ${({ theme }) => theme.colors.darkBg};
      outline: none;

      &:focus {
        border: 2px solid ${({ theme }) => theme.colors.purple};
        opacity: 0.95;
      }

      &::placeholder {
        color: ${({ theme }) => theme.colors.purple};
      }
    }

    > textarea {
      width: 100%;
      opacity: 0.8;
      padding: 8px;
      border: 1px solid ${({ theme }) => theme.colors.darkBg};
      border-radius: 10px;
      font-family: ${({ theme }) => theme.fontFamily.poppins};
      outline: none;

      &:focus {
        border: 2px solid ${({ theme }) => theme.colors.purple};
        opacity: 0.95;
      }

      &::placeholder {
        color: ${({ theme }) => theme.colors.purple};
      }
    }
  }

  .sendMessage {
    text-align: center;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 0.8rem;
  }

  @media (max-width: 600px) {
    width: 70%;
    margin-top: -2rem;
    margin-bottom: 3rem;
  }
`;

export const InputButton = styled.input`
  background-color: ${({ theme }) => theme.colors.purple};
  font-family: ${({ theme }) => theme.fontFamily.poppins};
  font-weight: bold;
  border: none;
  cursor: pointer;
  padding: 5px;
  transition: all 0.3s;
  border-radius: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.purpleLight};
    transform: scale(1.01);
  }
`;

export const ContainerContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  > h1 {
    color: ${({ theme }) => theme.colors.purpleLight};
    padding-bottom: 8px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.purpleLight};
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    > div {
      display: flex;
      align-items: center;
      gap: 0 20px;

      > svg {
        color: ${({ theme }) => theme.colors.secondary};
        opacity: 0.2;
        font-size: 1.7rem;
      }

      > span {
        color: ${({ theme }) => theme.colors.purpleLight};
        font-size: 0.8rem;
        letter-spacing: 1px;
      }
    }
  }

  @media (max-width: 600px) {
    padding-bottom: 3rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.purpleLight};
  }
`;
