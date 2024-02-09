import { Interpolation, createGlobalStyle } from "styled-components";

export interface Styles {
  $styles?: Interpolation<React.CSSProperties>;
  $desktopStyles?: Interpolation<React.CSSProperties>;
}

export const darkTheme = {
  mobileBreakpoint: 845,
  tabletBreakpoint: 1150,
  dark: {
    primary400: "#1E213A",
    primary500: "#100E1D",
    accentBtn500: "#E7E7EB",
    accent500: "#E7E7EB",
    accent600: "#A09FB1",
    accent700: "#6E707A",
    accent800: "#61636D",
    contrast500: "#EB6E4B",
    contrast900: "#642A19",
  },
};

export const lightTheme = {
  mobileBreakpoint: 845,
  tabletBreakpoint: 1150,
  dark: {
    primary400: "#FFF",
    primary500: "#FAF5D5",
    accentBtn500: "#E7E7EB",
    accent500: "#100E1D",
    accent600: "#70738C",
    accent700: "#6E707A",
    accent800: "#61636D",
    contrast500: "#EB6E4B",
    contrast900: "#642A19",
  },
};

export const GlobalStyle = createGlobalStyle`
  // Reset CSS

  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: 'Raleway', sans-serif;
    font-size: 14px;
    color: ${({ theme }) => theme.dark.accent500};
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  .no-scroll{
    overflow-y: hidden;
  }

  *:focus {
    outline: none;
}
`;
