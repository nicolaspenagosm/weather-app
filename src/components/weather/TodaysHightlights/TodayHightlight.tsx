import "animate.css";
import {
  HighlightsGrid,
  StyledTodaysHighlights,
} from "./TodaysHightlight.style";
import Highlight from "./Hightlight/Highlight";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { round } from "../../../utils/number";
import { fromMetersToMiles } from "../../../utils/distance";
import { useEffect, useState } from "react";
const ANIM_DELAY = 50;
const TodaysHighlights: React.FC = () => {
  const currentWeather = useSelector(
    (state: RootState) => state.weather.currentWeather
  );

  const [animClasses, setAnimClasses] = useState("");

  useEffect(() => {
    setAnimClasses("");
    setTimeout(() => {
      
      setAnimClasses("animate__animated  animate__headShake");
    }, ANIM_DELAY);
  }, [currentWeather]);

  return (
    <StyledTodaysHighlights className={animClasses}>
      <h2>Today’s Hightlights </h2>

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
