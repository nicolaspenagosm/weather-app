import { Position } from "../geolocation-api";
import { get } from "./base";

export const OpenWeatherAPI = {
  getCurrentWeather: (params: Position) => get("/data/2.5/weather", { params }),
  getfiveDayForecast: (params: Position) =>
    get("/data/2.5/forecast", { params }),
  getReverseGeocoding: (params: Position) => get("/reverse", { params }),
};
