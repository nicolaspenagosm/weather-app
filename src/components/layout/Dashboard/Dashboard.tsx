import Loader from "../../ui/Loader/Loader";
import { StyledDashboard } from "./Dashboard.style";

const Dashboard: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  return (
    <StyledDashboard>
      {isLoading ? <Loader variant="cloud" size={175} /> : <></>}
    </StyledDashboard>
  );
};

export default Dashboard;
