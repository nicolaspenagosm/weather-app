import React, { useEffect, useState } from "react";
import { DirArrow, StyledCompass } from "./Compass.styled";
import arrowVector from "../../../../../assets/arrow.svg";
import { I } from "../Hightlight.styled";

const Compass: React.FC<{ deg: number }> = ({ deg }) => {
  const [animStyles, setAnimStyles] = useState({ transform: "rotate(0deg);" });

  useEffect(() => {
    setTimeout(() => {
      setAnimStyles({
        transform: `rotate(${deg}deg);`,
      });
    }, 250);
  }, [deg]);

  return (
    <StyledCompass>
      <DirArrow
        src={arrowVector}
        $styles={animStyles}
        draggable={false}
        alt="Wind direction compass"
      />
      <I $styles={{ top: "-4px" }}>N</I>
      <I $styles={{ bottom: "-13px" }}>S</I>
      <I $styles={{ right: "-11px", top: "20.5px" }}>E</I>
      <I $styles={{ right: "35px", top: "20.5px" }}>W</I>
    </StyledCompass>
  );
};

export default Compass;
