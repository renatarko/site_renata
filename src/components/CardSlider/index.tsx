import { FaArrowLeft, FaArrowRight, FaGithub, FaStar } from "react-icons/fa";
import Slider, { SliderSettings } from "../Slider";

import items from "./mock";
import * as S from "./style";

type CardSliderProps = {
  id: string;
  url: string;
};

const setting: SliderSettings = {
  dots: true,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  vertical: false,
  infinite: false,
  lazyLoad: "ondemand",
  prevArrow: <FaArrowLeft />,
  nextArrow: <FaArrowRight />,
  responsive: [
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 690,
      settings: {
        slidesToShow: 2.1,
        arrows: false,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1.1,
        arrows: false,
      },
    },
  ],
};

const card = items.map((item) => {
  let shortName = item.name.substring(2, 0);
  let name = item.name.replaceAll("_", " ");

  return {
    ...item,
    shortname: shortName,
    name: name,
  };
});

export default function CardSlider() {
  return (
    <S.Wrapper>
      <Slider settings={setting}>
        {card.map((item) => {
          return (
            <S.Content key={item.id}>
              <S.ContainerRepo>
                <S.RepoName>{item.name}</S.RepoName>
                <S.RepoLetter>
                  <p>{item.shortname}</p>
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
