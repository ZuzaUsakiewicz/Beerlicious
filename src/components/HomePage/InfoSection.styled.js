import styled from "styled-components";

export const InfoSectionContainer = styled.section`
  width: 100%;
  padding: 0 10rem;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    height: 120vh;
    flex-direction: column;
    padding: 1rem;
  }
`;

export const InfoText = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  width: 50%;
  padding: 0 40px;
  @media screen and (max-width: 960px) {
    width: 100%;
    padding: 2rem 0;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  line-height: 4rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.huge};
  position: relative;
  &:after {
    position: absolute;
    content: "";
    bottom: -20px;
    right: 0;
    left: 0;
    width: 100px;
    border-bottom: 10px solid ${({ theme }) => theme.colors.hover};
  }
  @media screen and (max-width: 960px) {
    font-size: 2rem;
  }
`;
export const Informations = styled.p`
  letter-spacing: 1px;
  padding: 2rem 0;
  font-size: 1rem;
  text-align: justify;
  font-weight: ${({ theme }) => theme.fontWeight.thin};
  @media screen and (max-width: 960px) {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;
export const ImageContainer = styled.div`
  width: 50%;
  height: 80%;
  background: url("https://images.unsplash.com/photo-1551797802-f2dd1ec0033e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: -2px 2px 20px 10px rgba(23, 55, 83, 0.6);
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 60%;
  }
`;

export const Span = styled.span`
  font-weight: bold;
  letter-spacing: 4px;
  text-transform: uppercase;
  font-style: italic;
  font-size: ${({ theme }) => theme.fontSize.regular};
  @media screen and (max-width: 960px) {
    font-size: 1rem;
  }
`;
