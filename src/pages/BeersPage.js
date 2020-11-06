import React from "react";
import AllBeers from "../components/BeersPage/AllBeers";
import { Title } from "../components/HomePage/InfoSection.styled";
import { BeersPageContainer } from "../components/BeersPage/BeersPage.styled";

const BeersPage = () => {
  return (
    <BeersPageContainer>
      <Title>our beers</Title>
      <AllBeers />
    </BeersPageContainer>
  );
};

export default BeersPage;
