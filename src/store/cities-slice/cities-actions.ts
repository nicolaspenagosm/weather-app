import { Dispatch } from "@reduxjs/toolkit";
import { City } from "./cities-slice";
import { CityApi } from "../../services/city-api";
import { FetchCityNameProps } from "../../services/city-api";
import { handleErrorResponse } from "..";
export const fetchCities = (params: FetchCityNameProps) => {
  return async (dispatch: Dispatch) => {
    try{
      const cities = await CityApi.getCitiesByName(params);
      console.log(cities);
    }catch(err){
      handleErrorResponse(err);
    }
  };
};
