import styled from "styled-components";
import { Styles } from "../../../App.styled";

export interface Variant {
  $variant: "small" | "medium" | "large";
}

export const StyledMeasure = styled.div<Variant & Styles>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${({ $styles }) => $styles};
  h1 {
    font-size: ${({ $variant }) => {
      if ($variant === "medium") return "2.5rem";
      return "5rem";
    }};
    font-weight: 700;
  }
  p {
    font-size: ${({ $variant }) => {
      if ($variant === "medium") return "1.5rem";

      return "2.5rem";
    }};
    font-weight: 500;
    margin-top: ${({ $variant }) => {
      if ($variant === "medium") return "1rem";
      return "2rem";
    }};
    color: ${({ theme }) => theme.dark.accent700};
  }
`;
export const P = styled.p`
  margin-top: 2rem;
`;
