import { FaGithub } from "react-icons/fa";
import Slider, { SliderSettings } from "../Slider";
import * as S from "./style";

import items from "./mock";

type CardSliderProps = {
  id: string;
  url: string;
};

const setting: SliderSettings = {
  dots: true,
  arrows: false,
  slidesToShow: 4,
  vertical: false,
  infinite: false,
  lazyLoad: "ondemand",
};

export default function CardSlider() {
  return (
    <S.Wrapper>
      <Slider settings={setting}>
        {items.map((item) => {
          return (
            <S.Content>
              {/* <S.Title>{item.name}</S.Title> */}
              <S.LinkGit href={item.url}>
                <FaGithub />
              </S.LinkGit>
            </S.Content>
          );
        })}
      </Slider>
    </S.Wrapper>
  );
}
