import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import * as S from "./style";

export default function Photo() {
  return (
    <S.Wrapper>
      <S.Content>
        <S.ImageProfile src="../../assets/photo-temp.png" />
        <S.AfterProto></S.AfterProto>
      </S.Content>
      <S.ContentIcon>
        <S.Icon>
          <FaLinkedinIn />
        </S.Icon>
        <S.Icon>
          <FaTwitter />
        </S.Icon>
        <S.Icon>
          <FaInstagram />
        </S.Icon>
      </S.ContentIcon>
    </S.Wrapper>
  );
}
