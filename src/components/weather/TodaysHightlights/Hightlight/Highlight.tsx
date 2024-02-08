import { MeasureProps } from "../../../ui/Measure/Measure";
import Measure from "../../../ui/Measure";
import { H2 } from "./Hightlight.styled";
import { round } from "../../../../utils/number";
import Compass from "./Compass";
import ProgressBar from "./ProgressBar";
import Card from "../../../ui/Card";

export const HIGHLIGHT_VARIANTS = {
  wind: "wind",
  humidity: "humidity",
  visibility: "visibility",
  pressure: "pressure",
};

export interface HighlightProps {
  title: string;
  measure: MeasureProps;
  detail?: number;
  variant: "wind" | "humidity" | "visibility" | "pressure";
}
const Highlight: React.FC<HighlightProps> = ({
  title,
  measure,
  detail,
  variant,
}) => {
  return (
    <Card $desktopStyles={{ width: "12rem" }}>
      <H2>{title}</H2>
      <Measure
        $variant={measure.$variant}
        value={round(+measure.value).toString()}
        unit={measure.unit}
        $styles={{ margin: "0.5rem auto 0.5rem" }}
      />
      {variant === HIGHLIGHT_VARIANTS.wind && <Compass deg={detail!} />}
      {variant === HIGHLIGHT_VARIANTS.humidity && (
        <ProgressBar progress={detail!} />
      )}
    </Card>
  );
};

export default Highlight;
