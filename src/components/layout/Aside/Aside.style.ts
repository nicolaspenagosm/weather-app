import styled from "styled-components";

export interface Position {
  $top?: string;
  $left?: string;
  $right?: string;
  $bottom?: string;
}

export const StyledAside = styled.aside`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem 6rem 1rem;
  background-color: ${({ theme }) => theme.dark.primary400};
  @media (min-width: ${({ theme }) => theme.mobileBreakpoint}px) {
    width: 25%;
  }
`;

export const P = styled.p`
  margin-top: 4rem;
  color: ${({ theme }) => theme.dark.accent600};
`;

export const BackgroundImage = styled.img.attrs(({ src, alt }) => ({
  src,
  alt,
  draggable:false
}))<Position>`
  position: absolute;
  top: ${({ $top }) => ($top ? $top : "auto")};
  left: ${({ $left }) => ($left ? $left : "auto")};
  right: ${({ $right }) => ($right ? $right : "auto")};
  bottom: ${({ $bottom }) => ($bottom ? $bottom : "auto")};
`;
