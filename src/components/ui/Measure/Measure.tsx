import { Styles } from "../../../App.styled";
import { StyledMeasure, Variant } from "./Measure.styled";

export interface MeasureProps extends Variant {
  value: string;
  unit: string;
}

const Measure: React.FC<MeasureProps & Styles> = ({
  $variant,
  value,
  unit,
  $styles,
}) => {
  return (
    <StyledMeasure $variant={$variant} $styles={$styles}>
      <h1>{value}</h1>
      <p>{unit}</p>
    </StyledMeasure>
  );
};

export default Measure;
