import styled from "styled-components";

export const StyledTodaysHighlights = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h2{
    font-weight: 700;
  }
`;
export const HighlightsGrid = styled.section`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto auto;
  row-gap: 1.5rem;
  column-gap: 1.5rem;
  @media (min-width: ${({ theme }) => theme.mobileBreakpoint}px) {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
  }
`;
