import React, { useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./App.styled";
import Aside from "./components/layout/Aside/Aside";
import Dashboard from "./components/layout/Dashboard/Dashboard";
import { getLocation } from "./services/geolocation-api";
import { useAppDispatch } from "./store";
import useHttp from "./hooks/use-http";

import {
  fetch5DaysForecast,
  fetchWeatherAction,
} from "./store/weather-slice/weather-actions";

const Root = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.mobileBreakpoint}px) {
    flex-direction: row;
    min-height: 100vh;
  }
`;

function App() {
  const { isLoading, error, sendRequest } = useHttp({
    loading: true,
    error: null,
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    const onInit = async () => {
      const currentLocation = await getLocation();
      if (currentLocation) {
        sendRequest(() => dispatch(fetchWeatherAction(currentLocation)));
        dispatch(fetch5DaysForecast(currentLocation));
      }
    };

    onInit();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Root>
        <Aside />
        <Dashboard />
      </Root>
    </ThemeProvider>
  );
}

export default App;
