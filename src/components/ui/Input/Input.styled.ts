import styled from "styled-components";
import { Styles } from "../../../App.styled";
import { LoaderSize } from "../Loader/Loader.styled";
export interface HasError {
  $hasError: boolean;
}

export const StyledInput = styled.input<LoaderSize>`
  background-color: transparent;
  border: none;
  font-size: 0.8rem;
  width: calc(100% - ${({ $loaderSize }) => $loaderSize * 3.25}px);
  color: ${({ theme }) => theme.dark.accent500};
`;

export const InputContainer = styled.div<Styles & HasError>`
  display: flex;
  flex-direction: row;
  border: solid 1px;
  border-color: ${({ theme, $hasError }) =>
    $hasError ? theme.dark.contrast500 : theme.dark.accent500};
  height: 2.5rem;
  border-radius: 0;
  align-items: center;
  ${({ $styles }) => $styles};
`;

export const P = styled.p`
  position: absolute;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.dark.contrast500};
  margin-top: 4rem;
`;