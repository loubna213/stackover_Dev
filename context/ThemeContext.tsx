"use client"

import React, { useState, useEffect, useContext, createContext } from 'react';

interface ThemeContextType {
    mode: string;
    setMode: ( mode: string ) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [mode, setMode] = useState('');

    const handleThemeChange = () => {
        if(
          localStorage.theme === 'dark' || 
          (!("theme" in localStorage) && 
          window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
          setMode('dark');
          document.documentElement.classList.add('dark');
        } else {
          setMode('light');
          document.documentElement.classList.remove('dark');
        }
      }
    
    console.log('Mode: ', mode);


    useEffect(() => {
        handleThemeChange();
    }, [mode])


    return (
        <ThemeContext.Provider value={{ mode, setMode }}>
            { children }
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if(context === undefined) {
        throw new Error('ThemeContext was used outside of ThemeProvided')
    }

    return context;
}
