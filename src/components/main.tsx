import styled, { ThemeConsumer } from "styled-components";
import Image from "next/image";

const HeaderDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  margin-top: 4rem;
  flex: 1;

  @media (max-width: 655px) {
    h1 {
      font-size: 2rem;
    }
  }

  @media (max-width: 520px) {
    h1 {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 470px) {
    h1 {
      font-size: 1.4rem;
      margin: 0;
    }
  }
  @media (max-width: 432px) {
    padding: 1rem;
    flex-direction: column;

    h1 {
      font-size: 1.1rem;
      align-items: center;
      text-align: center;
    }
  }
`;

const ImageAvatar = styled(Image)`
  border-radius: 50% !important;
  border: 5px solid ${({ theme }) => theme.colors.purpleLigth} !important;
  padding: 4px !important;
`;

const ContainerTitle = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;

  @media (max-width: 470px) {
    width: 100%;
    align-items: center;
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 2.6rem;
  font-weight: 800;
`;

const TitleGradient = styled.h1`
  font-size: 2.7rem;
  color: ${({ theme }) => theme.colors.purpleLigth};
  font-weight: 800;
  margin: 0;
`;

export default function Header() {
  return (
    <HeaderDiv>
      <ImageAvatar
        src="/assets/foto.png"
        alt="avatar"
        {...{ width: 230, height: 230 }}
      ></ImageAvatar>
      <ContainerTitle>
        <Title>
          Olá! Sou Renata,
          <TitleGradient>Desenvolvedora Front-end.</TitleGradient>
        </Title>
      </ContainerTitle>
    </HeaderDiv>
  );
}
