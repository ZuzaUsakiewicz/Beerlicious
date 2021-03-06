import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiBrokenBottle } from "react-icons/gi";

export const FooterContainer = styled.footer`
  color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 30vh;
  background: ${({ theme }) => theme.colors.dark};
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    height: 40vh;
    justify-content: space-between;
    padding: 2rem 0;
  }
`;

export const LinksContainer = styled.div`
  width: 30%;

  @media screen and (max-width: 960px) {
    width: 80%;
    height: 2rem;
  }
`;

export const LinkList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
`;

export const Li = styled.li`
  text-decoration: none;
`;

export const LinkTo = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.orange};
  transition: color 0.3s ease-out;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  @media screen and (max-width: 960px) {
    font-size: ${({ theme }) => theme.fontSize.small};
    padding-bottom: 0.2rem;
  }
`;

export const Copyright = styled.div`
  width: 30%;
  text-align: center;
  @media screen and (max-width: 960px) {
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.small};
    padding: 0.6rem 0;
  }
`;

export const IconsContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
export const LogoBottle = styled(GiBrokenBottle)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.orange};
  margin: 0 3px;
`;
