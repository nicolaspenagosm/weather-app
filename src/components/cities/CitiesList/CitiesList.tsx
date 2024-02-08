import { v4 as uuidv4 } from "uuid";
import { StyledCitiesList } from "./CitiesList.styled";
import CityItem from "./CityItem/CityItem";
import { City } from "../../../store/cities-slice/cities-slice";

const CitiesList: React.FC<{
  cities: City[];
  closeAndClearSideBar: () => void;
}> = ({ cities, closeAndClearSideBar }) => {
  return (
    <StyledCitiesList>
      {cities.map((city) => (
        <CityItem
          key={uuidv4()}
          city={city}
          closeAndClearSideBar={closeAndClearSideBar}
        />
      ))}
    </StyledCitiesList>
  );
};

export default CitiesList;
