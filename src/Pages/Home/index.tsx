import { View, Text } from 'react-native'
import React from 'react'
import * as S from './styles'
import { Jersey10_400Regular, useFonts } from '@expo-google-fonts/jersey-10';


export function Home() {
const [fontsUsed] = useFonts({Jersey10_400Regular})

if(!fontsUsed)
  return 


  return (
    <>
    <S.MenuContent>
      <S.Menu>Menu</S.Menu>
    </S.MenuContent>
      
    <S.Main>  
      <S.Page1>
        <S.TextPage1>Quiz</S.TextPage1>
      </S.Page1>

      <S.Page2>
         <S.TextPage2>Team</S.TextPage2>
      </S.Page2>

      <S.Page3>
        <S.TextPage3>Pokédex</S.TextPage3>
      </S.Page3>
    </S.Main>
    </>
  )
}