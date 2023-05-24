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
        <S.ImageProfile src="../../assets/fotocortada.png"/>
        <S.ContentIcon className={isFixed ? "isFixed" : "isNotFixed"}>
          <S.LinkMedias
            href={
              "https://www.linkedin.com/in/renata-karolina-de-oliveira-rko/"
            }
            target="_blank"
          >
            <FaLinkedinIn />
          </S.LinkMedias>
          <S.LinkMedias
            href={"https://twitter.com/renatarko_"}
            target="_blank"
          >
            <FaTwitter />
          </S.LinkMedias>
          <S.LinkMedias
            href={"https://instagram.com/renata_rko"}
            target="_blank"
          >
            <FaInstagram />
          </S.LinkMedias>
        </S.ContentIcon>
      </S.Content>
    </S.Wrapper>
  );
}
