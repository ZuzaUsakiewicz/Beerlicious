import React, { useState, useEffect, useRef } from "react";
import {
  BreweriesPageContainer,
  BrewContentContainer,
  BrewLink,
} from "../components/BreweriesPage/BreweriesPage.styled";
import { Title } from "../layout/Layout";
import gsap from "gsap";

const BrewpubPage = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [breweries, setBreweries] = useState([]);

  const brewRef = useRef(null);

  useEffect(() => {
    gsap.from(brewRef.current, {
      delay: 2,
      duration: 2,
      autoAlpha: 0,
      ease: "power1.in",
    });
  }, []);
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
      <BreweriesPageContainer ref={brewRef}>
        <Title>Breweries</Title>
        <h1>Couldn't load the page...</h1>
      </BreweriesPageContainer>
    );
  } else if (!isLoaded) {
    return (
      <BreweriesPageContainer ref={brewRef}>
        <Title>Breweries</Title>
        <h1>Loading...</h1>
      </BreweriesPageContainer>
    );
  } else {
    return (
      <BreweriesPageContainer ref={brewRef}>
        <Title>Brewpubs</Title>
        <BrewContentContainer>
          {breweries.map((brew) => {
            return (
              <BrewLink target="blank" href={brew.website_url}>
                {brew.name}
              </BrewLink>
            );
          })}
        </BrewContentContainer>
      </BreweriesPageContainer>
    );
  }
};

export default BrewpubPage;
