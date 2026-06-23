import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

type CabecalhoQuizProps = {
  numeroAtual: number;
  total: number;
  pontos: number;
};

export default function CabecalhoQuiz({ numeroAtual, total, pontos }: CabecalhoQuizProps) {
  const progresso = Math.min((numeroAtual / total) * 100, 100);

  return (
    <View style={styles.container}>
      <View style={styles.linha}>
        <Text style={styles.textoProgresso}>
          Pergunta {numeroAtual} de {total}
        </Text>
        <Text style={styles.textoPontos}>⭐ {pontos} pts</Text>
      </View>
      <View style={styles.barraFundo}>
        <View style={[styles.barraPreenchida, { width: `${progresso}%` }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  textoProgresso: {
    fontSize: 14,
    color: '#6B6B6B',
  },
  textoPontos: {
    fontSize: 14,
    fontWeight: '600',
    color: '#B8860B',
  },
  barraFundo: {
    height: 6,
    backgroundColor: '#EFE7D8',
    borderRadius: 3,
    overflow: 'hidden',
  },
  barraPreenchida: {
    height: '100%',
    backgroundColor: '#2A75BB',
    borderRadius: 3,
  },
});
