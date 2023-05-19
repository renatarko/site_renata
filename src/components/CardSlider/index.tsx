import { FaGithub, FaStar } from "react-icons/fa";
import Slider, { SliderSettings } from "../Slider";

import items from "./mock";
import * as S from "./style";

type CardSliderProps = {
  id: string;
  url: string;
};

const setting: SliderSettings = {
  dots: true,
  // arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: false,
  infinite: false,
  lazyLoad: "ondemand",
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1.2,
        dots: false,
      },
    },
  ],
};

export default function CardSlider() {
  return (
    <S.Wrapper>
      <Slider settings={setting}>
        {items.map((item) => {
          return (
            <S.Content key={item.id}>
              <S.ContainerRepo>
                <S.RepoName>{item.name}</S.RepoName>
                <S.RepoLetter>
                  <p>MT</p>
                </S.RepoLetter>
              </S.ContainerRepo>
              <S.LinkRepo htmlFor={item.name}>
                <FaGithub />
                <a id={item.name} href={item.html_url} target="_blank">
                  ver repositório
                </a>
              </S.LinkRepo>
              <S.ContainerStacks>
                <S.Stars>
                  <FaStar />
                  <p>{item.stargazers_count}</p>
                </S.Stars>
                <S.Stack>{item.language}</S.Stack>
              </S.ContainerStacks>
            </S.Content>
          );
        })}
      </Slider>
    </S.Wrapper>
  );
}
