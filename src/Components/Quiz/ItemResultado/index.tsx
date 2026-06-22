import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Resposta } from '../../../Data/perguntasQuiz';

type ItemResultadoProps = {
  item: Resposta;
};

export default function ItemResultado({ item }: ItemResultadoProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.pergunta}>Resposta certa: {item.correta}</Text>
      <Text style={item.acertou ? styles.acertou : styles.errou}>
        {item.acertou
          ? '✓ Você acertou'
          : `✗ Você respondeu: ${item.escolhida ?? 'tempo esgotado'}`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EFE7D8',
  },
  pergunta: {
    fontSize: 14,
    fontWeight: '500',
    color: '#262626',
    marginBottom: 4,
  },
  acertou: {
    fontSize: 13,
    color: '#1F7A37',
  },
  errou: {
    fontSize: 13,
    color: '#A83232',
  },
});
