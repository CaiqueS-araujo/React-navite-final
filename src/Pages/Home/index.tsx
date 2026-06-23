import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Jersey10_400Regular, useFonts } from "@expo-google-fonts/jersey-10";
import { AppNavigation } from "../../Routes/routes";
import { ThemeToggle } from "../../Components/ThemeToggle";
import * as S from "./styles";

// Menu principal: cada card leva para uma seção do app.
// A lista fica num array só pra ficar fácil de adicionar/remover seções depois.
const secoes = [
  { rota: "pokedex", titulo: "Pokédex", icone: "📕" },
  { rota: "quiz", titulo: "Quiz", icone: "❓" },
  { rota: "games", titulo: "Games", icone: "🎮" },
  { rota: "team", titulo: "Meu Time", icone: "🧢" },
  { rota: "battles", titulo: "Batalha", icone: "⚔️" },
] as const;

export function Home() {
  const navigation = useNavigation<AppNavigation>();
  const [fontsUsed] = useFonts({ Jersey10_400Regular });

  if (!fontsUsed) return null;

  return (
    <S.Container>
      <S.Header>
        <S.Titulo>Pokémon</S.Titulo>
        <ThemeToggle />
      </S.Header>

      <S.Subtitulo>Escolha uma seção, treinador!</S.Subtitulo>

      <S.Grade>
        {secoes.map((secao) => (
          <S.Card
            key={secao.rota}
            onPress={() => navigation.navigate(secao.rota)}
            activeOpacity={0.85}
          >
            <S.CardIcone>{secao.icone}</S.CardIcone>
            <S.CardTitulo>{secao.titulo}</S.CardTitulo>
          </S.Card>
        ))}
      </S.Grade>
    </S.Container>
  );
}
