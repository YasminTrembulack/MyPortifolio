import { createGlobalStyle } from "styled-components";
import { colors, fonts } from "./theme";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${fonts.primary};

  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  html {
    height: 100%;
  }
  
  main {
    flex: 1;
    width: 100%;
    background: ${colors.black};
    color: ${colors.softWhite};
  }
`;
