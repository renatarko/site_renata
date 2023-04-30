import { FaGithub, FaStar } from "react-icons/fa";
import Slider, { SliderSettings } from "../Slider";
import * as S from "./style";

import { useEffect, useState } from "react";
import items from "./mock";

type CardSliderProps = {
  id: string;
  url: string;
};

const setting: SliderSettings = {
  dots: true,
  // arrows: true,
  slidesToShow: 4,
  vertical: false,
  infinite: false,
  lazyLoad: "ondemand",
};

export default function CardSlider() {
  const [filterrepos, setFilterrepos] = useState([]);

  const repos = items;
  const filter = repos.filter((items) => {
    items.created_at.includes("2023");
  });
  // setFilterrepos(filter);

  console.log(filter);

  useEffect(() => {
    // getApi();
  }, []);

  async function getApi() {
    const response = await fetch(
      `https://api.github.com/users/renatarko/repos`
    );
    const data = await response.json();
    console.log(data);
    // const allRepos = data.map((item) => {
    //   return {
    //     id: item.id,
    //     name: item.name,
    //     letters: item.name.substr(0, 2),
    //     url: item.url,
    //     language: item.language,
    //     stars: item.stargazers_count,
    //   };
    // });

    // setRepos(allRepos)
  }

  return (
    <S.Wrapper>
      <Slider settings={setting}>
        {filterrepos.map((item) => {
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
                <a id={item.name} href={item.url}>
                  ver mais
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
