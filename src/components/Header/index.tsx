import { FaGithub, FaMoon, FaSun } from "react-icons/fa";

// import { useThemeContext } from "../../styles/theme/ThemeContext";
import * as S from "./style";

interface Props {
  toggleTheme(): void;
  theme: { title: string };
}

export default function Header({ theme, toggleTheme }: Props) {
  return (
    <S.Wrapper>
      <S.Menu>
        <S.Container>
          <S.ButtonTheme onClick={toggleTheme}>
            {theme.title === "light" ? (
              <FaSun title="tema claro" />
            ) : (
              <FaMoon title="tema escuro" />
            )}
          </S.ButtonTheme>

          <S.ButtonIcon href={"https://github.com/renatarko"} target="_blank">
            <FaGithub title="GitHub" />
          </S.ButtonIcon>
        </S.Container>

        {/* <MenuMobile /> */}
      </S.Menu>
    </S.Wrapper>
  );
}
