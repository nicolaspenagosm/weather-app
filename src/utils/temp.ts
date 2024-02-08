import { WeatherState } from "../store/weather-slice/weather-slice";

export const fromKelvinToCelsius = (kelvin: number) => {
  return Math.round(kelvin - 273.15);
};

export const fromKelvinToFahrenheit = (kelvin: number) => {
  return Math.round((kelvin - 273.15) * 1.8 + 32);
};

const convertionMap = {
  "°C": fromKelvinToCelsius,
  "°F": fromKelvinToFahrenheit,
};

export const convertTemp = (
  kelvin: number,
  tempUnit: WeatherState["tempUnit"]
) => {
  return convertionMap[tempUnit](kelvin);
};
