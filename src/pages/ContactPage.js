import React from "react";
import { Title } from "../layout/Layout";
import {
  ContactSectionContainer,
  ContactWrapper,
  TextWrapper,
  MapWrapper,
  Map,
  IconWrapper,
} from "../components/ContactPage/ContactPage.styled";
import { IconLink } from "../layout/Layout";
import map from "../components/ContactPage/worldmap.svg";
import {
  FaFacebookSquare,
  FaBeer,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import Contact from "../components/ContactPage/Contact";

import { pageTransitions } from "../animations/Animate";

const ContactPage = () => {
  return (
    <ContactSectionContainer
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransitions}
    >
      <Title>Contact</Title>
      <ContactWrapper>
        <TextWrapper>
          <h1>Want a beer?</h1>
          <p>Contact us!</p>
          <Contact />
          <IconWrapper>
            <IconLink href="https://google.com" target="_blank">
              <FaFacebookSquare />
            </IconLink>
            <IconLink href="https://google.com" target="_blank">
              <FaBeer />
            </IconLink>
            <IconLink href="https://google.com" target="_blank">
              <FaInstagram />
            </IconLink>
            <IconLink href="https://google.com" target="_blank">
              <FaTwitterSquare />
            </IconLink>
          </IconWrapper>
        </TextWrapper>
        <MapWrapper>
          <Map src={map} alt="world map" />
        </MapWrapper>
      </ContactWrapper>
    </ContactSectionContainer>
  );
};

export default ContactPage;
