import styled from "styled-components";
import { Styles } from "../../../App.style";

export const StyledTodaysHighlights = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  h2 {
    font-weight: 700;
  }
  @media (min-width: ${({ theme }) => theme.mobileBreakpoint}px) {
    align-items: center;
  }
`;
export const HighlightsGrid = styled.section<Styles>`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto auto;
  row-gap: 1.5rem;
  column-gap: 1.5rem;

  @media (min-width: ${({ theme }) => theme.mobileBreakpoint}px) {
    width: fit-content;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
  }
`;
