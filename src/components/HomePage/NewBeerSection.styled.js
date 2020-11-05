import styled from "styled-components";

export const NewBeerContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 3rem;
  @media screen and (max-width: 960px) {
    padding: 0 5px;
    flex-direction: column;
  }
`;

export const BeerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
    background-color: ${({ theme }) => theme.colors.primary};
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
`;

export const BeerImage = styled.img`
  width: 100px;
  height: auto;
`;

export const BeerInfoContainer = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: ${({ theme }) => theme.colors.primary};
`;

export const BeerName = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.regular};
  text-transform: uppercase;
`;

export const IconAndText = styled.div`
  font-size: 1.5rem;
  width: 90px;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  justify-items: center;
  padding: 5px 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
