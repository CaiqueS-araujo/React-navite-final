 import { View, Text } from 'react-native'
 import React from 'react'
 import * as S from './style'
 import { Control } from 'react-hook-form';
 import { Controller, useForm } from 'react-hook-form';
 import { LoginFormData } from '../FormLogin';

type PropsType = {
    control: Control<LoginFormData>,
    controllerName: "email" | "password",
    requireMessage: string,
    regexPattern: RegExp,
    patternErrorMessage: string,
    placeHolder: string,
    keyboardType: 'email-address' | 'visible-password',
    autoCapitalize: "none" | "sentences" | "words" | "characters",
}
 
 export function FormInput({control, 
                            controllerName, 
                            requireMessage, 
                            regexPattern,
                            patternErrorMessage,
                            placeHolder,
                            keyboardType,
                            autoCapitalize}: PropsType) {

    return (
     <Controller
                control={control}
                name= {controllerName}

                rules={{
                    required: requireMessage,

                    pattern: {
                        value: regexPattern,
                        message: patternErrorMessage
                    }
                }}

                render={({ field: { onChange, value } }) => (

                    <S.Input
                        placeholder= {placeHolder}
                        value={value}
                        onChangeText={onChange}
                        keyboardType={keyboardType}
                        autoCapitalize={autoCapitalize}
                    />

                )}
            />
   )
 }