import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import usePersistedState from '../../utils/usePersistedState';

import AppProvider from '../context/AppProvider';

import dark from '../styles/dark';
import light from '../styles/light'

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = usePersistedState('theme',dark);
  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} toggleTheme={toggleTheme}/>
        <GlobalStyle />
      </ThemeProvider>
    </AppProvider>
  );
}

export default MyApp
