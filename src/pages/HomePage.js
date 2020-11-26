import React, { useRef, useEffect } from "react";
import HeroSection from "../components/HomePage/HeroSection";
import InfoSection from "../components/HomePage/InfoSection";
import NewBeerSection from "../components/HomePage/NewBeerSection";
import gsap from "gsap";

const HomePage = () => {
  const homeRef = useRef(null);

  useEffect(() => {
    gsap.from(homeRef.current, {
      delay: 2,
      duration: 2,
      autoAlpha: 0,
      ease: "power1.in",
    });
  }, []);

  return (
    <div ref={homeRef}>
      <HeroSection />
      <InfoSection />
      <NewBeerSection />
    </div>
  );
};

export default HomePage;
