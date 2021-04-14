import styled from "styled-components";
import { Link } from "react-router-dom";
import InfoImage from "../../images/jon-parry-epaXKn3gfQo-unsplash.jpg";

export const InfoSectionContainer = styled.section`
  width: 100%;
  padding: 0 10rem;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.dark};
  @media screen and (max-width: 960px) {
    min-height: 120vh;
    flex-direction: column;
    padding: 1rem;
  }
`;

export const InfoText = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  width: 50%;
  padding: 0 40px;
  @media screen and (max-width: 960px) {
    height: 100%;
    width: 100%;
    padding: 2rem 0 0.2rem 0;
  }
`;

export const Informations = styled.p`
  padding: 2rem 0;
  text-align: justify;
  font-weight: ${({ theme }) => theme.fontWeight.thin};
  @media screen and (max-width: 960px) {
    font-size: ${({ theme }) => theme.fontSize.mobile};
  }
`;
export const ImageContainer = styled.div`
  width: 50%;
  height: 80%;
  background-image: url(${InfoImage});
  background-repeat: no-repeat;
  background-position: 20% 50%;
  background-size: cover;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const LinkAbout = styled(Link)`
  color: ${({ theme }) => theme.colors.orange};
  position: relative;
  font-weight: bold;
  letter-spacing: 4px;
  text-transform: uppercase;
  font-style: italic;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.regular};
  transition: opacity 0.4s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 4px;
    background: ${({ theme }) => theme.colors.orange};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.4s ease-in-out;
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
  @media screen and (max-width: 960px) {
    font-size: 1rem;
  }
`;
