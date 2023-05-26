import { FaGithub, FaSun } from "react-icons/fa";

import * as S from "./style";

interface Props {
  toggleTheme(): void 
}

export default function Header({toggleTheme}:Props) {
  // const { title, colors} = useContext(ThemeContext)
  return (
    <S.Wrapper>
      <S.Menu>

        <S.Container>
          <S.ButtonTheme onClick={toggleTheme}>
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
