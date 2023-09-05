import { useEffect, useState } from "react";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import * as S from "./style";

const socialMedias = [
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/renata-karolina-de-oliveira-rko/",
  },
  {
    icon: <FaTwitter />,
    link: "https://twitter.com/renatarko_",
  },
  {
    icon: <FaInstagram />,
    link: "https://instagram.com/renata_rko",
  },
];

export default function Photo() {
  const [isFixed, setIsFixed] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

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
      <S.ImageProfile
        src="/assets/profile.png"
        alt="Foto da Renata em pé segurando um notebook"
        width={400}
        height={550}
      />
      <S.Content>
        <S.Back />
        <S.ContentIcon className={isFixed ? "isFixed" : "isNotFixed"}>
          {socialMedias.map((link) => (
            <S.LinkMedias href={link.link} target="_blank">
              {link.icon}
            </S.LinkMedias>
          ))}
        </S.ContentIcon>
      </S.Content>
    </S.Wrapper>
  );
}
