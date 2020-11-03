import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainSection = styled.section`
  height: 90vh;
  background: rgba(0, 0, 0, 0.3);
`;

export const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SliderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  width: 100%;
  height: 100%;
  background: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.4);
  transition: all 0.5s ease-in-out;
`;

export const ButtonPrev = styled.button`
  border: none;
  border-radius: 10px;
  background: transparent;
  padding: 20px 40px;
  position: absolute;
  top: 50%;
  left: 5%;
  cursor: pointer;
  transition: background 0.4s ease-in-out;
  :hover {
    background: rgba(0, 0, 0, 0.6);
  }
  @media screen and (max-width: 960px) {
    top: 70%;
    left: 2%;
  }
`;

export const ButtonNext = styled.button`
  border: none;
  border-radius: 10px;
  background: transparent;
  padding: 20px 40px;
  position: absolute;
  top: 50%;
  right: 5%;
  cursor: pointer;
  transition: background 0.4s ease-in-out;
  :hover {
    background: rgba(0, 0, 0, 0.6);
  }
  @media screen and (max-width: 960px) {
    top: 70%;
    right: 2%;
  }
`;

export const Previous = styled(FaAngleLeft)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 3rem;
  @media screen and (max-width: 960px) {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

export const Next = styled(FaAngleRight)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 3rem;
  @media screen and (max-width: 960px) {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

export const TextContainer = styled.div`
  padding-top: 160px;
  width: 60%;
  height: 90%;
  @media screen and (max-width: 960px) {
    width: 70%;
  }
`;

export const ActionLink = styled(Link)`
  text-decoration: none;
  background: red;
  padding: 10px 20px;
`;
export const SliderTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.huge};
  @media screen and (max-width: 960px) {
    font-size: ${({ theme }) => theme.fontSize.regular};
  }
`;

export const SliderParagraph = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.thin};
  font-size: ${({ theme }) => theme.fontSize.regular};
  @media screen and (max-width: 960px) {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;