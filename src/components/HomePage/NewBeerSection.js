import React, { useContext } from "react";
import { BeerContext } from "../../context";
import { Title } from "../../layout/Layout";
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
  Description,
  Ingredients,
} from "./NewBeerSection.styled";
import { GiHops } from "react-icons/gi";
import { FaPercentage } from "react-icons/fa";
import { Button } from "../Button/Button";

const NewBeerSection = () => {
  const beers = useContext(BeerContext);
  const oneBeer = beers.filter((beer) => {
    return beer.id === 10;
  });

  return (
    <NewBeerContainer>
      <Title>our beers</Title>
      <BeerWrapper>
        {oneBeer.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <ImageContainer>
                <BeerImage src={item.image_url} alt={item.name} />
              </ImageContainer>
              <BeerInfoContainer>
                <TextContent>
                  <p>{item.tagline}</p>
                  <BeerName>{item.name}</BeerName>
                  <IconAndText>
                    <GiHops />
                    <span>{item.ibu}</span>
                  </IconAndText>
                  <IconAndText>
                    <FaPercentage />
                    <span>{item.abv}</span>
                  </IconAndText>
                  <Description>{item.description}</Description>
                  <Ingredients>
                    {item.ingredients.malt.map((i) => {
                      return <p key={i.name}>{i.name}</p>;
                    })}
                  </Ingredients>
                </TextContent>
                <ButtonContainer>
                  <Button primary="true" to="/beers">
                    show more
                  </Button>
                </ButtonContainer>
              </BeerInfoContainer>
            </React.Fragment>
          );
        })}
      </BeerWrapper>
    </NewBeerContainer>
  );
};

export default NewBeerSection;
