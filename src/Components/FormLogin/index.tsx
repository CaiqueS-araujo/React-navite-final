import React, { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import FormLabel from '../FormLabel';
import { FormInput } from '../FormInput';
import Error from '../ErrorMessage';
import PressablePattern from '../Pressable';
import { useNavigation } from '@react-navigation/native';
import { AppNavigation } from '../../Routes/routes';
import { SubmtitLogin } from '../../Data/LoginApi';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginContext } from '../../Context/LoginProvider';

export type LoginFormData = {
  email: string,
  password: string,
}

export function FormLogin() {

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>();

  const nav = useNavigation<AppNavigation>();

  const context = useContext(LoginContext);

  const onSubmit = async (data: LoginFormData) => {
    try {
      const result = await SubmtitLogin({
        username: data.email,
        password: data.password,
      });

      await AsyncStorage.setItem('token', result.token);

      if (context) {
        context.setUsername(data.email);
        context.setPassword(data.password);
        context.setLoading(false);
        context.setIsLogged(true);
      }

      nav.navigate('home');
    }
    catch (error) {
      Alert.alert('Erro!', 'Credenciais incorretas!');
      console.log(error);
    }
  };

  return (
    <>
      <FormLabel message='E-mail' />
      <FormInput
        control={control}
        controllerName='email'
        requireMessage='O e-mail precisa ser preenchido'
        regexPattern={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
        patternErrorMessage='Digite um e-mail válido'
        placeHolder='Digite seu e-mail'
        keyboardType='email-address'
        autoCapitalize='none'
      />

      <FormLabel message='Senha' />
      <FormInput
        control={control}
        controllerName='password'
        requireMessage='A senha precisa ser preenchida'
        regexPattern={/.*/}
        patternErrorMessage=''
        placeHolder='Digite sua senha'
        keyboardType='visible-password'
        autoCapitalize='none'
      />

      <Error errors={errors} />

      <PressablePattern message='Enviar' onPressFunc={handleSubmit(onSubmit)} />
    </>
  )
}