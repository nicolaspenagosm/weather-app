import { StyledInput, InputContainer, P } from "./Input.styled";
import { Styles } from "../../../App.styled";
import mangnifier from "../../../assets/magnifier.svg";
import Loader from "../Loader/Loader";


interface InputProps extends Styles {
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
  hasError: boolean;
  isFetching: boolean;
}

const LOADER_SIZE = 19;
const Input: React.FC<InputProps> = ({
  $styles,
  onChange,
  onBlur,
  hasError,
  isFetching,
}) => {
  return (
    <InputContainer $styles={$styles} $hasError={hasError}>
      <img
        src={mangnifier}
        style={{
          height: "20px",
          width: "20px",
          marginRight: "0.25rem",
          marginLeft: "0.5rem",
        }}
      />
      <StyledInput
        placeholder="Search location"
        onChange={onChange}
        onBlur={onBlur}
        $loaderSize={LOADER_SIZE}
        
      />
      {isFetching&&<Loader loaderSize={LOADER_SIZE} variant="plain"/>}
      {hasError && <P>Please provide a valid input</P>}
    </InputContainer>
  );
};

export default Input;
