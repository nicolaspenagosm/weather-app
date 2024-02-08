import { Styles } from "../../../../App.styled";
import { City } from "../../../../store/cities-slice/cities-slice";
import { StyledCityItem } from "./CityItem.styled";
import rightArrow from "../../../../assets/right-arrow.svg";
import { useAppDispatch } from "../../../../store";
import {
  fetchWeatherAction,
  fetch5DaysForecast,
} from "../../../../store/weather-slice/weather-actions";

const CityItem: React.FC<{ city: City; closeAndClearSideBar: () => void }> = ({
  city,
  closeAndClearSideBar,
}) => {
  const dispatch = useAppDispatch();

  const onCitySelected = async () => {
    await Promise.all([
      dispatch(fetchWeatherAction({ lat: city.latitude, lon: city.longitude })),
      dispatch(fetch5DaysForecast({ lat: city.latitude, lon: city.longitude })),
    ]);

    closeAndClearSideBar();
  };
  return (
    <StyledCityItem
      $styles={{ width: "80%" }}
      // Utilization of onMouseDown instead of onClick to handle
      // the interference event bug with onBlur event of the Input
      onMouseDown={() => {
        onCitySelected();
      }}
    >
      <p>{city.name}</p>
      <img src={rightArrow} />
      <p>
        <span>| </span> {city.country}
      </p>
    </StyledCityItem>
  );
};

export default CityItem;
