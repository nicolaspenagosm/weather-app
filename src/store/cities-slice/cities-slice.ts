import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface City {
    name: string,
    latitude: number,
    longitude: number,
    country:  string,
    population: number,
    is_capital: boolean
}

export interface CitiesState {
  cities: City[];
}

const initialState: CitiesState = {
  cities: [],
};

const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    setCities(state, { payload }: PayloadAction<City[]>) {
      state.cities = payload;
    },
  },
});

export const citiesActions = citiesSlice.actions;
export default citiesSlice.reducer;