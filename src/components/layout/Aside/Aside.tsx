import "animate.css";
import cloud1Left from "../../../assets/cloud-1-left.svg";
import cloud2Left from "../../../assets/cloud-2-left.svg";
import cloud1Right from "../../../assets/cloud-1-right.svg";
import cloud2Right from "../../../assets/cloud-2-right.svg";
import locationPin from "../../../assets/location-pin.svg";
import cloud1LeftLight from "../../../assets/cloud-1-left-light.svg";
import cloud2LeftLight from "../../../assets/cloud-2-left-light.svg";
import cloud1RightLight from "../../../assets/cloud-1-right-light.svg";
import cloud2RightLight from "../../../assets/cloud-2-right-light.svg";

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

const ANIM_CLASS = "animate__animated  animate__bounceIn";
const Aside: React.FC = () => {
  const dispatch = useAppDispatch();
  const isDark = useSelector((state:RootState)=>state.ui.isDark);

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
  const [animClass, setAnimClass] = useState("");

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
    setAnimClass(ANIM_CLASS);
    setTimeout(() => {
      setImageOpacity("1");
    }, 150);
    setTimeout(() => {
      setAnimClass("");
    }, 1000);
  }, [currentWeather]);

  return (
    <StyledAside $styles={asideStyles}>
      <BackgroundImage
        src={isDark ? cloud1Left : cloud1LeftLight}
        $top="5rem"
        $left="0"
        alt="Decorative cloud in the background"
      />
      <BackgroundImage
        src={isDark ? cloud2Left : cloud2LeftLight}
        $top="15rem"
        $left="0"
        alt="Decorative cloud in the background"
      />
      <BackgroundImage
        src={isDark ? cloud1Right : cloud1RightLight}
        $top="12rem"
        $right="0"
        alt="Decorative cloud in the background"
      />
      <BackgroundImage
        src={isDark ? cloud2Right : cloud2RightLight}
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
            title="Load my current location"
          />
          <Footer className={animClass}>
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
