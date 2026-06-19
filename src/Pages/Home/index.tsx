import { View, Text } from 'react-native'
import React from 'react'
import { Menu } from './styles'
import { Jersey10_400Regular, useFonts } from '@expo-google-fonts/jersey-10';


export function Home() {
const [fontsUsed] = useFonts({Jersey10_400Regular})

if(!fontsUsed)
  return 


  return (
    <View>
      <Menu> Hello, Kaique! </Menu>
    </View>
  )
}