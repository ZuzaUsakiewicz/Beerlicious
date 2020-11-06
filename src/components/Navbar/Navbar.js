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
  NavLink,
} from "./Navbar.styled";

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
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/beers">Beers</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/breweries">Breweries</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact">Contact</NavLink>
          </NavItem>
        </NavbarMenu>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
