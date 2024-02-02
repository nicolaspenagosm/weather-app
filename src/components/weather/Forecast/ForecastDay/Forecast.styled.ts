import styled from "styled-components";

export const StyledForecastDay = styled.article`
  p {
    text-align: center;
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
