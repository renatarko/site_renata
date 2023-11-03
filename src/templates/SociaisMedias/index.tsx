import Link from "next/link";
import { useState } from "react";
import { FaShareAlt, FaWhatsapp } from "react-icons/fa";
import dark from "../../styles/theme/dark";
import Container from "../Container";
import * as S from "./style";

const medias = [
  {
    name: "WhatsApp",
    url: "https://wa.me/5567991687767",
    icon: "",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/renata_rko/",
    icon: "",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/renata-karolina-de-oliveira-rko/",
    icon: "",
  },
  {
    name: "GitHub",
    url: "https://github.com/renatarko",
    icon: "",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/renatarko_",
    icon: "",
  },
];

const text = "Fale com a Renata Karolina | Desenvolvedora | ";
const url = "https://renatakarolina.vercel.app/contato";

export default function SociaisMedias() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Container>
        <Link
          style={{
            marginTop: "2rem",
            color: `${dark.colors.text}`,
          }}
          href="/"
        >
          Voltar
        </Link>
        <S.Content>
          <S.ContentInfo>
            <S.ImageContainer className="image-container">
              <img src="/assets/rk.png" alt="Logo Renata Karolina" />
            </S.ImageContainer>
            <h2>@renata_rko</h2>

            <S.ContentTitle>
              <h1>Renata Karolina</h1>
              <h3>Desenvolvedora Front End</h3>
            </S.ContentTitle>
          </S.ContentInfo>

          <S.ContentLinks>
            <ul>
              {medias.map((media) => (
                <li key={media.name}>
                  <a target="_blank" href={media.url}>
                    {media.icon && media.icon}
                    <span>{media.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </S.ContentLinks>

          <S.Sharing
            href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
              text + url
            )}`}
            target="_blank"
          >
            <div>
              <FaWhatsapp size={20} color="#06c44f" />
              <p>Compartilhar por</p>
            </div>
            <FaShareAlt size={20} color="gray" />
          </S.Sharing>
        </S.Content>
      </Container>
    </>
  );
}
