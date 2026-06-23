import { View, Text } from 'react-native'
import React from 'react'
import { LoginFormData } from '../FormLogin'
import * as S from './style'
import { FieldErrors } from 'react-hook-form'

type PropsType = {
    errors: FieldErrors<LoginFormData>,
}

export default function Error({errors}: PropsType) {
  return (
    <>
    {errors.email && (

                <S.Error>
                    {errors.email.message}
                </S.Error>
    )}
    
    {errors.password && (

                <S.Error>
                    {errors.password.message}
                </S.Error>
    )}
    </>
  )
}