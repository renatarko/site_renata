import styled from "styled-components";
import Image from "next/image";

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const ImageAvatar = styled(Image)`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  border: 3px solid rgb(232, 229, 233) !important;
  padding: 4px !important;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 20px;
  font-weight: 800;
  margin-top: 20px;
`;

export default function Header() {
  return (
    <HeaderDiv>
      <ImageAvatar
        src="/assets/foto.png"
        alt="avatar"
        {...{ width: 150, height: 150 }}
      ></ImageAvatar>
      <Title>Renata Karolina</Title>
    </HeaderDiv>
  );
}
