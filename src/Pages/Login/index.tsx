import { View, Text } from 'react-native'
import React from 'react'
import * as S from './styles'
import { FormLogin } from '../../Components/FormLogin'

export default function Login() {
  
  return (
    <>
    <S.Titles>
      <S.Title>Bem-Vindo treinador!</S.Title>
      <S.SubTitle>Loge-se para iniciar sua jornada!</S.SubTitle>
    </S.Titles>
    
    <S.ContentMain>
      <FormLogin />
    </S.ContentMain>
    </>
  )
}