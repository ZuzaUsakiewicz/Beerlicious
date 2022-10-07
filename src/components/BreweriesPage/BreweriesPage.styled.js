import styled from "styled-components";
import { motion } from "framer-motion";
import BgImage from "../../images/monica-di-loxley-ddsRNqy4m5Y-unsplash.jpg";

export const BreweriesPageContainer = styled(motion.section)`
  width: 100%;
  min-height: 110vh;
  padding: 10rem 1rem;
  max-width: 1600px;
  margin: 0 auto;
`;

export const BrewContentContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  margin-top: 1.5rem;
  justify-content: space-evenly;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: inset -2px 2px 20px 1000px rgba(29, 112, 162, 0.788);
  background-image: url(${BgImage});
`;

export const BrewLink = styled.a`
  padding: 10px 20px;
  margin: 5px 0;
  color: white;
  text-decoration: none;
  background-color: orange;
`;
