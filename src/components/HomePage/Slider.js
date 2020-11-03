import React, { useState } from "react";
import {
  SliderContent,
  ButtonPrev,
  ButtonNext,
  SliderTitle,
  SliderParagraph,
  TextContainer,
} from "./HeroSection.styled";
import sliderdata from "./sliderdata";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const { id, img, title, text } = sliderdata[index];

  const checkNumber = (number) => {
    if (number > sliderdata.length - 1) {
      return 0;
    } else if (number < 0) {
      return sliderdata.length - 1;
    }
    return number;
  };

  const clickPrev = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const clickNext = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <SliderContent img={img} key={id}>
      <TextContainer>
        <SliderTitle>{title}</SliderTitle>
        <SliderParagraph>{text}</SliderParagraph>
      </TextContainer>
      <ButtonPrev onClick={clickPrev}> prev </ButtonPrev>
      <ButtonNext onClick={clickNext}> next </ButtonNext>
    </SliderContent>
  );
};

export default Slider;
