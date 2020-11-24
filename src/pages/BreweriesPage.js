import React, { useState, useEffect } from "react";
import { BreweriesPageContainer } from "../components/BreweriesPage/BreweriesPage.styled";
import { Title } from "../layout/Layout";

const BreweriesPage = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    fetch("https://api.openbrewerydb.org/breweries?by_type=brewpub")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setBreweries(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return (
      <BreweriesPageContainer>
        <Title>Breweries</Title>
        <h1>Couldn't load the page...</h1>
      </BreweriesPageContainer>
    );
  } else if (!isLoaded) {
    return (
      <BreweriesPageContainer>
        <Title>Breweries</Title>
        <h1>Loading...</h1>
      </BreweriesPageContainer>
    );
  } else {
    return (
      <BreweriesPageContainer>
        <Title>Breweries</Title>
        {breweries.map((brew) => {
          return <p>{brew.name}</p>;
        })}
      </BreweriesPageContainer>
    );
  }
};

export default BreweriesPage;
