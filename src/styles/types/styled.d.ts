import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string;
      background: string;
      softBlack: string;

      white: string;
      softWhite: string;

      greyDark: string;
      grey: string;
      greyLight: string;

      bluePrimary: string;
      blueHover: string;
      blueSoft: string;
      blueMuted: string;

      yellowAccent: string;
      yellowHover: string;
      yellowSoft: string;
      yellowMuted: string;

      gradientPrimary: string;
      gradientSoft: string;
    };

    fonts: {
      primary: string;
      secundary: string;
      terciary: string;
      decorative: string;
    };
  }
}
