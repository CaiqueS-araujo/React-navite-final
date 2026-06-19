import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/Pages/Home';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/Themes/Theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Home /> 
    </ThemeProvider>
  );
}
