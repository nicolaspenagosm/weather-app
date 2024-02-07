import { v4 as uuidv4 } from "uuid";
import { Dispatch } from "@reduxjs/toolkit";
import { OpenWeatherAPI } from "../../services/open-weather-api";
import { Position } from "../../services/geolocation-api";
import {
  CurrentWeather,
  WeatherForecast,
  weatherActions,
} from "./weather-slice";
import { getMostRepeatedEl, setOrAddCount } from "../../utils/map";
import {
  calculateDateIndx,
  gateTodayLimitIndex,
  getMilisUntilEndOfTheDay,
} from "../../utils/date";

export const fetchWeatherAction = (params: Position) => {
  return async (dispatch: Dispatch) => {
    dispatch(weatherActions.setIsFetching(true));
    const data = (await OpenWeatherAPI.getCurrentWeather(params)).data;

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
      date: +data.dt + 1000,
    };

    dispatch(weatherActions.setCurrentWeather(mappedWeatherData));
    dispatch(weatherActions.setIsFetching(false));
  };
};

export const fetch5DaysForecast = (params: Position) => {
  return async (dispatch: Dispatch) => {
    dispatch(weatherActions.setIsFetching(true));
    const dataList = (await OpenWeatherAPI.getfiveDayForecast(params)).data
      .list;

    //API returns weather forecast for 5 days with data every 3 hours (8 measurement per day)
    const measPerDay = 8;

    let forecast: WeatherForecast[] = dataList.map((data: any) => ({
      id: uuidv4(),
      main: data.weather[0].main,
      icon: data.weather[0].icon,
      temp: data.main.temp_max,
      minTemp: data.main.temp_min,
      // API returns date is in seconds
      date: data.dt * 1000,
      dateTxt: data.dt_txt,
    }));

    const todayLimitIndex = gateTodayLimitIndex(forecast);

    // Dummy first element to make esier working with % (this el is no taken into account)
    forecast = [forecast[0], ...forecast.slice(todayLimitIndex)];

    const fiveDaysForecast: WeatherForecast[] = calculateDailyAverageForecast(
      forecast,
      measPerDay
    );

    dispatch(weatherActions.setForecast(fiveDaysForecast));
    dispatch(weatherActions.setIsFetching(false));
  };
};

function calculateDailyAverageForecast(
  forecast: WeatherForecast[],
  measPerDay: number
) {
  let measPerDayIdx = measPerDay;
  let filteredForecast: WeatherForecast[] = [];
  let minTemp: number = Number.POSITIVE_INFINITY;
  let maxTemp: number = Number.NEGATIVE_INFINITY;
  let iconFreqMap: Map<string, number> = new Map();
  let weatherFreMap: Map<string, number> = new Map();

  for (let index = 1; index < forecast.length; index++) {
    const current = forecast[index];
    minTemp = Math.min(minTemp, +current.minTemp);
    maxTemp = Math.max(maxTemp, +current.temp);
    setOrAddCount(iconFreqMap, current.icon);
    setOrAddCount(weatherFreMap, current.main);

    if (
      (index % measPerDayIdx === 0 && index > 0) ||
      index + 1 === forecast.length
    ) {
      // Start of a new day

      // Noon index
      const dateIdx = calculateDateIndx(index, measPerDayIdx, measPerDay);

      filteredForecast.push({
        id: current.id,
        main: getMostRepeatedEl(weatherFreMap!),
        icon: getMostRepeatedEl(iconFreqMap!),
        temp: maxTemp!.toString(),
        minTemp: minTemp!.toString(),
        date: forecast[dateIdx].date,
        dateTxt: forecast[dateIdx].dateTxt,
      });

      minTemp = +current.minTemp;
      maxTemp = +current.temp;
      iconFreqMap = new Map();
      weatherFreMap = new Map();
    }
  }

  return filteredForecast;
}
