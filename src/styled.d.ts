import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      darkBg: string;
      primary: string;
      secondary: string;
      baseLight: string;
      baseDark: string;
      secondaryOpa: string;
    };
    fontFamily: {
      poppins: string;
    };
    fontSize: {
      title: string;
      subTitle: string;
      description: string;
      titleSection: string;
      icon: string;
    };
    borderRadius: {
      baseRadius: string;
    };
    spacing: {
      gap: string;
    };
  }
}
