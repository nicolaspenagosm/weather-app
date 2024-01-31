import { StyledAside, P, BackgroundImage } from "./Aside.style";
import { Interpolation } from "styled-components";

import cloud1Left from "../../../assets/cloud-1-left.svg";
import cloud2Left from "../../../assets/cloud-2-left.svg";
import cloud1Right from "../../../assets/cloud-1-right.svg";
import cloud2Right from "../../../assets/cloud-2-right.svg";

import Measure from "../../ui/Measure/Measure";
import Button from "../../ui/Button/Button";
import IconButton from "../../ui/Button/IconButton";

const Aside: React.FC = () => {
  const searchBtnStyles: Interpolation<React.CSSProperties> = {
    position: "absolute",
    top: "2rem",
    left: "2rem",
  };

  const locationBtnStyles: Interpolation<React.CSSProperties> = {
    position: "absolute",
    top: "2rem",
    right: "2rem",
  };

  return (
    <StyledAside>
      <BackgroundImage
        src={cloud1Left}
        $top="5rem"
        $left="0"
        alt="Decorative cloud in the background"
      />
      <BackgroundImage
        src={cloud2Left}
        $top="15rem"
        $left="0"
        alt="Decorative cloud in the background"
      />
      <BackgroundImage
        src={cloud1Right}
        $top="12rem"
        $right="0"
        alt="Decorative cloud in the background"
      />
      <BackgroundImage
        src={cloud2Right}
        $top="3rem"
        $right="0"
        alt="Decorative cloud in the background"
      />
      <img
        src="https://openweathermap.org/img/wn/10d@4x.png"
        draggable={false}
        alt="Todays weather icon"
      />
      <Measure $variant={"large"} value="15" unit="°C" />
      <P>Shower</P>
      <Button $styles={searchBtnStyles}>Search for places</Button>
      <IconButton variant="location" $styles={locationBtnStyles}></IconButton>
    </StyledAside>
  );
};

export default Aside;
