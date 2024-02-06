import Loader from "../../ui/Loader/Loader";
import { StyledDashboard } from "./Dashboard.styled";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import TodaysHighlights from "../../weather/TodaysHightlights/TodayHightlight";
import Forecast from "../../weather/Forecast/Forecast";

const Dashboard: React.FC = () => {
  const currentWeather = useSelector(
    (state: RootState) => state.weather.currentWeather
  );

  return (
    <StyledDashboard>
      {currentWeather ? (
        <>
          <Forecast />
          <TodaysHighlights />
        </>
      ) : (
        <Loader variant="cloud" loaderSize={175} />
      )}
    </StyledDashboard>
  );
};

export default Dashboard;
