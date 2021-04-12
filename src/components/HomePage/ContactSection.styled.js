import styled from "styled-components";

export const ContactContainer = styled.section`
  width: 100%;
  height: 60vh;
  padding: 0 1rem;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    height: 100vh;
  }
`;

export const ContactText = styled.div`
  padding: 1rem;
  width: 100%;
  text-align: justify;
  p {
    color: ${({ theme }) => theme.colors.primary};
    padding-top: 2rem;
    font-weight: ${({ theme }) => theme.fontWeight.thin};
  }
  @media screen and (max-width: 960px) {
    padding: 0.3rem;
    font-size: ${({ theme }) => theme.fontSize.mobile};
  }
`;
