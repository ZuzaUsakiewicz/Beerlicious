import styled from "styled-components";
import BgImage from "../../images/ryunosuke-kikuno-Fc-6aFuKtE8-unsplash.jpg";

export const NewBeerContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 4rem;
  margin-bottom: 4rem;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: inset -2px 2px 20px 1000px rgba(29, 112, 162, 0.788);
  background-image: url(${BgImage});
  @media screen and (max-width: 960px) {
    padding: 0.4rem 5px 0 5px;
    flex-direction: column;
  }
`;

export const BeerWrapper = styled.div`
  width: 100%;
  padding: 0 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    height: 130vh;
  }
`;

export const ImageContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  position: relative;
  &:after {
    content: "new!";
    position: absolute;
    top: 20%;
    left: 20%;
    text-align: center;
    padding: 5px;
    width: 100px;
    height: 50px;
    font-size: ${({ theme }) => theme.fontSize.regular};
    color: ${({ theme }) => theme.colors.dark};
    background-color: ${({ theme }) => theme.colors.orange};
    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 75%,
      75% 75%,
      75% 100%,
      50% 75%,
      0% 75%
    );
  }
  @media screen and (max-width: 960px) {
    width: 80%;
    padding-bottom: 1rem;
  }
`;

export const BeerImage = styled.img`
  width: 100px;
  height: auto;
  @media screen and (max-width: 960px) {
    width: 30%;
    padding: 0 10px;
    height: auto;
  }
`;

export const BeerInfoContainer = styled.div`
  width: 50%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 4rem;
  @media screen and (max-width: 960px) {
    width: 100%;
    padding: 0 10px;
    height: 50%;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: ${({ theme }) => theme.colors.primary};
`;

export const BeerName = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.big};
  text-transform: uppercase;
  @media screen and (max-width: 960px) {
    font-size: ${({ theme }) => theme.fontSize.regular};
  }
`;

export const IconAndText = styled.div`
  font-size: 1.5rem;
  width: 90px;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  justify-items: center;
  padding: 5px 0;
  @media screen and (max-width: 960px) {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

export const Description = styled.p`
  text-align: justify;
  @media screen and (max-width: 960px) {
    font-size: ${({ theme }) => theme.fontSize.mobile};
  }
`;

export const Ingredients = styled.div`
  color: ${({ theme }) => theme.colors.orange};
  font-size: ${({ theme }) => theme.fontSize.small};
  padding: 0.3rem 0;
  @media screen and (max-width: 960px) {
    font-size: ${({ theme }) => theme.fontSize.mobile};
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 30px 0;
`;
