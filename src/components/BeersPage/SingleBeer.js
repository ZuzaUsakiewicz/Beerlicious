import React, { useState } from "react";
import {
  BeerItemContainer,
  ModalBackground,
  ModalWrapper,
  ButtonWrapper,
  BeerCardWrapper,
  TextWrapper,
  BeerImageWrapper,
  BeerImage,
  BeerNames,
} from "./BeersPage.styled";
import { Button } from "../Button/Button";

const SingleBeer = ({ beer }) => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <BeerItemContainer onClick={() => handleModal()} key={beer.id}>
        <BeerCardWrapper>
          <BeerImageWrapper>
            <BeerImage src={beer.image_url} alt={beer.name} />
          </BeerImageWrapper>
          <BeerNames>
            <h3>{beer.name}</h3>
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
              <TextWrapper>
                <h1> {beer.name}</h1>
                <p>{beer.description}</p>
                {/* <img src={beer.image_url} alt={beer.name} /> */}
              </TextWrapper>
            </ModalWrapper>
          )}
        </ModalBackground>
        {/* <Button primary={true} onClick={() => handleModal()}>
          details
        </Button> */}
      </BeerItemContainer>
    </>
  );
};

export default SingleBeer;
