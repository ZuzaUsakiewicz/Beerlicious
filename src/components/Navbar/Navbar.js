import React, { useState, useEffect } from "react";
import { AiOutlineCloseSquare, AiOutlineMenu } from "react-icons/ai";
import {
  Nav,
  NavbarContainer,
  NavIcon,
  NavLogo,
  HamburgerMenu,
  NavbarMenu,
  NavItem,
  NaviLink,
  NavbarIcons,
} from "./Navbar.styled";
import { IconLink } from "../../layout/Layout";
import {
  FaFacebookSquare,
  FaBeer,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 40) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogo to="/">
          <NavIcon /> Beerlicious
        </NavLogo>
        <HamburgerMenu onClick={handleClick}>
          {click ? <AiOutlineCloseSquare /> : <AiOutlineMenu />}
        </HamburgerMenu>
        <NavbarMenu onClick={handleClick} click={click}>
          <NavItem>
            <NaviLink to="/">Home</NaviLink>
          </NavItem>
          <NavItem>
            <NaviLink to="/about">About</NaviLink>
          </NavItem>
          <NavItem>
            <NaviLink to="/beers">Beers</NaviLink>
          </NavItem>
          <NavItem>
            <NaviLink to="/brewpub">Brewpubs</NaviLink>
          </NavItem>
          <NavItem>
            <NaviLink to="/contact" padright="true">
              Contact
            </NaviLink>
          </NavItem>
          <NavbarIcons>
            <IconLink navbar href="https://google.com" target="_blank">
              <FaFacebookSquare />
            </IconLink>
            <IconLink navbar href="https://google.com" target="_blank">
              <FaBeer />
            </IconLink>
            <IconLink navbar href="https://google.com" target="_blank">
              <FaInstagram />
            </IconLink>
            <IconLink navbar href="https://google.com" target="_blank">
              <FaTwitterSquare />
            </IconLink>
          </NavbarIcons>
        </NavbarMenu>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
