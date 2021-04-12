import React from "react";
import HeroSection from "../components/HomePage/HeroSection";
import InfoSection from "../components/HomePage/InfoSection";
import NewBeerSection from "../components/HomePage/NewBeerSection";
import ContactSection from "../components/HomePage/ContactSection";
import { pageTransitions } from "../animations/Animate";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransitions}
    >
      <HeroSection />
      <InfoSection />
      <NewBeerSection />
      <ContactSection />
    </motion.div>
  );
};

export default HomePage;
