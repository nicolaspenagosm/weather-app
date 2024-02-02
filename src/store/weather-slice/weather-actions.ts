import { Dispatch } from "@reduxjs/toolkit";
import { OpenWeatherAPI } from "../../services/open-weather-api";
import { Position } from "../../services/geolocation-api";
import { Weather, weatherActions } from "./weather-slice";

export const fetchWeatherAction = (params: Position) => {
  return async (dispatch: Dispatch) => {
    const data = (await OpenWeatherAPI.getCurrentWeather(params)).data;

    console.log(data);
    const mappedWeatherData: Weather = {
      id: data.id,
      main: data.weather[0].main,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      windSpeed: data.wind.speed,
      winDeg: data.wind.deg,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      temperature: data.main.temp,
      place: data.name,
      visibility: data.visibility,
    };

    dispatch(weatherActions.setCurrentWeather(mappedWeatherData));
  };
};

/*
  id: string;
  main: string;
  description: string;
  icon: string;
  windSpeed: string;
  humidity: string;
  pressure: 1015;
*/
