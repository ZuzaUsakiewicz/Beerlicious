import React from "react";
import {
  FooterContainer,
  LinksContainer,
  LinkList,
  Li,
  LinkTo,
  Copyright,
  IconsContainer,
  LogoBottle,
} from "./Footer.styled";
import { IconWrapper } from "../ContactPage/ContactPage.styled";
import { IconLink } from "../../layout/Layout";
import {
  FaFacebookSquare,
  FaBeer,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <FooterContainer>
      <LinksContainer>
        <LinkList>
          <Li>
            <LinkTo to="/">Privacy Policy</LinkTo>
          </Li>
          <Li>
            <LinkTo to="/">Terms and Conditions</LinkTo>
          </Li>
          <Li>
            <LinkTo to="/">Contact</LinkTo>
          </Li>
        </LinkList>
      </LinksContainer>
      <Copyright>
        <h2>
          Powered by <LogoBottle />
          Beerlicious
        </h2>
        <p>© 2020 Beerlicious All Rights Reserved</p>
      </Copyright>
      <IconsContainer>
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
      </IconsContainer>
    </FooterContainer>
  );
};

export default Footer;
