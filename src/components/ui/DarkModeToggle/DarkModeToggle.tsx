import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { MaterialUISwitch, StyledDarkModeToggle } from "./StyledDarkModeToggle";

export const DarkModeToggle: React.FC<{ toggleTheme: () => void }> = ({
  toggleTheme,
}) => {
  return (
    <StyledDarkModeToggle>
      <FormGroup
        onClick={() => {
          toggleTheme();
        }}
      >
        <FormControlLabel
          control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
          label=""
        />
      </FormGroup>
    </StyledDarkModeToggle>
  );
};

export default DarkModeToggle;