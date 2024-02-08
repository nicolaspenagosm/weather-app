import { City } from "../../store/cities-slice/cities-slice";
import { get } from "./base";

export type FetchCityNameProps = {
  name: string;
  limit?: number;
};

export const CityApi = {
  getCitiesByName: (params: FetchCityNameProps) =>
    get<City[]>("city", { params: { ...params, limit: 5 } }),
};