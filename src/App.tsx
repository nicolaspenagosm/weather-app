import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, darkTheme, lightTheme } from "./App.styled";
import Aside from "./components/layout/Aside";
import Dashboard from "./components/layout/Dashboard";
import useDarkMode from "./hooks/use-dark-mode";

const Root = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.mobileBreakpoint}px) {
    flex-direction: row;
    min-height: 100vh;
  }
`;

function App() {
  const {  isDark, toggleTheme } = useDarkMode();

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Root>
        <Aside  />
        <Dashboard  toggleTheme={ toggleTheme } />
      </Root>
    </ThemeProvider>
  );
}

export default App;
