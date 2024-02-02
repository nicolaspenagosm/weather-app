import { useEffect, useState } from "react";
import {
  ProgressBarContainer,
  OuterProgressBar,
  InnerProgressBar,
} from "./ProgressBar.styled";
import { I } from "../Hightlight.styled";

const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => {
  const [animProgress, setAnimProgress] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setAnimProgress(progress);
    }, 250);
  }, []);
  return (
    <ProgressBarContainer>
      <OuterProgressBar>
        <InnerProgressBar progress={animProgress} />
        <div>
          <i>0</i>
          <i>50</i>
          <i>100</i>
        </div>
        <I $styles={{ top: "-0.85rem", right:0, fontSize:"0.75rem" }}>%</I>
      </OuterProgressBar>
    </ProgressBarContainer>
  );
};

export default ProgressBar;
