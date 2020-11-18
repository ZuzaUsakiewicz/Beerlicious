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
  font-family: 'Teko', sans-serif;
  background: ${({ theme }) => theme.colors.semidark};
  margin-top: -100px;
}
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
    font-size: 2rem;
    &:after {
      bottom: -3px;
    }
  }
`;

export default Layout;
