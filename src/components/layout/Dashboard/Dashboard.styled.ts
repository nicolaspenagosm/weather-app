import styled from "styled-components";

export const StyledDashboard = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.primary500};
  min-height: 36rem;
  @media (min-width: ${({ theme }) => theme.mobileBreakpoint}px) {
    width: 75%;
    min-height: auto;
  }
`;
