import { StyledAside, P, BackgroundImage } from "./Aside.style";
import { Interpolation } from "styled-components";

import cloud1Left from "../../../assets/cloud-1-left.svg";
import cloud2Left from "../../../assets/cloud-2-left.svg";
import cloud1Right from "../../../assets/cloud-1-right.svg";
import cloud2Right from "../../../assets/cloud-2-right.svg";

import Measure from "../../ui/Measure/Measure";
import Button from "../../ui/Button/Button";
import IconButton from "../../ui/Button/IconButton";

import useHttp from "../../../hooks/use-http";
import { useAppDispatch } from "../../../store";
import { useEffect } from "react";
import { fetchWeatherAction } from "../../../store/weather-slice/weather-actions";
import { getLocation } from "../../../services/geolocation-api";
import Loader from "../../ui/Loader/Loader";

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

  const { isLoading, error, sendRequest } = useHttp({
    loading: true,
    error: null,
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    const onInit = async () => {
      const currentLocation = await getLocation();
      if (currentLocation)
        sendRequest(() => dispatch(fetchWeatherAction(currentLocation)));
    };

    onInit();
  }, []);

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
      {!isLoading ? (
        <Measure $variant={"large"} value="15" unit="°C" />
      ) : (
        <Loader size={80}></Loader>
      )}

      <P>Shower</P>
      <Button $styles={searchBtnStyles}>Search for places</Button>
      <IconButton variant="location" $styles={locationBtnStyles}></IconButton>
    </StyledAside>
  );
};

export default Aside;
