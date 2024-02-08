import IconButton from "../../ui/IconButton";
import { StyledToggleUnit } from "./ToggleUnit.styled";
import { RootState, useAppDispatch } from "../../../store";
import {
  WeatherState,
  weatherActions,
} from "../../../store/weather-slice/weather-slice";
import { useSelector } from "react-redux";

const ToggleUnit: React.FC = () => {
  const tempUnit = useSelector((state: RootState) => state.weather.tempUnit);
  
  const dispatch = useAppDispatch();
  const setTempUnit = (tempUnit: WeatherState["tempUnit"]) => {
    dispatch(weatherActions.setTempUnit(tempUnit));
  };

  return (
    <StyledToggleUnit>
      <IconButton
        variant="celsius"
        onClick={() => {
          setTempUnit("°C");
        }}
        $styles={{
          opacity: tempUnit === "°C" ? 0.5 : 1,
        }}
      />
      <IconButton
        variant="fahrenheit"
        onClick={() => {
          setTempUnit("°F");
        }}
        $styles={{
          opacity: tempUnit === "°F" ? 0.5 : 1,
        }}
      />
    </StyledToggleUnit>
  );
};

export default ToggleUnit;