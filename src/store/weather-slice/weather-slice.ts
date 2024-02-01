import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Position } from "../../services/geolocation-api";

export interface Weather {
  id: string;
  main: string;
  description: string;
  icon: string;
  windSpeed: string;
  humidity: string;
  pressure: string;
  temperature:string;
}
export interface WeatherState {
  currentPosition: Position | null;
  currentWeather: Weather | null;
  forecast: Weather[] | null;
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
    setCurrentWeather(state, { payload }: PayloadAction<Weather>) {
      console.log("actualizo")
      state.currentWeather = payload;
    },
    setCurrentPosition(state, { payload }: PayloadAction<Position>) {
      state.currentPosition = payload;
    },
    setForecast(state, { payload }: PayloadAction<Weather[]>) {
      state.forecast = payload;
    },
  },
});

export const weatherActions = weatherSlice.actions;
export default weatherSlice.reducer;
