import styled from "styled-components";

export const StyledDashboard = styled.main`
  display: flex;
  background-color: ${({ theme }) => theme.dark.primary500};
  @media (min-width: ${({ theme }) => theme.mobileBreakpoint}px) {
    width: 75%;
  }
`;
