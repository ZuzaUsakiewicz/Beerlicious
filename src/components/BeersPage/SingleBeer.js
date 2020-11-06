import React, { useState } from "react";
import {
  BeerItemContainer,
  ModalBackground,
  ButtonOpenModal,
} from "./BeersPage.styled";

const SingleBeer = ({ beer }) => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <BeerItemContainer key={beer.id}>
        <h1>{beer.name}</h1>
        <ModalBackground modal={modal}>
          {modal && <h1> {beer.id}</h1>}
        </ModalBackground>
        <ButtonOpenModal onClick={() => handleModal()}>
          open modal
        </ButtonOpenModal>
      </BeerItemContainer>
    </>
  );
};

export default SingleBeer;
