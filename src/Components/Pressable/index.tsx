import { View, Text, Pressable } from 'react-native'
import React from 'react'
import * as S from './style'

type PropsType = {
    message: string,
    onPressFunc: () => void,
}

export default function PressablePattern({message, onPressFunc}: PropsType) {
  return (
    <S.Pressable onPress={onPressFunc}>
        <S.PressableText>{message}</S.PressableText>
    </S.Pressable>
  )
}