import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import * as S from "./style";

export default function Photo() {
  return (
    <S.Wrapper>
      <S.Content>
        <S.ImageProfile src="https://source.unsplash.com/user/willianjusten"></S.ImageProfile>
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
