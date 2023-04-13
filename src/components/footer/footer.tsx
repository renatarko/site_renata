import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { FooterDiv, Media, StyledA } from "./style";

export default function Footer() {
  return (
    <FooterDiv>
      <Media>
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
      {/* 
      <Divider>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </Divider> */}
    </FooterDiv>
  );
}
