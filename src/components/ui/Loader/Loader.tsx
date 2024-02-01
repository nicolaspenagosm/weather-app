import { StyledLoader } from "./Loader.style";

export type LoaderProps = {
  size: number;
};

const Loader: React.FC<LoaderProps> = ({ size }) => {
  return <StyledLoader size={size}>
    
  </StyledLoader>;
};

export default Loader;
