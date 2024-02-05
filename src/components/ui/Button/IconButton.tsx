import { Styles } from "../../../App.styled";
import { StyledIconButton } from "./Button.styled";

export interface IconButtonProps extends Styles {
  variant: "location" | "celsius" | "fahrenheit";
}

const IconButton: React.FC<IconButtonProps> = ({ variant, $styles }) => {
  const iconsMap = {
    location: <i className="fa fa-location-arrow"></i>,
    celsius: <i>°C</i>,
    fahrenheit: <i>°F</i>,
  };

  return <StyledIconButton $styles={$styles}>{iconsMap[variant]}</StyledIconButton>;
};

export default IconButton;
