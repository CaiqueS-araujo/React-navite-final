import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { LoginContext } from '../Context/LoginProvider';

import Quiz from '../Pages/Quiz';
import Login from '../Pages/Login';
import { Home } from '../Pages/Home';

export type RootStackParamList = {
  login: undefined;
  home: undefined;
  quiz: undefined;
  team: undefined;
  pokedex: undefined;
  games: undefined;
};

export type AppNavigation = NativeStackNavigationProp<RootStackParamList>;

export const Stack = createNativeStackNavigator<RootStackParamList>();

export function Routes() {
  const context = useContext(LoginContext);

  if (!context) {
    throw new Error('LoginContext deve ser usado com o LoginProvider');
  }

  const { loading, isLogged } = context;

  if (loading) {
    return null;
  }

  return (
    <Stack.Navigator>
      {isLogged ? (
        <>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="quiz" component={Quiz} />
        </>
      ) : (
        <Stack.Screen name="login" component={Login} />
      )}
    </Stack.Navigator>
  );
}