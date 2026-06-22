import { View, Text, Pressable } from 'react-native'
import React from 'react'
import * as S from './style'

type PropsType = {
    message: string,
}

export default function PressablePattern({message}: PropsType) {
  return (
    <S.Pressable>
        <S.PressableText>{message}</S.PressableText>
    </S.Pressable>
  )
}