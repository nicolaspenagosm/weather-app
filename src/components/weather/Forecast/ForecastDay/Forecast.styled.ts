import styled from "styled-components";

export const StyledForecastDay = styled.article`
  p {
    text-align: center;
  }

  img {
    width: 100px;
    height: 100px;
  }

  @media (min-width: ${({ theme }) => theme.mobileBreakpoint}px) {
    img {
      width: 80px;
      height: 80px;
    }
  }
`;

export const DIV = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  i:last-child {
    color: ${({ theme }) => theme.dark.accent600};
  }
`;
