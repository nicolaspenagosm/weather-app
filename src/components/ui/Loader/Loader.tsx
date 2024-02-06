import { StyledLoaderCloud, StyledLoaderSpinner, StyledPlainSpinner } from "./Loader.styled";

export type LoaderProps = {
  loaderSize: number;
  variant?: "spinner" | "cloud" | "plain";
};

const Loader: React.FC<LoaderProps> = ({ loaderSize: size, variant }) => {
  if (variant === "cloud")
    return <StyledLoaderCloud $loaderSize={size}></StyledLoaderCloud>;

    if(variant === "plain")
    return <StyledPlainSpinner $loaderSize={size}></StyledPlainSpinner>

  return <StyledLoaderSpinner $loaderSize={size}></StyledLoaderSpinner>;
};

export default Loader;
