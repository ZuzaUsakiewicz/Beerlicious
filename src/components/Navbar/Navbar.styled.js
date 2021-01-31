import styled from "styled-components";
import { GiBrokenBottle } from "react-icons/gi";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  margin: auto;
  padding: 0 2rem;
  background: ${({ scrollNav }) =>
    scrollNav ? "rgba(23, 55, 83, 0.7)" : "transparent"};
  height: ${({ scrollNav }) => (scrollNav ? "80px" : "100px")};
  box-shadow: ${({ scrollNav }) =>
    scrollNav ? "0 2px 6px 2px rgb(23, 55, 83)" : ""};
  max-width: 1600px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.regular};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 998;
  transition: background 0.5s ease-in-out, height 0.5s ease-in-out,
    box-shadow 0.5s ease;
  @media screen and (max-width: 960px) {
    padding: 0;
    background: ${({ theme }) => theme.colors.dark};
    height: 80px;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 1rem;
  z-index: 1;
`;

export const NavLogo = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  display: flex;
  text-decoration: none;
  align-items: center;
  font-size: 2rem;
`;

export const NavIcon = styled(GiBrokenBottle)`
  margin-right: 1rem;
  color: ${({ theme }) => theme.colors.orange};
`;

export const HamburgerMenu = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    color: ${({ theme }) => theme.colors.primary};
    display: block;
    position: absolute;
    top: 60%;
    right: 0;
    transform: translate(-100%, -50%);
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const NavbarMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  transition: all 0.5s ease-in-out;
  top: 100px;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    background: ${({ theme }) => theme.colors.dark};
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 4px solid transparent;
  transition: border-bottom 0.5s ease-in-out;
  &:hover {
    border-bottom: 4px solid ${({ theme }) => theme.colors.orange};
  }
  /* &.active {
    border-bottom: 4px solid ${({ theme }) => theme.colors.orange};
  } */
  @media screen and(max-width: 960px) {
    width: 100%;
    border: none;
    &:hover {
      border-bottom: 4px solid transparent;
    }
  }
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  transition: all 0.5s ease-in-out;
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
  }
`;

export const NavbarIcons = styled.div`
  height: 80px;
  width: 120%;
  display: flex;
  align-items: center;
  padding: 0 0 0 30px;
  @media screen and (max-width: 960px) {
    justify-content: center;
    padding: 20px 0;
  }
`;
