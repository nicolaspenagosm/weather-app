import { useEffect, useRef } from "react";
import { StyledSideSearchBar } from "./SideSearchBar.styled";
import { CSSTransition } from "react-transition-group";
import { Button } from "./SideSearchBar.styled";

const ANIM_DURATION = 500;

const SideSearchBar: React.FC<{
  closeSideBar: () => void;
  showSideBar: boolean;
}> = ({ closeSideBar,  showSideBar }) => {
  const sideBarRef = useRef<HTMLScriptElement>(null);

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

  const sideBarWidth = sideBarRef.current
    ? sideBarRef.current.offsetWidth + 1
    : 0;
  console.log(sideBarWidth);
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
        $sideBarWidth={sideBarWidth}
      >
        <Button
          onClick={() => {
            closeSideBar();
          }}
        >
          x
        </Button>
      </StyledSideSearchBar>
    </CSSTransition>
  );
};

export default SideSearchBar;
