import styled from "styled-components";
import { motion } from "framer-motion";

export const BeersPageContainer = styled(motion.section)`
  width: 100%;
  padding: 10rem 1rem 1rem 1rem;
  max-width: 1600px;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    padding: 5rem 1rem 0 1rem;
  }
`;

export const AllBeersContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 5rem 1rem 0 1rem;
`;

export const BeerItemContainer = styled.div`
  width: 300px;
  height: 400px;
  border-bottom: 10px solid transparent;
  margin: 10px;
  padding: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.dark};
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 2px 2px 20px 6px rgba(23, 55, 83, 0.6);
  transition: border-bottom 0.5s ease-in-out, box-shadow 0.3s ease-in-out;
  &:hover {
    border-bottom: 10px solid ${({ theme }) => theme.colors.dark};
    box-shadow: 2px 2px 25px 10px rgba(23, 55, 83, 0.6);
    img {
      transform: scale(1.1) translateY(20px);
    }
  }
  @media screen and (max-width: 960px) {
    max-width: 100%;
    height: 350px;
  }
`;

export const BeerCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const BeerNames = styled.div`
  text-align: center;
  height: 100px;
  width: 100%;
  margin-bottom: 15px;
  @media screen and (max-width: 960px) {
    height: 80px;
    h2 {
      font-size: ${({ theme }) => theme.fontSize.small};
    }
    h5 {
      font-size: ${({ theme }) => theme.fontSize.mobile};
    }
  }
`;

export const BeerImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;

export const BeerImage = styled.img`
  height: 10rem;
  width: auto;
  transition: transform 0.4s ease-in-out;
`;

export const ModalBackground = styled.div`
  width: 100vw;
  height: ${({ modal }) => (modal ? "100vh" : 0)};
  opacity: ${({ modal }) => (modal ? 1 : 0)};
  pointer-events: ${({ modal }) => (modal ? "showing" : "none")};
  transition: opacity 0.2s ease-in-out;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.modalBG};
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  position: absolute;
  cursor: auto;
  margin-top: 5%;
  z-index: 999;
  max-width: 700px;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: justify;
  padding: 10px 20px;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.semidark};
  box-shadow: -2px 2px 20px 10px rgba(11, 39, 63, 0.9);
  @media screen and (max-width: 960px) {
    max-width: 90vw;
    z-index: 999;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  top: 10%;
  right: 10%;
  position: absolute;
  @media screen and (max-width: 960px) {
    top: 0;
    right: 0;
  }
`;

export const InfoWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  @media screen and (max-width: 960px) {
    width: 95%;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    img {
      position: absolute;
      top: 5%;
      right: 30%;
      z-index: -1;
      opacity: 0.7;
    }
  }
`;

export const BeerDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  @media screen and (max-width: 960px) {
    padding: 0 0.2rem;
    margin-top: 3rem;
  }
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media screen and (max-width: 960px) {
    font-size: ${({ theme }) => theme.fontSize.mobile};
  }
`;

export const Name = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.regular};
  color: ${({ theme }) => theme.colors.orange};
  @media screen and (max-width: 960px) {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

export const Tagline = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.small};
  @media screen and (max-width: 960px) {
    font-size: ${({ theme }) => theme.fontSize.mobile};
  }
`;
export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  @media screen and (max-width: 960px) {
    font-size: ${({ theme }) => theme.fontSize.mobile};
  }
`;
