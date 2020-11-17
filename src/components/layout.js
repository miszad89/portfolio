import React from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"

import { theme } from "../utils/theme"

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat';
    background: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.dark};
  }

  *, *::before, *::after {
      box-sizing: border-box;
  }

  a {
    margin: 1rem;
    text-decoration: none;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.dark};
    opacity: 1;
    transition: opacity 0.2s ease-out;
  }

  a:hover {
    opacity: 0.3;
  }  
`
const StyledWrapper = styled.div`
  padding: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <StyledWrapper>{children}</StyledWrapper>
  </ThemeProvider>
)

export default Layout
