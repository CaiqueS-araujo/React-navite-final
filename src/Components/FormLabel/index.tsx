import { View, Text } from 'react-native';
import React from 'react';
import * as S from './style';

type PropType = {
  message: string,
}

export default function FormLabel({message}: PropType) {
  return (
    <S.Label>
        {message}
    </S.Label>
  )
}
