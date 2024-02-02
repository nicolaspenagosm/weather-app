import { getIconUrl } from "../../../../utils/image";
import { fromKelvinToCelsius } from "../../../../utils/temp";
import Card from "../../../ui/Card/Card";
import { StyledForecastDay } from "./Forecast.styled";
import { DIV } from "./Forecast.styled";
export interface ForecastDayProps {
  day: string;
  icon: string;
  value: { min: string; max: string };
}

const ForecastDay: React.FC<ForecastDayProps> = ({ day, icon, value }) => {
  return (
    <Card $styles={{ padding: "1rem" }}>
      <StyledForecastDay>
        <p>{day}</p>
        <img src={getIconUrl(icon, "2")} draggable={false} />
        <DIV>
          <i>{fromKelvinToCelsius(+value.max)}°C</i>
          <i>{fromKelvinToCelsius(+value.min)}°C</i>
        </DIV>
      </StyledForecastDay>
    </Card>
  );
};

export default ForecastDay;
