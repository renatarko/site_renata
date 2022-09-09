import styled from "styled-components";
import Image from "next/image";

const HeaderDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 2rem;
  flex: 1;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};

  @media (max-width: 655px) {
    h1 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 520px) {
    h1 {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 470px) {
    h1 {
      font-size: 1.1rem;
    }
  }
  @media (max-width: 432px) {
    padding: 1rem;
    flex-direction: column;
    justify-content: center;

    h1 {
      text-align: center;
      justify-content: center;
    }
  }
`;

const ImageAvatar = styled(Image)`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  border: 3px solid rgb(232, 229, 233) !important;
  padding: 4px !important;
`;

const Title = styled.h1`
  width: 80%;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 2rem;
  font-weight: 800;
  text-align: left;
  display: flex;
  justify-content: flex-end;
`;

export default function Header() {
  return (
    <HeaderDiv>
      <ImageAvatar
        src="/assets/foto.png"
        alt="avatar"
        {...{ width: 150, height: 150 }}
      ></ImageAvatar>
      <Title>
        Olá! Sou Renata, <br /> desenvolvedora Front-end.
      </Title>
    </HeaderDiv>
  );
}
