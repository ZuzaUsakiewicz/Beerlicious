import React, { useState, useEffect, useRef } from "react";
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
import gsap from "gsap/gsap-core";

function Navbar() {
  const navRef = useRef(null);
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
  useEffect(() => {
    gsap.from(navRef.current, {
      y: "-100px",
      duration: 3,
      delay: 3,
      autoAlpha: 0,
      ease: "power1.in",
    });
  }, []);
  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer ref={navRef}>
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
