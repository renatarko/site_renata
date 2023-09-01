import { createContext, useContext, useState } from "react";
import { DefaultTheme } from "styled-components";
import dark from "./dark";
import light from "./light";

type Theme = DefaultTheme
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>({} as undefined)

const DarkThemeProvider = ({children}) => {
  const [theme, setTheme] = useState<Theme>(dark);
console.log(theme)
  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light)
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext)
  return context
}


export default DarkThemeProvider