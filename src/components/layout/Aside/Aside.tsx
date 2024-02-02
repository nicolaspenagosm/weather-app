import { StyledAside, P, BackgroundImage } from "./Aside.style";
import { Interpolation } from "styled-components";

import cloud1Left from "../../../assets/cloud-1-left.svg";
import cloud2Left from "../../../assets/cloud-2-left.svg";
import cloud1Right from "../../../assets/cloud-1-right.svg";
import cloud2Right from "../../../assets/cloud-2-right.svg";
import locationPin from "../../../assets/location-pin.svg";

import Measure from "../../ui/Measure/Measure";
import Button from "../../ui/Button/Button";
import IconButton from "../../ui/Button/IconButton";
import Loader from "../../ui/Loader/Loader";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/index";
import { fromKelvinToCelsius } from "../../../utils/temp";
import { Footer } from "./Aside.style";
import { getTodayDate } from "../../../utils/date";
import { Img } from "./Aside.style";
import { useEffect, useState } from "react";
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

const asidePassingStyles: Interpolation<React.CSSProperties> = {
  padding: "1rem 1rem 6rem 1rem",
};

const Aside: React.FC = () => {
  const currentWeather = useSelector(
    (state: RootState) => state.weather.currentWeather
  );
  const [imgOpacity, setImageOpacity] = useState("0");

  const asideStyles = currentWeather ? "" : asidePassingStyles;
  const now = new Date();

  useEffect(() => {
    setTimeout(() => {
      setImageOpacity("1");
    }, 150);
  }, [currentWeather]);

  return (
    <StyledAside $styles={asideStyles}>
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

      {currentWeather ? (
        <>
          <Img
            src={`https://openweathermap.org/img/wn/${
              currentWeather!.icon
            }@4x.png`}
            alt="Todays weather icon"
            draggable={false}
            $styles={{ opacity: imgOpacity }}
          />

          <Measure
            $variant={"large"}
            value={`${fromKelvinToCelsius(+currentWeather!.temperature)}`}
            unit="°C"
          />
          <P>{currentWeather.main}</P>
          <Button $styles={searchBtnStyles}>Search for places</Button>
          <IconButton variant="location" $styles={locationBtnStyles} />
          <Footer>
            <p>Today &#8226; {getTodayDate(now)}</p>
            <div>
              <img src={locationPin} />
              <p>{currentWeather.place}</p>
            </div>
          </Footer>
        </>
      ) : (
        <Loader size={80} variant="spinner" />
      )}
    </StyledAside>
  );
};

export default Aside;
