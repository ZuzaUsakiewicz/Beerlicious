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
}
`;
const Container = styled.div`
  /* width: 100%;
  height: 100%; */
  font-family: "Teko", sans-serif;
  font-weight: ${({ theme }) => theme.fontWeight.normal};
`;

export const Section = styled.section`
  height: 100vh;
  padding: 0.7rem;
  background: ${({ theme }) => theme.colors.semidark};
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Container>{children}</Container>
    </>
  </ThemeProvider>
);
export default Layout;
