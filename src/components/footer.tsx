import styled from "styled-components";

const FooterDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled.p`
  width: 70%;
  font-size: 0.9rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  border-radius: 12px;
  padding: 2px;
`;

export default function Footer() {
  return (
    <FooterDiv>
      <FooterText>Feito com ❤️ por Renata Karolina</FooterText>
    </FooterDiv>
  );
}
