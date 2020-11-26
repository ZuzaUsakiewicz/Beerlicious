import React, { useRef, useEffect } from "react";
import AllBeers from "../components/BeersPage/AllBeers";
import { Title } from "../layout/Layout";
import { BeersPageContainer } from "../components/BeersPage/BeersPage.styled";
import gsap from "gsap/gsap-core";

const BeersPage = () => {
  const beerRef = useRef(null);
  useEffect(() => {
    gsap.from(beerRef.current, {
      delay: 2,
      duration: 2,
      autoAlpha: 0,
      ease: "power2.in",
    });
  }, []);
  return (
    <BeersPageContainer ref={beerRef}>
      <Title>our beers</Title>
      <AllBeers />
    </BeersPageContainer>
  );
};

export default BeersPage;
