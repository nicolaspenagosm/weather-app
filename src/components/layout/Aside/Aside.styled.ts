import styled, { Interpolation } from "styled-components";
import { Styles } from "../../../App.styled";

export interface Position {
  $top?: string;
  $left?: string;
  $right?: string;
  $bottom?: string;
}

export const StyledAside = styled.aside<Styles>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.primary400};
  min-height: 36rem;
  @media (min-width: ${({ theme }) => theme.mobileBreakpoint}px) {
    width: 25%;
    min-height: auto;
  }
`;

export const P = styled.p`
  margin-top: 3rem;
  color: ${({ theme }) => theme.accent600};
`;

export const BackgroundImage = styled.img.attrs(({ src, alt }) => ({
  src,
  alt,
  draggable: false,
}))<Position>`
  position: absolute;
  top: ${({ $top }) => ($top ? $top : "auto")};
  left: ${({ $left }) => ($left ? $left : "auto")};
  right: ${({ $right }) => ($right ? $right : "auto")};
  bottom: ${({ $bottom }) => ($bottom ? $bottom : "auto")};
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 2rem;
  width: 100%;
  text-align: center;
  gap: 0.5rem;
  p{
    font-size: 0.75rem;
    color: ${({ theme }) => theme.accent600};
  }
  div{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img{
    margin-right: 0.25rem;
  }
`;

export const Img = styled.img<Styles>`
 z-index: 10;
 height: 200px;
 transition: all 750ms ease-in-out;
 margin-top: -4rem;
 ${({ $styles }) => $styles};

`

export const searchBtnStyles: Interpolation<React.CSSProperties> = {
  position: "absolute",
  top: "2rem",
  left: "2rem",
};

export const locationBtnStyles: Interpolation<React.CSSProperties> = {
  position: "absolute",
  top: "2rem",
  right: "2rem",
};

export const asidePassingStyles: Interpolation<React.CSSProperties> = {
  padding: "1rem 1rem 6rem 1rem",
};
