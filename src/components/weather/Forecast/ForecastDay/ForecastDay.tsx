import { useSelector } from "react-redux";
import { getIconUrl } from "../../../../utils/image";
import { convertTemp, fromKelvinToCelsius } from "../../../../utils/temp";
import Card from "../../../ui/Card/Card";
import { StyledForecastDay } from "./Forecast.styled";
import { DIV } from "./Forecast.styled";
import "animate.css";
import { RootState } from "../../../../store";

export interface ForecastDayProps {
  day: string;
  icon: string;
  value: { min: string; max: string };
}

const ForecastDay: React.FC<ForecastDayProps> = ({ day, icon, value }) => {
  const tempUnit = useSelector((state: RootState) => state.weather.tempUnit);
  return (
    <Card
      $styles={{ padding: "1rem" }}
      className="animate__animated  animate__headShake"
    >
      <StyledForecastDay>
        <p>{day}</p>
        <img src={getIconUrl(icon, "2")} draggable={false} />
        <DIV>
          <i>{convertTemp(+value.max, tempUnit) + tempUnit}</i>
          <i>{convertTemp(+value.min, tempUnit) + tempUnit}</i>
        </DIV>
      </StyledForecastDay>
    </Card>
  );
};

export default ForecastDay;
