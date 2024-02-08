import styled from "styled-components";

export const StyledToggleUnit = styled.div`
  display: flex;
  gap: 0.5rem;
  @media (min-width: ${({ theme }) => theme.mobileBreakpoint}px) {
    position: absolute;
    right: 2rem;
    top: 2rem;
  }
`;