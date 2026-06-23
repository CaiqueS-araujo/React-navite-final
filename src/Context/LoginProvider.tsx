import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {
  children: React.ReactNode;
};

export type LoginContextType = {
  username: string;
  password: string;
  loading: boolean;
  isLogged: boolean;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  setLoading: (loading: boolean) => void;
  setIsLogged: (isLogged: boolean) => void;
};

export const LoginContext = createContext<LoginContextType | undefined>(undefined);

export default function LoginProvider({ children }: Props) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [isLogged, setIsLogged] = useState<boolean>(false);

  const checkToken = async (): Promise<void> => {
    try {
      const token = await AsyncStorage.getItem("token");

      setIsLogged(!!token);
    } catch (e) {
      console.log("Erro ao verificar token:", e);
      setIsLogged(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <LoginContext.Provider
      value={{
        username,
        password,
        loading,
        isLogged,
        setUsername,
        setPassword,
        setLoading,
        setIsLogged,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}