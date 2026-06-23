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

// Esse "bridge" liga o modo claro/escuro (que vive no ThemeContext) ao
// styled-components. Como todas as telas estilizam usando `theme.LightMode`,
// aqui a gente faz esse `LightMode` apontar para o conjunto de cores que está
// ativo no momento (claro ou escuro). Resultado: o dark mode passa a valer em
// todas as telas que usam o tema, sem precisar mexer em cada uma.
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
    <NavigationContainer>
      <LoginProvider>
        <TeamProvider>
          <DarkModeProvider>
            <StyledThemeBridge>
              <Routes />
            </StyledThemeBridge>
          </DarkModeProvider>
        </TeamProvider>
      </LoginProvider>
    </NavigationContainer>
  );
}
