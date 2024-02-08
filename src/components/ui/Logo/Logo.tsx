import 'animate.css';
import { StyledLogo } from "./Logo.styled";
import logo from "../../../assets/logo.svg";

const Logo: React.FC = () => {
  return (
    <StyledLogo className="animate__animated  animate__bounceIn">
      <img src={logo} draggable={false} />
    </StyledLogo>
  );
};

export default Logo;