import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store";
import { StyledForecast } from "./Forecast.styled";
import ForecastDay from "./ForecastDay/ForecastDay";
import { isTomorrow, parseDate } from "../../../utils/date";
const Forecast: React.FC = () => {
  const fiveDaysForecast = useSelector(
    (state: RootState) => state.weather.forecast
  );

  return (
    <StyledForecast>
      {fiveDaysForecast &&
        fiveDaysForecast.map((forecast) => (
          <ForecastDay
            value={{
              max: forecast!.temp,
              min: forecast.minTemp!,
            }}
            day={
              isTomorrow(new Date(forecast.date))
                ? "Tomorrow"
                : parseDate(new Date(forecast.dateTxt!))
            }
            icon={forecast.icon}
            key={forecast.id}
          />
        ))}
    </StyledForecast>
  );
};

export default Forecast;
