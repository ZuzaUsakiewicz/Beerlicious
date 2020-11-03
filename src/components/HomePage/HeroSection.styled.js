import styled from "styled-components";

export const MainSection = styled.section`
  height: 90vh;
  background: rgba(0, 0, 0, 0.3);
`;

export const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SliderContent = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  width: 100%;
  height: 100%;
  background: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.4);
  transition: all 0.5s ease-in-out;
`;

export const ButtonPrev = styled.button`
  border: none;
  border-radius: 10px;
  background: white;
  padding: 20px 40px;
  position: absolute;
  top: 50%;
  left: 5%;
  cursor: pointer;
`;

export const ButtonNext = styled.button`
  border: none;
  border-radius: 10px;
  background: white;
  padding: 20px 40px;
  position: absolute;
  top: 50%;
  right: 5%;
  cursor: pointer;
`;
export const TextContainer = styled.div`
  width: 60%;
  height: 90%;
`;

export const SliderTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.huge};
`;

export const SliderParagraph = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.thin};
  font-size: ${({ theme }) => theme.fontSize.regular};
`;
