import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Jersey10_400Regular, useFonts } from "@expo-google-fonts/jersey-10";
import { AppNavigation } from "../../Routes/routes";
import { ThemeToggle } from "../../Components/ThemeToggle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as S from "./styles";

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

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("token");

      navigation.reset({
        index: 0,
        routes: [{ name: "login" as never }],
      });
    } catch (err) {
      console.log("Erro ao fazer logout", err);
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.Titulo>Pokémon</S.Titulo>

        <S.HeaderRight>
          <ThemeToggle />

          <S.LogoutButton onPress={handleLogout}>
            <S.LogoutText>SAIR</S.LogoutText>
          </S.LogoutButton>
        </S.HeaderRight>
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