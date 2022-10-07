import styled from "styled-components";
import { motion } from "framer-motion";
import AboutFirstImage from "../../images/sigmund-I9K6dbE7GOw-unsplash.jpg";
import AboutSecondImage from "../../images/stefan-cosma-uLuPpN5-C0E-unsplash.jpg";
import AboutThirdImage from "../../images/meritt-thomas-2UsNF4Az-Ko-unsplash.jpg";

export const AboutSectionContainer = styled(motion.section)`
  width: 100%;
  max-width: 1900px;
  margin: 0 auto;
`;

export const TitleSection = styled.div`
  color: white;
  padding: 10rem 1rem;
  height: 50rem;
  background-image: url(${AboutFirstImage});
  box-shadow: inset 0 0 0 1000px rgba(0, 3, 5, 0.521);
  background-attachment: fixed;
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 960px) {
    padding: 5rem 0.5rem;
    height: 70vh;
  }
`;

export const HistorySection = styled(TitleSection)`
  background-image: url(${AboutSecondImage});
`;

export const FutureSection = styled(TitleSection)`
  background-image: url(${AboutThirdImage});
`;

export const Text = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 3rem 1rem 3rem 10rem;
  @media screen and (max-width: 960px) {
    padding: 1.3rem 0.5rem;
    flex-direction: column;
  }
`;

export const H = styled.h1`
  color: ${({ theme }) => theme.colors.orange};
  font-size: ${({ theme }) => theme.fontSize.big};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  @media screen and (max-width: 960px) {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.thin};
  text-align: justify;
  width: 50%;
  @media screen and (max-width: 960px) {
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.mobile};
  }
`;
