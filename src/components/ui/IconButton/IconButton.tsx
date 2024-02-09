import { Styles } from "../../../App.styled";
import { StyledIconButton } from "../Button/Button.styled";

export interface IconButtonProps extends Styles {
  variant: "location" | "celsius" | "fahrenheit";
  onClick: () => void;
  title:string
}

const IconButton: React.FC<IconButtonProps> = ({
  variant,
  $styles,
  onClick,
  title = ""
}) => {
  const iconsMap = {
    location: <i className="fa fa-location-arrow"></i>,
    celsius: <i>°C</i>,
    fahrenheit: <i>°F</i>,
  };

  return (
    <StyledIconButton $styles={$styles} onClick={onClick} title={title}>
      {iconsMap[variant]}
    </StyledIconButton>
  );
};

export default IconButton;
