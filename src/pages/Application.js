import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import { useContext } from 'react';
import usePersistedState from '../../utils/usePersistedState';
import dark from '../styles/dark';
import light from '../styles/light'
import AppContext from '../context/AppContext';




export default function Application({ Component, pageProps }) {
  const [theme, setTheme] = usePersistedState('theme',dark);
  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };
  const context = useContext(AppContext);
  return (
      <ThemeProvider theme={context.theme}>
        <Component {...pageProps} toggleTheme={toggleTheme}/>
        <GlobalStyle />
      </ThemeProvider>
  );
}

