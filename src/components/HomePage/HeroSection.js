import React from "react";
import { MainSection, SliderContainer } from "./HeroSection.styled";
import { Title } from "../../layout/Layout";
import {
  SliderContent,
  SliderParagraph,
  TextContainer,
} from "./HeroSection.styled";
import { Button } from "../Button/Button";
import Carousel from "react-elastic-carousel";
import sliderdata from "./sliderdata";
const HeroSection = () => {
  return (
    <MainSection>
      <SliderContainer>
        <Carousel itemsToShow={1}>
          {sliderdata.map((item) => {
            return (
              <SliderContent img={item.img} key={item.id}>
                <TextContainer>
                  <Title>{item.title}</Title>
                  <SliderParagraph>{item.text}</SliderParagraph>
                  <Button primary="true" to={item.url}>
                    {item.buttonText}
                  </Button>
                </TextContainer>
              </SliderContent>
            );
          })}
        </Carousel>
      </SliderContainer>
    </MainSection>
  );
};

export default HeroSection;
