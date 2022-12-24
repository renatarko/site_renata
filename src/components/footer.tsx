import styled from "styled-components";

const FooterDiv = styled.footer`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
`;

const FooterText = styled.p`
  width: 100%;
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;

  ::selection {
    color: ${({ theme }) => theme.colors.purpleLigth};
    background: none;
  }
`;

export default function Footer() {
  return (
      <FooterDiv>
        <FooterText>Feito com ❤️ por Renata Karolina</FooterText>
      </FooterDiv>
  );
}
