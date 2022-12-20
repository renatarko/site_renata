import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      purple: string;
      purpleLigth: string;
    };
    fontFamily: {
      poppins: string;
    };
  }
}
