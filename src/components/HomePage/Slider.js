import React, { useState } from "react";
import { Title } from "./InfoSection.styled";
import {
  SliderContent,
  ButtonPrev,
  ButtonNext,
  SliderParagraph,
  TextContainer,
  Next,
  Previous,
} from "./HeroSection.styled";
import { Button } from "../Button/Button";
import sliderdata from "./sliderdata";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const { id, img, title, url, text } = sliderdata[index];

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
        <Title>{title}</Title>
        <SliderParagraph>{text}</SliderParagraph>
        <Button to={url}>Read More</Button>
      </TextContainer>
      <ButtonPrev onClick={clickPrev}>
        <Previous />
      </ButtonPrev>
      <ButtonNext onClick={clickNext}>
        <Next />
      </ButtonNext>
    </SliderContent>
  );
};

export default Slider;
