import SlickSlider, { Settings } from "react-slick";

import * as S from "./style";

export type SliderSettings = Settings;

export type SliderProps = {
  children?: React.ReactNode;
  settings: SliderSettings;
};

export default function Slider({ children, settings }: SliderProps) {
  return (
    <S.Wrapper>
      <SlickSlider {...settings}>{children}</SlickSlider>
    </S.Wrapper>
  );
}
