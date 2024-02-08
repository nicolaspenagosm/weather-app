import { StyledDashboard } from "./Dashboard.styled";
import TodaysHighlights from "../../weather/TodaysHightlights";
import Forecast from "../../weather/Forecast";
import Logo from "../../ui/Logo";
import Loader from "../../ui/Loader";
import  ToggleUnit  from "../../weather/ToggleUnit";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const Dashboard: React.FC = () => {
  const currentWeather = useSelector(
    (state: RootState) => state.weather.currentWeather
  );

  const isFetchingWeather = useSelector(
    (state: RootState) => state.weather.isFetching
  );

  return (
    <StyledDashboard>
      {currentWeather ? (
        <>
          {isFetchingWeather && <Loader variant="progress" />}
          <ToggleUnit />
          <Forecast />
          <TodaysHighlights />
          <Logo />
        </>
      ) : (
        <Loader variant="cloud" loaderSize={175} />
      )}
    </StyledDashboard>
  );
};

export default Dashboard;
