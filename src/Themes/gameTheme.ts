import { theme } from "./Theme";

const L = theme.LightMode;

export const COLORS = {

  amarelo: L.YellowPattern.colors.strongBackGround,
  amareloClaro: L.YellowPattern.colors.subTitle,
  amareloTexto: L.YellowPattern.colors.weakText,

  azul: L.BluePattern.colors.strongText,
  azulClaro: L.BluePattern.colors.title,
  azulMedio: L.BluePattern.colors.weakText,
  azulEscuro: L.BluePattern.colors.weakBackGround,

  vermelho: L.RedPattern.colors.strongBackGround,
  vermelhoForte: L.RedPattern.colors.title,
  vermelhoClaro: L.RedPattern.colors.subTitle,

  branco: L.Basic.colors.white,
  preto: L.Basic.colors.black,

  hpAlto: "#4CAF50",
  hpMedio: L.YellowPattern.colors.strongText,
  hpBaixo: L.RedPattern.colors.title,
} as const;

export const FONT_PIXEL = "Jersey10_400Regular";

export function arenaGradient(dark: boolean): [string, string] {
  const M = dark ? theme.DarkMode : theme.LightMode;
  return [M.BluePattern.colors.weakText, M.BluePattern.colors.weakBackGround];
}
