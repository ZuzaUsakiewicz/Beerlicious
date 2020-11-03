import React, { useState } from "react";
import { SliderContent } from "./HeroSection.styled";
import sliderdata from "./sliderdata";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const { id, img, title, text } = sliderdata[index];
  return (
    <SliderContent img={img} key={id}>
      <h1>{title}</h1>
      <p>{text}</p>
      <button> prev </button>
      <button>next </button>
    </SliderContent>
  );
};

export default Slider;
