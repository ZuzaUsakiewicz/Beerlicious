import styled from "styled-components";
import { motion } from "framer-motion";
export const BreweriesPageContainer = styled(motion.section)`
  width: 100%;
  min-height: 110vh;
  padding: 10rem 1rem;
`;

export const BrewContentContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const BrewLink = styled.a`
  padding: 10px 20px;
  margin: 5px 0;
  color: white;
  text-decoration: none;
  background-color: orange;
`;
