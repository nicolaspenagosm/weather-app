import styled from "styled-components";

export const StyledLogo = styled.div`
  bottom: 1.5rem;
  right: 1.5rem;
  padding: 0.5rem 1.25rem 0.5rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.contrast500};
  img {
    width: 169px;
    height: 35px;
  }

  @media (min-width: ${({ theme }) => theme.mobileBreakpoint}px) {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.tabletBreakpoint}px) {
    display: block;
    position: absolute;
    img {
      width: auto;
      height: auto;
    }
  }
`;
