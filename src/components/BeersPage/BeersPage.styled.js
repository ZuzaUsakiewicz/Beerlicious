import styled from "styled-components";
import { motion } from "framer-motion";

export const BeersPageContainer = styled(motion.section)`
  width: 100%;
  min-height: 110vh;
  padding: 10rem 1rem;
`;

export const AllBeersContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem;
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
  }
  @media screen and (max-width: 960px) {
    max-width: 300px;
  }
`;

export const BeerCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const BeerNames = styled.div`
  text-align: center;
  height: 100px;
  width: 100%;
  margin-bottom: 15px;
`;

export const BeerImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;

export const BeerImage = styled.img`
  height: 10rem;
  width: auto;
`;

export const ModalBackground = styled.div`
  width: 100%;
  opacity: ${({ modal }) => (modal ? 1 : 0)};
  pointer-events: ${({ modal }) => (modal ? "showing" : "none")};
  transition: opacity 0.5s ease-in-out;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.modalBG};
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 700px;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px 20px;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.semidark};
  box-shadow: -2px 2px 20px 10px rgba(11, 39, 63, 0.9);
  @media screen and (max-width: 960px) {
    max-width: 90vw;
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
`;

export const BeerDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Name = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.big};
`;

export const Tagline = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.regular};
`;
export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
`;
