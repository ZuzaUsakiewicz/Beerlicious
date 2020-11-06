import React, { useContext } from "react";
import { BeerContext } from "../../context";

const SingleBeer = () => {
  const beers = useContext(BeerContext);
  return (
    <>
      {beers.map((beer) => {
        return <p>{beer.id}</p>;
      })}
    </>
  );
};

export default SingleBeer;
