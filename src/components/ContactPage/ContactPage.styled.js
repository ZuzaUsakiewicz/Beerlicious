import styled from "styled-components";
import { motion } from "framer-motion";

export const ContactSectionContainer = styled(motion.section)`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 10rem 1rem 0rem 1rem;
  color: ${({ theme }) => theme.colors.primary};
  @media screen and (max-width: 960px) {
    padding: 5rem 1rem;
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 3rem;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    padding: 0.5rem;
  }
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
    color: ${({ theme }) => theme.colors.orange};
  }
  b {
    color: ${({ theme }) => theme.colors.orange};
  }
  @media screen and (max-width: 960px) {
    padding: 0;
    h1 {
      font-size: ${({ theme }) => theme.fontSize.regular};
    }
    p {
      font-size: ${({ theme }) => theme.fontSize.small};
    }
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
  @media screen and (max-width: 960px) {
    width: 70%;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 50vh;
  align-items: flex-start;
  width: 100%;
`;

export const FormInput = styled.input`
  width: 100%;
  height: ${({ message }) => (message ? "5rem" : "3rem")};
  border: none;
  padding: 0.5rem;
`;
