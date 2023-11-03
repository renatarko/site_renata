import { FaGithub, FaMoon, FaSun } from "react-icons/fa";

// import { useThemeContext } from "../../styles/theme/ThemeContext";
import Link from "next/link";
import { useRouter } from "next/router";
import * as S from "./style";

interface Props {
  toggleTheme(): void;
  theme: { title: string };
}

export default function Header({ theme, toggleTheme }: Props) {
  const { pathname } = useRouter();

  return (
    <>
      {pathname !== "/contato" && (
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

              <S.ButtonIcon
                href={"https://github.com/renatarko"}
                target="_blank"
              >
                <FaGithub title="GitHub" />
              </S.ButtonIcon>

              <Link href="/contato" className="link-contact">
                Contato
              </Link>
            </S.Container>

            {/* <MenuMobile /> */}
          </S.Menu>
        </S.Wrapper>
      )}
    </>
  );
}
