import styled from "styled-components";
import { MeasureProps } from "./Measure";

export interface Variant {
  $variant: "small" | "medium" | "large";
}

export const StyledMeasure = styled.div<Variant>`
  display: flex;
  flex-direction: row;
  align-items: center;
  h1 {
    font-size: 5rem;
    font-weight: 700;
  }
  p {
    font-size: 2.5rem;
    font-weight: 500;
    margin-top: 2rem;
    color: ${({ theme }) => theme.dark.accent600};
  }
`;
export const P = styled.p`
  margin-top: 2rem;
`;
