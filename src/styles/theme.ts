import { DefaultTheme } from "styled-components";

type TFontSyle = {
  fontSize: number;
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: { [key in keyof typeof themeColors]: string };
    fontStyles: { [key in keyof typeof themeFontStyle]: TFontSyle };
  }
}

const themeColors = {
  background: "#8BE9E9",
  borderColor: "#1C7070",
  componentBackground: "#44B7B7",
  paragraphColor: "#ffffff",
};

const themeFontStyle = {
  pokemonInfo: {
    fontSize: 30,
  },
};

const theme: DefaultTheme = {
  colors: themeColors,
  fontStyles: themeFontStyle,
};
export default theme;
