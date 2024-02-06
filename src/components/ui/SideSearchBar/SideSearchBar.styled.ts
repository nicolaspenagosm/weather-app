import styled from "styled-components";
import { Styles } from "../../../App.styled";

interface SearchBarProps extends Styles{
  $animDuration: number;
  $sideBarWidth: number;
}

export const StyledSideSearchBar = styled.aside<SearchBarProps>`
  position: absolute;
  background-color: ${({ theme }) => theme.dark.primary400};
  height: 100dvh;
  width: 100%;
  z-index: 20;
  top: 0;
  left: 0;
  transform: translateX(-${({ $sideBarWidth }) => $sideBarWidth}px);
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  ${({ $styles }) => $styles};
  @media (min-width: ${({ theme }) => theme.mobileBreakpoint}px) {
    height: 100%;
    width: 100%;
  }

  &.side-bar-enter-active {
    transform: translateX(0);
  }

  &.side-bar-enter-done {
    transform: translateX(0);
  }

  &.side-bar-exit-done {
    transform: translateX(-${({ $sideBarWidth }) => $sideBarWidth}px);
  }

  &.side-bar-exit {
    transition: all ${({ $animDuration }) => $animDuration}ms ease-in;
  }
  &.side-bar-exit-active {
    transform: translateX(-${({ $sideBarWidth }) => $sideBarWidth}px);
  }
  &.side-bar-enter {
    transition: all ${({ $animDuration }) => $animDuration}ms;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.dark.accent500};
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  position: absolute;
  right: 1rem;
  top: 1rem;
  &:hover{
    color: ${({ theme }) => theme.dark.accent600};
  } 
`;