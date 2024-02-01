import { Dispatch } from "@reduxjs/toolkit"
import { OpenWeatherAPI } from "../../services/open-weather-api"
import { Position } from "../../services/geolocation-api";

export const fetchWeatherAction = (params:Position) => {
    return async (dispatch:Dispatch)=>{
        const data = await OpenWeatherAPI.getCurrentWeather(params);
        console.log(data);
    }
}