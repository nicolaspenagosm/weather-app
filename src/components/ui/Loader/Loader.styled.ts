import styled from "styled-components";

export interface LoaderSize {
  $loaderSize: number;
};

export const StyledLoaderSpinner = styled.span<LoaderSize>`
  width: ${({ $loaderSize: size }) => size}px;
  height: ${({ $loaderSize: size }) => size}px;
  border: 3px solid ${({ theme }) => theme.dark.accent500};
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
    background: ${({ theme }) => theme.dark.contrast500};
    width: ${({ $loaderSize: size }) => size / 3}px;
    height: ${({ $loaderSize: size }) => size / 3}px;
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

export const StyledLoaderCloud = styled.span<LoaderSize>`
  width: ${({ $loaderSize: size }) => size}px;
  height: ${({ $loaderSize: size }) => size / 2.18}px;
  display: block;
  margin: auto;
  background-image: radial-gradient(
      circle 25px at 25px 25px,
      ${({ theme }) => theme.dark.accent500} 100%,
      transparent 0
    ),
    radial-gradient(
      circle 50px at 50px 50px,
      ${({ theme }) => theme.dark.accent500} 100%,
      transparent 0
    ),
    radial-gradient(
      circle 25px at 25px 25px,
      ${({ theme }) => theme.dark.accent500} 100%,
      transparent 0
    ),
    linear-gradient(${({ theme }) => theme.dark.accent500} 50px, transparent 0);
  background-size: 50px 50px, 100px 76px, 50px 50px, 120px 40px;
  background-position: 0px 30px, 37px 0px, 122px 30px, 25px 40px;
  background-repeat: no-repeat;
  position: relative;
  box-sizing: border-box;
  &:before {
    content: "";
    left: 60px;
    bottom: 18px;
    position: absolute;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.dark.contrast500};
    background-image: radial-gradient(
        circle 8px at 18px 18px,
        ${({ theme }) => theme.dark.accent500} 100%,
        transparent 0
      ),
      radial-gradient(
        circle 4px at 18px 0px,
        ${({ theme }) => theme.dark.accent500} 100%,
        transparent 0
      ),
      radial-gradient(
        circle 4px at 0px 18px,
        ${({ theme }) => theme.dark.accent500} 100%,
        transparent 0
      ),
      radial-gradient(
        circle 4px at 36px 18px,
        ${({ theme }) => theme.dark.accent500} 100%,
        transparent 0
      ),
      radial-gradient(
        circle 4px at 18px 36px,
        ${({ theme }) => theme.dark.accent500} 100%,
        transparent 0
      ),
      radial-gradient(
        circle 4px at 30px 5px,
        ${({ theme }) => theme.dark.accent500} 100%,
        transparent 0
      ),
      radial-gradient(
        circle 4px at 30px 5px,
        ${({ theme }) => theme.dark.accent500} 100%,
        transparent 0
      ),
      radial-gradient(
        circle 4px at 30px 30px,
        ${({ theme }) => theme.dark.accent500} 100%,
        transparent 0
      ),
      radial-gradient(
        circle 4px at 5px 30px,
        ${({ theme }) => theme.dark.accent500} 100%,
        transparent 0
      ),
      radial-gradient(
        circle 4px at 5px 5px,
        ${({ theme }) => theme.dark.accent500} 100%,
        transparent 0
      );
    background-repeat: no-repeat;
    box-sizing: border-box;
    animation: rotationBack 3s linear infinite;
  }
  &:after {
    content: "";
    left: 94px;
    bottom: 15px;
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.dark.contrast500};
    background-image: radial-gradient(
        circle 5px at 12px 12px,
        ${({ theme }) => theme.dark.accent500} 100%,
        transparent 0
      ),
      radial-gradient(
        circle 2.5px at 12px 0px,
        ${({ theme }) => theme.dark.accent500} 100%,
        transparent 0
      ),
      radial-gradient(
        circle 2.5px at 0px 12px,
        ${({ theme }) => theme.dark.accent500} 100%,
        transparent 0
      ),
      radial-gradient(
        circle 2.5px at 24px 12px,
        ${({ theme }) => theme.dark.accent500} 100%,
        transparent 0
      ),
      radial-gradient(
        circle 2.5px at 12px 24px,
        ${({ theme }) => theme.dark.accent500} 100%,
        transparent 0
      ),
      radial-gradient(
        circle 2.5px at 20px 3px,
        ${({ theme }) => theme.dark.accent500} 100%,
        transparent 0
      ),
      radial-gradient(
        circle 2.5px at 20px 3px,
        ${({ theme }) => theme.dark.accent500} 100%,
        transparent 0
      ),
      radial-gradient(
        circle 2.5px at 20px 20px,
        ${({ theme }) => theme.dark.accent500} 100%,
        transparent 0
      ),
      radial-gradient(
        circle 2.5px at 3px 20px,
        ${({ theme }) => theme.dark.accent500} 100%,
        transparent 0
      ),
      radial-gradient(
        circle 2.5px at 3px 3px,
        ${({ theme }) => theme.dark.accent500} 100%,
        transparent 0
      );
    background-repeat: no-repeat;
    box-sizing: border-box;
    animation: rotationBack 4s linear infinite reverse;
  }
  @keyframes rotationBack {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`;

export const StyledPlainSpinner = styled.span<LoaderSize>`
  width: ${({ $loaderSize: size }) => size}px;
  height: ${({ $loaderSize: size }) => size}px;
  border: ${({ $loaderSize: size }) => size*(5/48)}px solid #fff;
  border-bottom-color: #ff3d00;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
