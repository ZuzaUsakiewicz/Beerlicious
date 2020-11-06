import React, { useContext } from "react";
import { BeerContext } from "../../context";
import { Title } from "../HomePage/InfoSection.styled";

const AllBeers = () => {
  const beers = useContext(BeerContext);
  return (
    <>
      <Title>All Beers</Title>
      {beers.map((beer) => {
        return <h1>{beer.name}</h1>;
      })}
    </>
  );
};

export default AllBeers;
