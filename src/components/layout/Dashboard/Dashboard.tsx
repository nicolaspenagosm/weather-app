import Loader from "../../ui/Loader/Loader";
import { StyledDashboard } from "./Dashboard.style";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import TodaysHighlights from "../../weather/TodaysHightlights/TodayHightlight";

const Dashboard: React.FC = () => {
  const currentWeather = useSelector(
    (state: RootState) => state.weather.currentWeather
  );

  return (
    <StyledDashboard>
      {currentWeather ? (
        <TodaysHighlights />
      ) : (
        <Loader variant="cloud" size={175} />
      )}
    </StyledDashboard>
  );
};

export default Dashboard;
