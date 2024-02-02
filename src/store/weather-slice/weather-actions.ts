import { Dispatch } from "@reduxjs/toolkit";
import { OpenWeatherAPI } from "../../services/open-weather-api";
import { Position } from "../../services/geolocation-api";
import { CurrentWeather, weatherActions } from "./weather-slice";
import { parseDate } from "../../utils/date";

export const fetchWeatherAction = (params: Position) => {
  return async (dispatch: Dispatch) => {
    const data = (await OpenWeatherAPI.getCurrentWeather(params)).data;
    console.log(data);
    const mappedWeatherData: CurrentWeather = {
      id: data.id,
      main: data.weather[0].main,
      icon: data.weather[0].icon,
      windSpeed: data.wind.speed,
      winDeg: data.wind.deg,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      temp: data.main.temp,
      place: data.name,
      visibility: data.visibility,
    };

    dispatch(weatherActions.setCurrentWeather(mappedWeatherData));
  };
};

export const fetch5DaysForecast = (params: Position) => {
  return async (dispatch: Dispatch) => {
    const data = (await OpenWeatherAPI.getfiveDayForecast(params)).data.list;

    const fiveDaysForecast: CurrentWeather[] = data

      .filter(
        // Get the noon forecast of each day
        (item: any, i: number) => {
          return i % 4 == 0 && (i / 4) % 2 !== 0;
        }
      )
      .map((data: any) => ({
        id: data.dt,
        main: data.weather[0].main,
        description: "",
        icon: data.weather[0].icon,
        windSpeed: "",
        winDeg: "",
        humidity: "",
        pressure: "",
        temp: data.main.temp_max,
        minTemp: data.main.temp_min,
        place: "",
        visibility: "",
        dateTxt: data.dt_txt,
      }));

    dispatch(weatherActions.setForecast(fiveDaysForecast));
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
