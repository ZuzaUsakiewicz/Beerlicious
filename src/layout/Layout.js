import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "../utils/theme";

const GlobalStyle = createGlobalStyle`
*, html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body {
  font-family: 'Tako', sans-serif;
  background: ${({ theme }) => theme.colors.semidark};
  user-select: none;
  box-sizing: inherit;
}
p{
  font-family: 'Arial';
  /* letter-spacing: 0.6px; */
}

//Carousel styling
.rec.rec-carousel-wrapper{
  margin: 0;
  padding: 0;
  border: 0;
  position: relative;
}

.rec.rec-carousel{
  height: 100vh;
  width: 100vw;
  position: relative;
  border: 0;
}
.rec.rec-pagination {
  position: absolute;
  top: 90%;
  z-index: 450;
  left: 45%;
  
}
.rec.rec-arrow{
  color:white;
  position: absolute;
  top: 50%;
  z-index: 400;
}
.rec.rec-arrow-left {
  left: 5%;
}
.rec.rec-arrow-right {
  right: 5%;
}
.rec.rec-arrow:disabled {
    visibility: hidden;
}
.rec.rec-arrow:hover {
    border-radius: 50%;
    background-color: transparent;
}
.rec.rec-arrow:active {
    border-radius: 50%;
}
.rec.rec-arrow:focus {
    background-color: rgba(0,0,0, 0.4);
}
.rec-dot_active{
  box-shadow: 0 0 1px 6px ${({ theme }) => theme.colors.orange};
  background: transparent;
}
.rec.rec-dot{
  width: 20px;
  height: 20px;
  border-radius: 0;
  margin: 0 10px;
  background-color: rgba(29, 112, 162,0.6);
}
.rec.rec-dot:focus{
  box-shadow: 0 0 1px 6px ${({ theme }) => theme.colors.orange};
}
.rec.rec-dot:hover{
  background: ${({ theme }) => theme.colors.orange};
  box-shadow: 0 0 1px 4px ${({ theme }) => theme.colors.orange};
}
@media screen and (max-width: 960px){
  .rec.rec-arrow{
  color:white;
  position: absolute;
  top: 60%;
  z-index: 400;
}
.rec.rec-arrow-left {
  left: 3%;
}
.rec.rec-arrow-right {
  right: 3%;
}
}
// End of Carousel styling
`;

const Container = styled.div`
  font-family: "Teko", sans-serif;
  font-weight: ${({ theme }) => theme.fontWeight.normal};
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Container>{children}</Container>
    </>
  </ThemeProvider>
);

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
    font-size: 1.3rem;
    &:after {
      bottom: -3px;
    }
  }
`;
export const IconLink = styled.a`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.small};
  transition: color 0.2s ease-in;
  padding: ${(props) => (props.navbar ? "0 10px" : "")};

  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export default Layout;
