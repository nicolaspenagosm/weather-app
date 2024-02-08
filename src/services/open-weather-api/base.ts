import axios from "axios";

const openWeatherClient = axios.create({
  baseURL: process.env.REACT_APP_OPEN_WEATHER_API_BASE_URL,
});

openWeatherClient.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    appid: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
  };
  return config;
});

const { get, post, put, delete: destroy } = openWeatherClient;
export { get, post, put, destroy };