import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import dark from '../styles/dark';
import light from '../styles/light'
import { useContext } from 'react';
import AppProvider from '../context/AppProvider';
import AppContext from '../context/AppContext';

function MyApp({ Component, pageProps }) {
  // const [theme, setTheme] = useState(dark);
  // const toggleTheme = () => {
  //   setTheme(theme.title === "light" ? dark : light);
  // };
  const context = useContext(AppContext);
  return (
  <ThemeProvider theme={context.theme}>
    <AppProvider>
      <Component {...pageProps} />
      {/* <Home /> */}
      <GlobalStyle />
    </AppProvider>
  </ThemeProvider>
  );
}

export default MyApp
