import { createGlobalStyle } from "styled-components";
import PixelOperator from "../assets/fonts/PixelOperator.ttf";
import PixelOperatorBold from "../assets/fonts/PixelOperator-Bold.ttf";

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "PixelOperator";
    src: url(${PixelOperator}) format("truetype");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "PixelOperator";
    src: url(${PixelOperatorBold}) format("truetype");
    font-weight: 700;
    font-style: normal;
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.primary};

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
    background: linear-gradient(
      ${({ theme }) => theme.colors.black},
      ${({ theme }) => theme.colors.background}
  );
    color: ${({ theme }) => theme.colors.softWhite};
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.black};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.greyDark};
    border-radius: 999px;
    border: 2px solid ${({ theme }) => theme.colors.background};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.grey};
  }
`;


export default GlobalStyle;