import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { MaterialUISwitch, StyledDarkModeToggle } from "./StyledDarkModeToggle";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export const DarkModeToggle: React.FC<{
  toggleTheme: () => void;
}> = ({ toggleTheme }) => {
  const isDark = useSelector((state: RootState) => state.ui.isDark);
  return (
    <StyledDarkModeToggle>
      <FormGroup
        onClick={() => {
          toggleTheme();
        }}
      >
        <FormControlLabel
          control={<MaterialUISwitch sx={{ m: 1 }} checked={isDark} />}
          label=""
        />
      </FormGroup>
    </StyledDarkModeToggle>
  );
};

export default DarkModeToggle;
