import React, { createContext, useEffect, useReducer } from 'react';
import { useColorScheme } from 'react-native';
import { darkTheme, lightTheme, themeReducer, ThemeState } from './themeReducer';

interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {
    const colorScheme = useColorScheme();
    const [theme, dispatch] = useReducer(themeReducer, (colorScheme === 'dark' ? darkTheme : lightTheme));// TODO: Leer el theme global

    // Si funciona en react-native 0.70.3
    useEffect(() => {
        if (colorScheme === 'light') setLightTheme();
        else setDarkTheme();
    }, [colorScheme]);


    const setDarkTheme = () => {
        dispatch({ type: 'set_dark_theme' });
        console.log(setDarkTheme);

    }
    const setLightTheme = () => {
        dispatch({ type: 'set_ligth_theme' });
        console.log(setLightTheme);

    }
    return (
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    )
}