import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components/native";
import { StatusBar } from "expo-status-bar";

import LoginProvider from "./src/Context/LoginProvider";
import { TeamProvider } from "./src/Context/TeamContext";
import {
  ThemeProvider as DarkModeProvider,
  useTheme,
} from "./src/Context/ThemeContext";
import { Routes } from "./src/Routes/routes";
import { theme } from "./src/Themes/Theme";

function StyledThemeBridge({ children }: { children: React.ReactNode }) {
  const { activeColors, isDarkMode } = useTheme();

  const styledTheme = { ...theme, LightMode: activeColors };

  return (
    <ThemeProvider theme={styledTheme}>
      <StatusBar style={isDarkMode ? "light" : "dark"} />
      {children}
    </ThemeProvider>
  );
}

export default function App() {
  return (
   <DarkModeProvider>
      <StyledThemeBridge>
        <NavigationContainer>
          <LoginProvider>
            <TeamProvider>
              <Routes />
            </TeamProvider>
          </LoginProvider>
        </NavigationContainer>
      </StyledThemeBridge>
    </DarkModeProvider>
  );
}
