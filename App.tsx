import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/Pages/Home';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/Themes/Theme';
import LoginProvider from './src/Context/LoginProvider';
import {Routes} from './src/Routes/routes';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
    <LoginProvider>
      <ThemeProvider theme={theme}>
        <StatusBar style="dark" />
        <Routes />
      </ThemeProvider>
    </LoginProvider>
    </NavigationContainer>
  );
}
