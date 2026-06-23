import React from "react";
import { Jersey10_400Regular, useFonts } from "@expo-google-fonts/jersey-10";
import { FormLogin } from "../../Components/FormLogin";
import { ThemeToggle } from "../../Components/ThemeToggle";
import * as S from "./styles";

export default function Login() {
  const [fontsUsed] = useFonts({ Jersey10_400Regular });

  if (!fontsUsed) return null;

  return (
    <S.Container>
      <S.TopoTema>
        <ThemeToggle />
      </S.TopoTema>

      <S.Titles>
        <S.Emoji>⚡</S.Emoji>
        <S.Title>Bem-vindo, treinador!</S.Title>
        <S.SubTitle>Faça login para iniciar sua jornada!</S.SubTitle>
      </S.Titles>

      {/* O formulário em si (com toda a validação e a chamada de API) vem
          pronto do FormLogin; aqui só damos um cartão bonito em volta. */}
      <S.Card>
        <FormLogin />
      </S.Card>
    </S.Container>
  );
}
