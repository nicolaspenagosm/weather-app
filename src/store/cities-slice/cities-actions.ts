import { Dispatch } from "@reduxjs/toolkit";
import { City, citiesActions } from "./cities-slice";
import { CityApi } from "../../services/city-api";
import { FetchCityNameProps } from "../../services/city-api";
import { handleErrorResponse } from "../../utils/http";

export const fetchCities = (params: FetchCityNameProps) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(citiesActions.setCities([]));
      const cities = (await CityApi.getCitiesByName(params)).data;
      dispatch(citiesActions.setCities(cities));
    } catch (err) {
      handleErrorResponse(err);
    }
  };
};

export const clearCities = () => {
  return (dispatch: Dispatch) => {
    dispatch(citiesActions.setCities([]));
  };
};
