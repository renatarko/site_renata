import { FiArrowRight } from "react-icons/fi";
import * as S from "./style";

export type CardProjectsProps = {
  imageSrc: string;
  imageAlt: string;
  description: string;
  url: string;
};

export default function CardProjects({
  imageSrc,
  imageAlt,
  description,
  url,
}: CardProjectsProps) {
  return (
    <S.Wrapper>
      <S.Container href={url} target="_blank">
        <S.BoxImage>
          <S.Image src={imageSrc} alt={description} />
          <S.Description>{description}</S.Description>
          {/* <p className="show-page">Ir para página</p> */}
        </S.BoxImage>
        <FiArrowRight />
      </S.Container>
    </S.Wrapper>
  );
}
