import React, { useState, useEffect, useRef } from "react";
import { Title } from "../../layout/Layout";
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
import { sliderTransition } from "../../animations/Animate";
import gsap from "gsap/gsap-core";

const Slider = () => {
  const titleRef = useRef(null);
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
  useEffect(() => {
    gsap.to(titleRef.current, {
      duration: 4,
      delay: 6,
      repeat: 1,
      yoyo: true,
      text: {
        value: "Beerlicious tastes good!",
        delimiter: "",
      },
      ease: "none",
    });
  }, []);

  return (
    <SliderContent
      initial="out"
      animate="in"
      exit="out"
      variants={sliderTransition}
      img={img}
      key={id}
    >
      <TextContainer>
        <Title ref={titleRef}>{title}</Title>
        <SliderParagraph>{text}</SliderParagraph>
        <Button primary="true" to={url}>
          read more
        </Button>
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
