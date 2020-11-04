import React, { useContext } from "react";
import { BeerContext } from "../../context";
import {
  InfoSectionContainer,
  InfoText,
  Title,
  Informations,
  ImageContainer,
  Span,
} from "./InfoSection.styled";

const InfoSection = () => {
  const beers = useContext(BeerContext);
  console.log(beers);
  return (
    <InfoSectionContainer>
      <div>
        {beers.map((beer) => {
          return (
            <h1 key={beer.id} {...beer}>
              {beer.name}
            </h1>
          );
        })}
      </div>
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
        <Span> Because we love beer</Span>
      </InfoText>
      <ImageContainer></ImageContainer>
    </InfoSectionContainer>
  );
};

export default InfoSection;
