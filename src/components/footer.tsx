import { FaGithub, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import styled from "styled-components";

const FooterDiv = styled.footer`
  width: 100%;
  height: 5rem;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;

  @media (max-width: 600px) {
    position: relative;
    margin-top: 1rem;
  }
`;

export const Divider = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  z-index: -1;

  > svg {
    position: relative;
    display: block;
    width: calc(245% + 250px);
    height: 190px;
  }

  & .shape-fill {
    fill: ${({theme}) => theme.colors.purple};
    opacity: .3;
  }
`

const Media = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1.5rem;  
`;

const StyledA = styled.a`
  text-align: center;
  font-size: 1.5rem;

  > p {
    color: ${({theme}) => theme.colors.secondary};
    font-size: .7rem;
    padding: 5px 0;
  }

  > svg {
    color: ${({ theme }) => theme.colors.purpleLight};
    cursor: pointer;
    transition: all .3s;
    opacity: .6;
  }

  &:hover svg {
    color: ${({ theme }) => theme.colors.purpleLight};
    transform: scale(1.2);
    opacity: 1;
  }
`;

export default function Footer() {
  return (
      <FooterDiv>
        {/* <Container> */}
          <Media>
            <StyledA href="https://wa.me/+5567991687767" target="_blank">
              <p>Whatsapp</p>
              <FaWhatsapp />
            </StyledA>
            <StyledA href="https://www.instagram.com/renata_rko/" target="_blank">
            <p>Instagram</p>
              <FaInstagram />
            </StyledA>
            <StyledA href="https://github.com/renatarko" target="_blank">
            <p>GitHub</p>
              <FaGithub />
            </StyledA>
            <StyledA href="https://twitter.com/renatarko_" target="_blank">
            <p>Twitter</p>
              <FaTwitter />
            </StyledA>
          </Media>


          <Divider>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
          </svg>
        </Divider>
        {/* </Container> */}
        
        

      </FooterDiv>
  );
}
