import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weather-slice/weather-slice";
import citiesReducer from "./cities-slice/cities-slice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: { weather: weatherReducer, cities: citiesReducer },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;