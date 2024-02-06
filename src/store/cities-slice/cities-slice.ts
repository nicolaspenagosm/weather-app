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
      state.cities.push(...payload);
    },
  },
});

export const citiesActions = citiesSlice.reducer;
export default citiesSlice;
