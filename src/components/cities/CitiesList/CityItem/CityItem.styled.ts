import styled from "styled-components";
import { Styles } from "../../../../App.styled";

export const StyledCityItem = styled.li<Styles>`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 2.5rem;
  border: solid 1px;
  border-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  ${({ $styles }) => $styles};
  img {
    opacity: 0;
    height: 0.8rem;
    width: 0.8rem;
    position: absolute;
    right: 0.5rem;
    top: 13.5px;
 
  }
  &:hover {
    border: solid 1px;
    border-color: ${({ theme }) => theme.dark.accent500};
    img {
      opacity: 1;
    }
  }
  p {
    font-size: 0.8rem;
    &:first-child {
      margin-left: 1rem;
    }
    &:last-child {
      margin-right: 2rem;
    }
    span {
      color: ${({ theme }) => theme.dark.contrast500};
    }
  }
`;
