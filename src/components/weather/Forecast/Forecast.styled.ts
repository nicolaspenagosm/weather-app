import styled from "styled-components";

export const StyledForecast = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  row-gap: 1rem;
  column-gap: 1rem;
  @media (min-width: ${({ theme }) => theme.mobileBreakpoint}px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;
