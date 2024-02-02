import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Position } from "../../services/geolocation-api";

// TODO Improve the abstractions of the entities
export interface CurrentWeather {
  id: string;
  main: string;
  icon: string;
  windSpeed: string;
  humidity: string;
  pressure: string;
  temp: string;
  place: string;
  winDeg: string;
  visibility: string;
  minTemp?: string;
  dateTxt?: string;
}

export interface Wheater {
  id: string;
  main: string;
  icon: string;
  temp: string;
  date: number;
}

export interface WeatherForecast {}
export interface WeatherState {
  currentPosition: Position | null;
  currentWeather: CurrentWeather | null;
  forecast: CurrentWeather[] | null;
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
    setForecast(state, { payload }: PayloadAction<CurrentWeather[]>) {
      state.forecast = payload;
    },
  },
});

export const weatherActions = weatherSlice.actions;
export default weatherSlice.reducer;
