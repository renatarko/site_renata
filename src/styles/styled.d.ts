import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string,
      secondary: string,
      third:string,
  
      background: string,
      bgAbout:string,
      text:string,
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
