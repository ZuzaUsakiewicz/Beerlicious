import React, { useState } from "react";
import {
  BeerItemContainer,
  ModalBackground,
  ModalWrapper,
  ButtonWrapper,
  BeerCardWrapper,
  InfoWrapper,
  BeerImageWrapper,
  BeerImage,
  BeerNames,
  BeerDetails,
  Table,
  Name,
  Tagline,
  Description,
} from "./BeersPage.styled";
import { Button } from "../Button/Button";

const SingleBeer = ({ beer }) => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
    document.body.style.position = modal ? "" : "fixed";
    document.querySelector("nav").style.zIndex = modal ? "999" : "0";
    document.querySelector("button").style.position = modal
      ? "fixed"
      : "relative";
  };

  return (
    <>
      <BeerItemContainer onClick={() => handleModal()} key={beer.id}>
        <BeerCardWrapper>
          <BeerImageWrapper>
            <BeerImage src={beer.image_url} alt={beer.name} />
          </BeerImageWrapper>
          <BeerNames>
            <h2>{beer.name}</h2>
            <h5>{beer.tagline}</h5>
          </BeerNames>
        </BeerCardWrapper>
        <ModalBackground modal={modal}>
          {modal && (
            <ModalWrapper>
              <ButtonWrapper>
                <Button primary={true} onClick={() => handleModal()}>
                  close
                </Button>
              </ButtonWrapper>
              <InfoWrapper>
                <BeerImageWrapper>
                  <BeerImage src={beer.image_url} alt={beer.name} />
                </BeerImageWrapper>
                <BeerDetails>
                  <Name>{beer.name}</Name>
                  <Tagline>{beer.tagline}</Tagline>
                  <Table>
                    <h3>IBU: {beer.ibu}</h3>
                    <h3>ABV: {beer.abv} %</h3>
                  </Table>
                  <Description>{beer.description}</Description>
                </BeerDetails>
              </InfoWrapper>
            </ModalWrapper>
          )}
        </ModalBackground>
      </BeerItemContainer>
    </>
  );
};

export default SingleBeer;
