import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Position } from "../../services/geolocation-api";

export interface Weather {
  id: string;
  main: string;
  icon: string;
  temp: string;
  date: number;
}
export interface CurrentWeather extends Weather {
  windSpeed: string;
  humidity: string;
  pressure: string;
  temp: string;
  place: string;
  winDeg: string;
  visibility: string;
}

export interface WeatherForecast extends Weather {
  minTemp: string;
  dateTxt: string;
}

export interface WeatherState {
  currentPosition: Position | null;
  currentWeather: CurrentWeather | null;
  forecast: WeatherForecast[] | null;
}

const initialState: WeatherState = {
  currentPosition: null,
  currentWeather: null,
  forecast: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setCurrentWeather(state, { payload }: PayloadAction<CurrentWeather>) {
      state.currentWeather = payload;
    },
    setCurrentPosition(state, { payload }: PayloadAction<Position>) {
      state.currentPosition = payload;
    },
    setForecast(state, { payload }: PayloadAction<WeatherForecast[]>) {
      state.forecast = payload;
    },
  },
});

export const weatherActions = weatherSlice.actions;
export default weatherSlice.reducer;
