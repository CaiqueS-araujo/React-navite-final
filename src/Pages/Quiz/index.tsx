import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import React, { useState, useEffect } from 'react';

import perguntasQuiz, { Resposta } from '../../Data/perguntasQuiz';
import CabecalhoQuiz from '../../Components/Quiz/CabecalhoQuiz';
import BotaoResposta from '../../Components/Quiz/BotaoResposta';
import ItemResultado from '../../Components/Quiz/ItemResultado';
import { stylesLight, stylesDark } from './styles';

const TEMPO_POR_PERGUNTA = 15;

export function Quiz() {
  const [nome, setNome] = useState('');
  const [iniciou, setIniciou] = useState(false);
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [respondido, setRespondido] = useState(false);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState<string | null>(null);
  const [tempoRestante, setTempoRestante] = useState(TEMPO_POR_PERGUNTA);
  const [finalizado, setFinalizado] = useState(false);
  const [respostas, setRespostas] = useState<Resposta[]>([]);
  const [imagemCarregando, setImagemCarregando] = useState(true);
  const [DarkModeIsActive, isDarkModeActive] = useState(false);
  const [styles, setStyles] = useState(stylesLight);

  const perguntaAtual = perguntasQuiz[indiceAtual];

  function responder(opcaoEscolhida: string | null) {
    if (respondido) return;
    const acertou = opcaoEscolhida === perguntaAtual.correta;
    setRespondido(true);
    setOpcaoSelecionada(opcaoEscolhida);
    if (acertou) setPontuacao((pontos) => pontos + 10);
    setRespostas((lista) => [
      ...lista,
      { correta: perguntaAtual.correta, escolhida: opcaoEscolhida, acertou },
    ]);
  }

  function proximaPergunta() {
    if (indiceAtual + 1 < perguntasQuiz.length) {
      setIndiceAtual((i) => i + 1);
    } else {
      setFinalizado(true);
    }
  }

  function jogarDeNovo() {
    setIndiceAtual(0);
    setPontuacao(0);
    setRespostas([]);
    setFinalizado(false);
    setRespondido(false);
    setOpcaoSelecionada(null);
    setIniciou(false);
    setNome('');
  }

  function darkModeSwitch() {
    if (!DarkModeIsActive){
      isDarkModeActive(true);
      setStyles(stylesLight);
      console.log(DarkModeIsActive);
    }
    else{
      isDarkModeActive(false);
      setStyles(stylesDark);
      console.log(DarkModeIsActive);
    }
  }

  useEffect(() => {
    setTempoRestante(TEMPO_POR_PERGUNTA);
    setRespondido(false);
    setOpcaoSelecionada(null);
    setImagemCarregando(true);
  }, [indiceAtual]);

  useEffect(() => {
    if (!iniciou || finalizado || respondido) return;
    if (tempoRestante <= 0) {
      responder(null);
      return;
    }
    const id = setInterval(() => {
      setTempoRestante((t) => t - 1);
    }, 1000);
    return () => clearInterval(id);
  }, [tempoRestante, respondido, iniciou, finalizado]);

  // TELA 1 — intro
  if (!iniciou) {
    return (
      <SafeAreaView style={styles.tela}>
        <TouchableOpacity
            style={[styles.botaoDesabilitado]}
            onPress={darkModeSwitch}
            activeOpacity={0.8}
          >
            <Text style={styles.textoBotaoPrimario}>DarkMode</Text>
          </TouchableOpacity>

        <View style={styles.header}>
          <Text style={styles.headerTitulo}>QUIZ POKÉMON</Text>
        </View>
        <View style={styles.containerIntro}>
          <Text style={styles.titulo}>Quem é esse Pokémon?</Text>
          <Text style={styles.subtitulo}>
            Responda {perguntasQuiz.length} perguntas antes que o tempo acabe!
          </Text>
          <Text style={styles.label}>Qual é o seu nome, treinador(a)?</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            placeholderTextColor="#A89B7D"
            value={nome}
            onChangeText={setNome}
          />
          <TouchableOpacity
            style={[styles.botaoPrimario, !nome.trim() && styles.botaoDesabilitado]}
            onPress={() => nome.trim() && setIniciou(true)}
            activeOpacity={0.8}
          >
            <Text style={styles.textoBotaoPrimario}>Começar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // TELA 3 — resultado
  if (finalizado) {
    const acertos = respostas.filter((r) => r.acertou).length;
    return (
      <SafeAreaView style={styles.tela}>
        <View style={styles.header}>
          <Text style={styles.headerTitulo}>QUIZ POKÉMON</Text>
        </View>
        <View style={styles.containerResultado}>
          <Text style={styles.titulo}>Parabéns, {nome}!</Text>
          <Text style={styles.pontuacaoFinal}>
            {pontuacao} pontos — {acertos} de {perguntasQuiz.length} certas
          </Text>
          <FlatList
            style={styles.lista}
            data={respostas}
            keyExtractor={(_, index) => String(index)}
            renderItem={({ item }) => <ItemResultado item={item} />}
          />
          <TouchableOpacity style={styles.botaoPrimario} onPress={jogarDeNovo} activeOpacity={0.8}>
            <Text style={styles.textoBotaoPrimario}>Jogar de novo</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // TELA 2 — pergunta
  return (
    <SafeAreaView style={styles.tela}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>QUIZ POKÉMON</Text>
      </View>
      <View style={styles.containerQuiz}>
        <CabecalhoQuiz
          numeroAtual={indiceAtual + 1}
          total={perguntasQuiz.length}
          pontos={pontuacao}
        />

        <Text style={styles.tempo}>⏱ {tempoRestante}s</Text>

        <View style={styles.imagemContainer}>
          {imagemCarregando && (
            <ActivityIndicator size="large" color="#2A75BB" style={StyleSheet.absoluteFill} />
          )}
          <Image
            source={{ uri: perguntaAtual.imagemUrl }}
            style={styles.imagem}
            resizeMode="contain"
            onLoad={() => setImagemCarregando(false)}
            onError={() => setImagemCarregando(false)}
          />
        </View>

        <Text style={styles.pergunta}>Quem é esse Pokémon?</Text>

        <View style={styles.opcoes}>
          {perguntaAtual.opcoes.map((opcao) => (
            <BotaoResposta
              key={opcao}
              texto={opcao}
              ehCorreta={opcao === perguntaAtual.correta}
              selecionada={opcao === opcaoSelecionada}
              respondido={respondido}
              onPress={() => responder(opcao)}
            />
          ))}
        </View>

        {respondido && (
          <TouchableOpacity style={styles.botaoPrimario} onPress={proximaPergunta} activeOpacity={0.8}>
            <Text style={styles.textoBotaoPrimario}>
              {indiceAtual + 1 < perguntasQuiz.length ? 'Próxima pergunta' : 'Ver resultado'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}