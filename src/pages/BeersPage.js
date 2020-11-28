import React from "react";
import AllBeers from "../components/BeersPage/AllBeers";
import { Title } from "../layout/Layout";
import { BeersPageContainer } from "../components/BeersPage/BeersPage.styled";
import { pageTransitions } from "../animations/Animate";

const BeersPage = () => {
  return (
    <BeersPageContainer
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransitions}
    >
      <Title>our beers</Title>
      <AllBeers />
    </BeersPageContainer>
  );
};

export default BeersPage;
