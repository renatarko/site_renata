import { FaGithub, FaSun } from "react-icons/fa";

import * as S from "./style";

export default function Header() {
  return (
    <S.Wrapper>
      <S.Menu>

        <S.Container>
          <S.ButtonTheme>
            <FaSun />
          </S.ButtonTheme>
         
          <S.ButtonIcon href={"https://github.com/renatarko"} target="_blank">
            <FaGithub />
          </S.ButtonIcon>
          
        </S.Container>

        {/* <MenuMobile /> */}
      </S.Menu>
    </S.Wrapper>
  );
}
