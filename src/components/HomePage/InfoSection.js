import React from "react";
import {
  InfoSectionContainer,
  InfoText,
  Informations,
  ImageContainer,
  LinkAbout,
} from "./InfoSection.styled";
import { Title } from "../../layout/Layout";

const InfoSection = () => {
  return (
    <InfoSectionContainer>
      <InfoText>
        <Title>beerlicious team</Title>
        <Informations>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          aspernatur laborum iste cum recusandae. Tenetur quod commodi eligendi
          unde eos vel velit doloribus minus, at nemo quibusdam eaque ullam
          tempora officia possimus, tempore labore nostrum odit enim? Fugiat,
          officia illo. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Error aspernatur laborum iste cum recusandae. Tenetur quod commodi
          eligendi unde eos vel velit doloribus minus, at nemo quibusdam eaque
          ullam tempora officia possimus, tempore labore nostrum odit enim?
          Fugiat, officia illo.
        </Informations>
        <LinkAbout to="/about"> Because we love beer</LinkAbout>
      </InfoText>
      <ImageContainer></ImageContainer>
    </InfoSectionContainer>
  );
};

export default InfoSection;
