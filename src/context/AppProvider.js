import {  useState  } from "react";
import AppContext from './AppContext';
import dark from '../styles/dark';
import light from '../styles/light'


const AppProvider = ({children}) => {
  const [theme, setTheme] = useState(dark);
  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };
  const context = {
    toggleTheme,
    theme,
  }
  return (
    <AppContext.Provider value={ context }>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;