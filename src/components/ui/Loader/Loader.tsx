import { StyledLoaderCloud, StyledLoaderSpinner } from "./Loader.style";

export type LoaderProps = {
  size: number;
  variant?: "spinner" | "cloud";
};

const Loader: React.FC<LoaderProps> = ({ size, variant }) => {
  if (variant === "cloud")
    return <StyledLoaderCloud size={size}></StyledLoaderCloud>;

  return <StyledLoaderSpinner size={size}></StyledLoaderSpinner>;
};

export default Loader;
