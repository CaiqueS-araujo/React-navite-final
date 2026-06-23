import React from "react";
import { useTheme } from "../../Context/ThemeContext";
import * as S from "./styles";

// Botãozinho reutilizável de alternar tema. Mostra a lua quando está no claro
// (pra "ir pro escuro") e o sol quando está no escuro (pra "voltar pro claro").
// É só importar e colocar em qualquer tela.
export function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <S.Botao onPress={toggleTheme} activeOpacity={0.8} accessibilityLabel="Alternar tema claro e escuro">
      <S.Icone>{isDarkMode ? "☀️" : "🌙"}</S.Icone>
    </S.Botao>
  );
}
