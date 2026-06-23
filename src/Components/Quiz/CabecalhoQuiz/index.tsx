import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { stylesCabecalho } from '../styles';

type CabecalhoQuizProps = {
  numeroAtual: number;
  total: number;
  pontos: number;
};

export default function CabecalhoQuiz({ numeroAtual, total, pontos }: CabecalhoQuizProps) {
  const progresso = Math.min((numeroAtual / total) * 100, 100);

  return (
    <View style={stylesCabecalho.container}>
      <View style={stylesCabecalho.linha}>
        <Text style={stylesCabecalho.textoProgresso}>
          Pergunta {numeroAtual} de {total}
        </Text>
        <Text style={stylesCabecalho.textoPontos}>⭐ {pontos} pts</Text>
      </View>
      <View style={stylesCabecalho.barraFundo}>
        <View style={[stylesCabecalho.barraPreenchida, { width: `${progresso}%` }]} />
      </View>
    </View>
  );
}
