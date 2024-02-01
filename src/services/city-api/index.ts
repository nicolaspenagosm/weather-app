import { get } from "./base";

export type CityName = {
  name: string;
  limit: number;
};

export const CityApi = {
  getCitiesByName: (params: CityName) => get("city", { params }),
};
