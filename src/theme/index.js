import typographyVariants from './typographyVariants';

export const colorsType = {
  light: {
    background: {
      light: {
        color: '#F2F2F2',
      },
      main: {
        color: '#FFFFFF',
      },
    },
    borders: {
      main: {
        color: '#F1F1F1',
      },
    },
    primary: {
      main: {
        color: '#D7385E',
        contrastText: '#fff',
      },
    },
    secondary: {
      main: {
        color: '#FB7B6B',
        contrastText: '#fff',
      },
    },
    tertiary: {
      main: {
        color: '#070C0E',
        contrastText: '#fff',
      },
      light: {
        color: '#88989E',
        contrastText: '#fff',
      },
      textTitle: {
        color: '#070C0E',
      },
      textSubTitle: {
        color: '#88989E',
      },
    },
    svg: {
      color: '#070C0E',
      background: '#070C0E',
    },
  },
  dark: {
    background: {
      light: {
        color: '#1f1f1f',
      },
      main: {
        color: '#030506',
      },
    },
    borders: {
      main: {
        color: '#181F22',
      },
    },
    primary: {
      main: {
        color: '#D7385E',
        contrastText: '#fff',
      },
    },
    secondary: {
      main: {
        color: '#FFA59A',
        contrastText: '#fff',
      },
    },
    tertiary: {
      main: {
        color: '#FFA59A',
        contrastText: '#070C0E',
      },
      light: {
        color: '#FFFFFF',
        contrastText: '#070C0E',
      },
      textTitle: {
        color: '#FFFFFF',
      },
      textSubTitle: {
        color: '#D4D4D4',
      },
    },
    svg: {
      color: '#FFFFFF',
      background: '#FFFFFF',
    },
  },
};

export const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
};

export default {
  // colors,
  typographyVariants,
  breakpoints,
  borderRadius: '12px',
  transition: '200ms ease-in-out',
  fontFamily: '\'Rubik\', sans-serif',
};
