import { useEffect, useRef, useState } from "react";
import { StyledSideSearchBar } from "./SideSearchBar.styled";
import { CSSTransition } from "react-transition-group";
import { Button } from "./SideSearchBar.styled";
import Input from "../../ui/Input/Input";
import useDebounceHttpInput from "../../../hooks/use-debounce-http-input";
import { fetchCities } from "../../../store/cities-slice/cities-actions";
import { isValidCity } from "../../../utils/input";
import CitiesList from "../../cities/CitiesList/CitiesList";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store";
import { citiesActions } from "../../../store/cities-slice/cities-slice";
import { clearCities } from "../../../store/cities-slice/cities-actions";
import { P } from "../../layout/Aside/Aside.styled";
const ANIM_DURATION = 500;

const SideSearchBar: React.FC<{
  closeSideBar: () => void;
  showSideBar: boolean;
}> = ({ closeSideBar, showSideBar }) => {
  const sideBarRef = useRef<HTMLScriptElement>(null);
  const [opacity, setOpacity] = useState(0);
  const cities = useSelector((state: RootState) => state.cities.cities);

  const dispatch = useAppDispatch();
  const {
    valueChangeHandler,
    inputBlurHandler,
    isFetching,
    hasError,
    reset,
    value,
  } = useDebounceHttpInput(fetchCities, isValidCity, 500);

  //

  // Avoid rendering bug
  useEffect(() => {
    setOpacity(1);
  }, []);

  useEffect(() => {
    // This is safe since we are not manipulating the DOM
    // that React is rendering, we are manipulating its
    // parent <body></body>. No conflicts will be caused.
    if (showSideBar) {
      window.scrollTo(0, 0);
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [showSideBar]);

  const closeAndClearSideBar = () => {
    reset();
    dispatch(clearCities());
    closeSideBar();
  };

  return (
    <CSSTransition
      in={showSideBar}
      timeout={ANIM_DURATION}
      classNames={"side-bar"}
    >
      <StyledSideSearchBar
        className="side-bar"
        $animDuration={ANIM_DURATION}
        ref={sideBarRef}
        $sideBarWidth={1000}
        $styles={{ opacity: opacity }}
      >
        <Button
          onClick={() => {
            closeAndClearSideBar();
          }}
        >
          x
        </Button>
        <Input
          $styles={{ width: "80%", marginTop: "4rem" }}
          onChange={valueChangeHandler}
          onBlur={inputBlurHandler}
          hasError={hasError}
          isFetching={isFetching}
          value={value}
        />
        <CitiesList cities={cities} closeAndClearSideBar={closeAndClearSideBar} />
      </StyledSideSearchBar>
    </CSSTransition>
  );
};

export default SideSearchBar;
