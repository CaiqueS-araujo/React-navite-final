import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { theme } from '..//Themes/Theme';

type ThemeContextData = {
    isDarkMode: boolean;
    toggleTheme: () => void;

    activeColors: typeof theme.LightMode | typeof theme.DarkMode;
};

export const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const loadSavedTheme = async () => {
            try {
                const savedTheme = await AsyncStorage.getItem('@pokedex_theme');
                if (savedTheme === 'dark') {
                    setIsDarkMode(true);
                }
            } catch (error) {
                console.log("Erro ao carregar o tema:", error);
            }
        };
        loadSavedTheme();
    }, []);

    const toggleTheme = async () => {
        try {
            const newMode = !isDarkMode;
            setIsDarkMode(newMode);
            await AsyncStorage.setItem('@pokedex_theme', newMode ? 'dark' : 'light');
        } catch (error) {
            console.log("Erro ao salvar o tema:", error);
        }
    };

    const activeColors = isDarkMode ? theme.DarkMode : theme.LightMode;

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme, activeColors }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);