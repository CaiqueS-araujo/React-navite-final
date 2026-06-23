import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';
import React from 'react';
import {stylesBotaoR} from '../styles';

type BotaoRespostaProps = {
  texto: string;
  ehCorreta: boolean;
  selecionada: boolean;
  respondido: boolean;
  onPress: () => void;
};

export default function BotaoResposta({
  texto,
  ehCorreta,
  selecionada,
  respondido,
  onPress,
}: BotaoRespostaProps) {
  let estiloExtra: StyleProp<ViewStyle> = null;
  let estiloTextoExtra: StyleProp<TextStyle> = null;

  if (respondido && ehCorreta) {
    estiloExtra = stylesBotaoR.correta;
    estiloTextoExtra = stylesBotaoR.textoCorreta;
  } else if (respondido && selecionada && !ehCorreta) {
    estiloExtra = stylesBotaoR.errada;
    estiloTextoExtra = stylesBotaoR.textoErrada;
  }

  return (
    <TouchableOpacity
      style={[stylesBotaoR.botao, estiloExtra]}
      onPress={onPress}
      disabled={respondido}
      activeOpacity={0.7}
    >
      <Text style={[stylesBotaoR.texto, estiloTextoExtra]}>{texto}</Text>
    </TouchableOpacity>
  );
}
