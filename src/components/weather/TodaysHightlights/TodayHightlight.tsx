import {
  HighlightsGrid,
  StyledTodaysHighlights,
} from "./TodaysHightlight.style";
import Highlight from "../Hightlight/Highlight";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { round } from "../../../utils/number";
import { fromMetersToMiles } from "../../../utils/distance";
const TodaysHighlights: React.FC = () => {
  const currentWeather = useSelector(
    (state: RootState) => state.weather.currentWeather
  );
  return (
    <StyledTodaysHighlights>
      <h2>Today's Highlights</h2>
      <HighlightsGrid>
        <Highlight
          title="Wind status"
          measure={{
            $variant: "medium",
            value: round(+currentWeather!.windSpeed).toString(),
            unit: "mph",
          }}
          detail={+currentWeather!.winDeg}
          variant="wind"
        />
        <Highlight
          title="Humidity"
          measure={{
            $variant: "medium",
            value: round(+currentWeather!.humidity).toString(),
            unit: "%",
          }}
          detail={+currentWeather!.humidity}
          variant="humidity"
        />

        <Highlight
          title="Visibility"
          measure={{
            $variant: "medium",
            value: round(
              fromMetersToMiles(+currentWeather!.visibility)
            ).toString(),
            unit: "mi",
          }}
          variant="visibility"
        />
        <Highlight
          title="Air Pressure"
          measure={{
            $variant: "medium",
            value: round(+currentWeather!.pressure).toString(),
            unit: "mb",
          }}
          variant="visibility"
        />
      </HighlightsGrid>
    </StyledTodaysHighlights>
  );
};

export default TodaysHighlights;
