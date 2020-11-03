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
export default Layout;
