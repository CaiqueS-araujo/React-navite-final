import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import FormLabel from '../FormLabel';
import { FormInput } from '../FormInput';
import Error from '../ErrorMessage';
import PressablePattern from '../Pressable';

 export type LoginFormData = {
  email:string,
  password: string,
}

export  function FormLogin() {

 const {
    control,
    handleSubmit,
    formState: { errors }
} = useForm<LoginFormData>();

  return (
    <>
        <FormLabel message='E-mail'/>
        <FormInput control={control} 
          controllerName='email'
          requireMessage='O e-mail precisa ser preenchido'
          regexPattern={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
          patternErrorMessage='Digite um e-mail válido'
          placeHolder='Digite seu e-mail'
          keyboardType='email-address'
          autoCapitalize='none'/>
        
        <FormLabel message='Senha'/>
        <FormInput control={control} 
           controllerName='password'
          requireMessage='A senha precisa ser preenchida'
          regexPattern={/.*/}
          patternErrorMessage=''
          placeHolder='Digite sua senha'
          keyboardType='visible-password'
          autoCapitalize='none'/>
        <Error errors={errors}/>

      <PressablePattern message='Enviar'/>       
    </>
  )
}