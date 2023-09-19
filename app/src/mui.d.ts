import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    colors?: {
      main?: string;
      danger?: string;
      text?: {
        default: string;
        danger: string;
      };
      background?: {
        default: string;
        paper: string;
      };
    };
  }

  interface ThemeOptions {
    colors?: {
      main?: string;
      danger?: string;
      text?: {
        default: string;
        danger: string;
      };
      background?: {
        default: string;
        paper: string;
      };
    };
  }
}
