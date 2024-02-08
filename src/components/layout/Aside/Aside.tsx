import cloud1Left from "../../../assets/cloud-1-left.svg";
import cloud2Left from "../../../assets/cloud-2-left.svg";
import cloud1Right from "../../../assets/cloud-1-right.svg";
import cloud2Right from "../../../assets/cloud-2-right.svg";
import locationPin from "../../../assets/location-pin.svg";
import {
  StyledAside,
  P,
  BackgroundImage,
  asidePassingStyles,
  searchBtnStyles,
  locationBtnStyles,
} from "./Aside.styled";
import Measure from "../../ui/Measure";
import Button from "../../ui/Button";
import IconButton from "../../ui/IconButton";
import Loader from "../../ui/Loader";
import { Footer } from "./Aside.styled";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store/index";
import { convertTemp } from "../../../utils/temp";
import { parseDate } from "../../../utils/date";
import { Img } from "./Aside.styled";
import { useEffect, useState } from "react";
import { getIconUrl } from "../../../utils/image";
import SideSearchBar from "../../weather/SideSearchBar";
import { getLocation } from "../../../services/geolocation-api";

import {
  fetch5DaysForecast,
  fetchWeatherAction,
} from "../../../store/weather-slice/weather-actions";

const Aside: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const onInit = async () => {
      const currentLocation = await getLocation();
      if (currentLocation) {
        dispatch(fetchWeatherAction(currentLocation));
        dispatch(fetch5DaysForecast(currentLocation));
      }
    };

    onInit();
  }, []);

  const currentWeather = useSelector(
    (state: RootState) => state.weather.currentWeather
  );
  const tempUnit = useSelector((state: RootState) => state.weather.tempUnit);
  const [imgOpacity, setImageOpacity] = useState("0");
  const [showSideBar, setShowSideBar] = useState(false);

  const closeSideBar = () => {
    setShowSideBar(false);
  };

  const openSideBar = () => {
    setShowSideBar(true);
  };

  const loadCurrentLocation = async () => {
    const currentLocation = await getLocation();
    if (currentLocation) {
      dispatch(fetchWeatherAction(currentLocation));
      dispatch(fetch5DaysForecast(currentLocation));
    }
  };
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
            src={getIconUrl(currentWeather!.icon, "4")}
            alt="Todays weather icon"
            draggable={false}
            $styles={{ opacity: imgOpacity }}
          />

          <Measure
            $variant={"large"}
            value={`${convertTemp(+currentWeather!.temp, tempUnit)}`}
            unit={tempUnit}
          />
          <P>{currentWeather.main}</P>
          <Button
            $styles={searchBtnStyles}
            onClick={() => {
              openSideBar();
            }}
          >
            Search for places
          </Button>
          <IconButton
            variant="location"
            $styles={locationBtnStyles}
            onClick={() => {
              loadCurrentLocation();
            }}
          />
          <Footer>
            <p>Today &#8226; {parseDate(now)}</p>
            <div>
              <img src={locationPin} />
              <p>{currentWeather.place}</p>
            </div>
          </Footer>

          <SideSearchBar
            showSideBar={showSideBar}
            closeSideBar={closeSideBar}
          />
        </>
      ) : (
        <Loader loaderSize={80} variant="spinner" />
      )}
    </StyledAside>
  );
};

export default Aside;
