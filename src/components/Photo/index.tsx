import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import * as S from "./style";

export default function Photo() {
  return (
    <S.Wrapper>
      <S.Content>
        <S.ImageProfile src="../../assets/fotocortada.png" />
        {/* <S.AfterProto></S.AfterProto> */}
      </S.Content>
      <S.ContentIcon>
        <Link
          href={"https://www.linkedin.com/in/renata-karolina-de-oliveira-rko/"}
          passHref
          target="_blank"
        >
          <S.Icon>
            <FaLinkedinIn />
          </S.Icon>
        </Link>
        <Link href={"https://twitter.com/renatarko_"} passHref target="_blank">
          <S.Icon>
            <FaTwitter />
          </S.Icon>
        </Link>
        <Link
          href={"https://instagram.com/renata_rko"}
          passHref
          target="_blank"
        >
          <S.Icon>
            <FaInstagram />
          </S.Icon>
        </Link>
      </S.ContentIcon>
    </S.Wrapper>
  );
}
