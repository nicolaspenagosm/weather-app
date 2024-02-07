import Loader from "../../ui/Loader/Loader";
import { StyledDashboard } from "./Dashboard.styled";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import TodaysHighlights from "../../weather/TodaysHightlights/TodayHightlight";
import Forecast from "../../weather/Forecast/Forecast";
import Logo from "../../ui/Logo/Logo";

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
