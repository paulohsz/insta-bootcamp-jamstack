import typographyVariants from './typographyVariants';

export const colorsType = {
  light: {
    mode: 'light',
    background: {
      main: {
        color: '#F2F2F2',
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
    },
    svg: {
      color: '#070C0E',
    },
  },
  dark: {
    mode: 'dark',
    background: {
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
        color: '#FFFFFF',
        contrastText: '#030506',
      },
      light: {
        color: '#D4D4D4',
        contrastText: '#030506',
      },
    },
    svg: {
      color: '#FFFFFF',
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
