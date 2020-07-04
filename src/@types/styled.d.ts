import 'styled-components';

declare module 'react-load-image';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      desktop: string;
      tablet: string;
      mobile: string;

      textPrimaty: string;
      textSecondary: string;
      textImageCard: string;

      backgroudPrimay: string;
      backgroudSecondary: string;
      border: string;
    };
  }
}
