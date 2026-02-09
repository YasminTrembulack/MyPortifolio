import { createGlobalStyle } from "styled-components";
import { colors, fonts } from "./theme";

export const GlobalStyle = createGlobalStyle`
  #root {
    margin: 0;
    display: flex;
    justify-content: center;
  }

  :root {
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;

    background: ${colors.background};
    color: ${colors.softWhite};
    font-family: ${fonts.primary};
    -webkit-font-smoothing: antialiased;
  }

  main {
    width: 100vw;
  }


  @media (prefers-color-scheme: light) {
    :root {
      color: ${colors.background};
      background-color: ${colors.softWhite};
    }
  }
`;
