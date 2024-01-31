import { StyledMeasure, Variant } from "./Measure.style";

export interface MeasureProps extends Variant {
  value: string;
  unit: string;
}

const Measure: React.FC<MeasureProps> = ({ $variant, value, unit }) => {
  return (
    <StyledMeasure $variant={$variant}>
      <h1>{value}</h1>
      <p>{unit}</p>
    </StyledMeasure>
  );
};

export default Measure;
