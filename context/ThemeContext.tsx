import React, { useState, useEffect, useContext, createContext } from 'react';

interface ThemeContextType {
    mode: string;
    setMode: ( mode: string ) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [mode, setMode] = useState('');

    const handelTheme = () => {
        if(mode === 'dark') {
            setMode('light');
            document.documentElement.classList.add('light');
        } else if(mode === 'light') {
            setMode('dark');
            document.documentElement.classList.add('dark');
        }
    }

    useEffect(() => {
        handelTheme();
    }, [ mode ])

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