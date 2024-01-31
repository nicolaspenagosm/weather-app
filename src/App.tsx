import React from "react";

import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./App.style";

import Aside from "./components/layout/Aside/Aside";
import Dashboard from "./components/layout/Dashboard/Dashboard";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.mobileBreakpoint}px) {
    flex-direction: row;
    min-height: 100vh;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Root>
        <Aside />
        <Dashboard />
      </Root>
    </ThemeProvider>
  );
}

export default App;