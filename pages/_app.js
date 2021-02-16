import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import theme from '../src/theme';
import GlobalStyle from '../src/theme/GlobalStyle';

import ThemeContext from '../src/contexts/theme';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  const [dark, setDarkTheme] = useState(false);
  function handleChangeTheme() {
    setDarkTheme(!dark);
  }

  return (
    <>
      <Head>
        <title>Insta Bootcamp Jamstack</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>
      <ThemeContext.Provider value={{ dark, handleChangeTheme }}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}
