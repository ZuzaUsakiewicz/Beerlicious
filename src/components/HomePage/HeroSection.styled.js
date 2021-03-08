import styled from "styled-components";

export const MainSection = styled.section`
  min-height: 100vh;
  width: 100%;
`;

export const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  margin-top: -20px;
  background: rgba(0, 0, 0, 0.7);
  @media screen and (max-width: 960px) {
    h1 {
      font-size: 1.5rem;
      letter-spacing: 0;
      line-height: 1.2;
      padding-bottom: 20px;
    }
  }
`;

export const SliderContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  width: 100vw;
  height: 105vh;
  background: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 0 0 1000px rgba(8, 5, 1, 0.404);
`;

export const TextContainer = styled.div`
  padding-top: 260px;
  width: 60%;
  height: 90%;
  @media screen and (max-width: 960px) {
    padding-top: 300px;
    width: 60%;
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

export const SliderParagraph = styled.p`
  padding: 2rem 0;
  font-weight: ${({ theme }) => theme.fontWeight.thin};
  font-size: ${({ theme }) => theme.fontSize.regular};
  @media screen and (max-width: 960px) {
    font-size: 15px;
  }
`;
