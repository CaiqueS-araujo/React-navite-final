import LoginProvider from "./src/Context/LoginProvider";
import { TeamProvider } from "./src/Context/TeamContext";
import { Routes } from "./src/Routes/routes";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/Themes/Theme";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <NavigationContainer>
      <LoginProvider>
        <TeamProvider>
          <ThemeProvider theme={theme}>
            <StatusBar style="dark" />
            <Routes />
          </ThemeProvider>
        </TeamProvider>
      </LoginProvider>
    </NavigationContainer>
  );
}
