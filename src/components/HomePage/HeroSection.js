import React from "react";
import Slider from "./Slider";
import { MainSection, SliderContainer } from "./HeroSection.styled";

const HeroSection = () => {
  return (
    <MainSection>
      <SliderContainer>
        <Slider />
      </SliderContainer>
    </MainSection>
  );
};

export default HeroSection;
