import styled from "styled-components";
import { LoaderProps } from "./Loader";

export const StyledLoader = styled.span<LoaderProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: 3px solid #fff;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  &:after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    background: #EB6E4B;
    width: ${({ size }) => size/3}px;
    height: ${({ size }) => size/3}px;
    transform: translate(-50%, 50%);
    border-radius: 50%;
  }
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
