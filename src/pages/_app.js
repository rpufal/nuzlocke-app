import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import { useContext, useState } from 'react';
import usePersistedState from '../../utils/usePersistedState';

import AppProvider from '../context/AppProvider';
import AppContext from '../context/AppContext';

import dark from '../styles/dark';
import light from '../styles/light'

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = usePersistedState('theme',dark);
  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };
  // const context = useContext(AppContext);
  // console.log('contexto', context);
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
      <Component {...pageProps} toggleTheme={toggleTheme}/>
      {/* <Home toggleTheme={toggleTheme}/> */}
      <GlobalStyle />
      </ThemeProvider>
    </AppProvider>
  );
}

export default MyApp
