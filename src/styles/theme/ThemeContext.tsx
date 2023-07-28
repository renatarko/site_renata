import { createContext, useState } from "react";

type Theme = 'light' | 'dark';


interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType)

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {

  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext