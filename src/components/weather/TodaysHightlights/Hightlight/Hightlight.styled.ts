import styled from "styled-components";
import { Styles } from "../../../../App.styled";

export const H2 = styled.h2`
  text-align: center;
`;

export const I = styled.i<Styles>`
  position: absolute;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.6rem;
  ${({ $styles }) => $styles};
`;