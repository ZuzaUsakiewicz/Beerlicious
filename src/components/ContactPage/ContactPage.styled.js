import styled from "styled-components";
import { motion } from "framer-motion";

export const ContactSectionContainer = styled(motion.section)`
  width: 100%;
  min-height: 100vh;
  padding: 10rem 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 3rem;
`;

export const TextWrapper = styled.div`
  width: 100%;
  padding-left: 20%;
  font-weight: ${({ theme }) => theme.fontWeight.thin};
  h1 {
    font-size: ${({ theme }) => theme.fontSize.big};
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.regular};
  }
  b {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const MapWrapper = styled.div`
  width: 100%;
`;

export const Map = styled.img`
  width: 100%;
  height: auto;
`;

export const IconWrapper = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-between;
  padding-top: 1rem;
`;
