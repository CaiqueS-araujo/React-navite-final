import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';
import React from 'react';

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
    estiloExtra = styles.correta;
    estiloTextoExtra = styles.textoCorreta;
  } else if (respondido && selecionada && !ehCorreta) {
    estiloExtra = styles.errada;
    estiloTextoExtra = styles.textoErrada;
  }

  return (
    <TouchableOpacity
      style={[styles.botao, estiloExtra]}
      onPress={onPress}
      disabled={respondido}
      activeOpacity={0.7}
    >
      <Text style={[styles.texto, estiloTextoExtra]}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    flexBasis: '48%',
    backgroundColor: '#F6F1E8',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E5DCC8',
  },
  texto: {
    fontSize: 15,
    fontWeight: '500',
    color: '#262626',
  },
  correta: {
    backgroundColor: '#E3F6E8',
    borderColor: '#3FAE5C',
  },
  textoCorreta: {
    color: '#1F7A37',
  },
  errada: {
    backgroundColor: '#FBE6E6',
    borderColor: '#D9534F',
  },
  textoErrada: {
    color: '#A83232',
  },
});
