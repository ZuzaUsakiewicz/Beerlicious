import React, { useContext } from "react";
import { BeerContext } from "../../context";
import SingleBeer from "./SingleBeer";
import { AllBeersContainer } from "./BeersPage.styled";
const AllBeers = () => {
  const beers = useContext(BeerContext);

  return (
    <AllBeersContainer>
      {beers.map((beer) => {
        return <SingleBeer beer={beer} key={beer.id} />;
      })}
    </AllBeersContainer>
  );
};

export default AllBeers;
