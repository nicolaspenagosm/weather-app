import { useEffect, useRef, useState } from "react";
import { StyledSideSearchBar } from "./SideSearchBar.styled";
import { CSSTransition } from "react-transition-group";
import { Button } from "./SideSearchBar.styled";
import Input from "../Input/Input";
import useDebounceHttpInput from "../../../hooks/use-debounce-http-input";
import { fetchCities } from "../../../store/cities-slice/cities-actions";
import { isValidCity } from "../../../utils/input";

const ANIM_DURATION = 500;

const SideSearchBar: React.FC<{
  closeSideBar: () => void;
  showSideBar: boolean;
}> = ({ closeSideBar, showSideBar }) => {
  const sideBarRef = useRef<HTMLScriptElement>(null);
  const [opacity, setOpacity] = useState(0);

  const {
    valueChangeHandler,
    inputBlurHandler,
    isFetching,
    hasError,
  } = useDebounceHttpInput(fetchCities, isValidCity);

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
            closeSideBar();
          }}
        >
          x
        </Button>
        <Input
          $styles={{ width: "80%", marginTop: "4rem" }}
          onChange={valueChangeHandler}
          onBlur={inputBlurHandler}
          hasError={hasError}
          isFetching = {isFetching}
        />
      </StyledSideSearchBar>
    </CSSTransition>
  );
};

export default SideSearchBar;
