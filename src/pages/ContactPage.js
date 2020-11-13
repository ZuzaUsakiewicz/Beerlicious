import React from "react";
import { Title } from "../layout/Layout";
import {
  ContactSectionContainer,
  ContactWrapper,
  TextWrapper,
  MapWrapper,
  Map,
  IconWrapper,
  IconLink,
} from "../components/ContactPage/ContactPage.styled";
import map from "../components/ContactPage/worldmap.svg";
import {
  FaFacebookSquare,
  FaBeer,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <ContactSectionContainer>
      <Title>Contact</Title>
      <ContactWrapper>
        <TextWrapper>
          <h1>Want a beer?</h1>
          <p>
            email us: <b>beerlicious@beer.com</b>
          </p>
          <p>
            call us: <b>+66 666 666 666</b>
          </p>
          <span>or</span>
          <p>
            visit us: <b>The City 66 666 City, World</b>
          </p>
          <IconWrapper>
            <IconLink to="/">
              <FaFacebookSquare />
            </IconLink>
            <IconLink to="/">
              <FaBeer />
            </IconLink>
            <IconLink to="/">
              <FaInstagram />
            </IconLink>
            <IconLink to="/">
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
