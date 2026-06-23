import React, { useContext } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LoginContext } from '../Context/LoginProvider';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Teams from "../Pages/Teams";
import Battles from "../Pages/Battles";



import {Quiz} from '../Pages/Quiz';
import Login from '../Pages/Login';
import { Home } from '../Pages/Home';
import { Pokedex } from '../Pages/Pokedex';
import { Games } from '../Pages/Games';

export type RootStackParamList = {
  login: undefined;
  home: undefined;
  quiz: undefined;
  team: undefined;
  battles: undefined;
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
          <Stack.Screen name="pokedex" component={Pokedex} />
          <Stack.Screen name="games" component={Games} />
          <Stack.Screen name="team" component={Teams} />
          <Stack.Screen name="battles" component={Battles} />

        </>
      ) : (
        <Stack.Screen name="login" component={Login} />
      )}
    </Stack.Navigator>
  );
}

