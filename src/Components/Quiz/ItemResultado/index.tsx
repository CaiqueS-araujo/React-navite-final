import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Resposta } from '../../../Data/perguntasQuiz';
import { stylesResult } from '../styles';

type ItemResultadoProps = {
  item: Resposta;
};

export default function ItemResultado({ item }: ItemResultadoProps) {
  return (
    <View style={stylesResult.container}>
      <Text style={stylesResult.pergunta}>Resposta certa: {item.correta}</Text>
      <Text style={item.acertou ? stylesResult.acertou : stylesResult.errou}>
        {item.acertou
          ? '✓ Você acertou'
          : `✗ Você respondeu: ${item.escolhida ?? 'tempo esgotado'}`}
      </Text>
    </View>
  );
}
