import axios from "axios";

const cityClient = axios.create({
  baseURL: process.env.REACT_APP_CITY_API_URL,
});

cityClient.interceptors.request.use((config) => {
  config.headers["X-Api-Key"] = `${process.env.REACT_APP_CITY_API_KEY}`;
  return config;
});

const { get, post, put, delete: destroy } = cityClient;
export { get, post, put, destroy };