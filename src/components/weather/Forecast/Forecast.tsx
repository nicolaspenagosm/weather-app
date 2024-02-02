import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store";
import { StyledForecast } from "./Forecast.styled";
import ForecastDay from "./ForecastDay/ForecastDay";
import { parseDate } from "../../../utils/date";
const Forecast: React.FC = () => {
  const fiveDaysForecast = useSelector(
    (state: RootState) => state.weather.forecast
  );
  console.log(fiveDaysForecast);
  return (
    <StyledForecast>
      {fiveDaysForecast &&
        fiveDaysForecast.map((forecast) => (
          <ForecastDay
            value={{
              min: forecast!.temp,
              max: forecast.minTemp!,
            }}
            day={parseDate(new Date(forecast.dateTxt!))}
            icon={forecast.icon}
            key={forecast.id}
          />
        ))}
      {/* <ForecastDay
        value={{ min: "14C", max: "24C" }}
        day="Tomorrow"
        icon="10d"
      />
      <ForecastDay
        value={{ min: "14C", max: "24C" }}
        day="Tomorrow"
        icon="10d"
      />
      <ForecastDay
        value={{ min: "14C", max: "24C" }}
        day="Tomorrow"
        icon="10d"
      />
      <ForecastDay
        value={{ min: "14C", max: "24C" }}
        day="Tomorrow"
        icon="10d"
      />
      <ForecastDay
        value={{ min: "14C", max: "24C" }}
        day="Tomorrow"
        icon="10d"
      /> */}
    </StyledForecast>
  );
};

export default Forecast;
