import React, { useContext } from "react";
import { BeerContext } from "../../context";
import { Title } from "./InfoSection.styled";
import {
  NewBeerContainer,
  ImageContainer,
  BeerImage,
  BeerInfoContainer,
  TextContent,
  ButtonContainer,
  IconAndText,
  BeerName,
  BeerWrapper,
} from "./NewBeerSection.styled";
import { GiHops } from "react-icons/gi";
import { FaPercentage } from "react-icons/fa";
import { Button } from "../Button/Button";

const NewBeerSection = () => {
  const beers = useContext(BeerContext);
  // console.log(beers);
  const oneBeer = beers.filter((beer) => {
    return beer.id === 5;
  });

  return (
    <NewBeerContainer>
      <Title>beer</Title>
      <BeerWrapper>
        {oneBeer.map((item) => {
          return (
            <>
              <ImageContainer>
                <BeerImage src={item.image_url} alt={item.name} />
              </ImageContainer>
              <BeerInfoContainer>
                <TextContent>
                  <BeerName>{item.name}</BeerName>
                  <IconAndText>
                    <GiHops />
                    <span>{item.ibu}</span>
                  </IconAndText>
                  <IconAndText>
                    <FaPercentage />
                    <span>{item.abv}</span>
                  </IconAndText>
                  <p>{item.description}</p>
                </TextContent>
                <ButtonContainer>
                  <Button primary to="beers">
                    show more
                  </Button>
                </ButtonContainer>
              </BeerInfoContainer>
            </>
          );
        })}
      </BeerWrapper>
    </NewBeerContainer>
  );
};

export default NewBeerSection;