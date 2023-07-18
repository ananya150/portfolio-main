'use client'
import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'

interface ContextProps {
  darkTheme: boolean,
  setDarkTheme: Dispatch<SetStateAction<boolean>> 
}

const ThemeContext = createContext<ContextProps> ({
  darkTheme: false,
  setDarkTheme: () => false,
})

export const ThemeContextProvider = ({children}: any) => {
  const [darkTheme , setDarkTheme] = useState(true);
  return (
    <ThemeContext.Provider value={{darkTheme , setDarkTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeProvider = () => useContext(ThemeContext); 