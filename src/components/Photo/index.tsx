import Link from "next/link";
import { useEffect, useState } from "react";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import * as S from "./style";

export default function Photo() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const position = 300;

      if (scroll >= position) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.Wrapper>
      <S.Content>
        <S.ImageProfile src="../../assets/fotocortada.png" />
        <S.ContentIcon className={isFixed ? "isFixed" : "isNotFixed"}>
          <Link
            href={
              "https://www.linkedin.com/in/renata-karolina-de-oliveira-rko/"
            }
            passHref
            target="_blank"
          >
            <S.Icon>
              <FaLinkedinIn />
            </S.Icon>
          </Link>
          <Link
            href={"https://twitter.com/renatarko_"}
            passHref
            target="_blank"
          >
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
      </S.Content>
    </S.Wrapper>
  );
}
