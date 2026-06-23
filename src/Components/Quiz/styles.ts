import { StyleSheet } from "react-native";
import { theme } from "../../Themes/Theme";

const currentTheme = theme.LightMode;

export const stylesBotaoR = StyleSheet.create({
  botao: {
    flexBasis: '48%',
    backgroundColor: currentTheme.Basic.colors.white,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: currentTheme.Basic.colors.grey,
  },
  texto: {
    fontSize: 15,
    fontWeight: '500',
    color: currentTheme.BluePattern.colors.title,
  },
  correta: {
    backgroundColor: '#E3F6E8',
    borderColor: '#3FAE5C',
  },
  textoCorreta: {
    color: '#1F7A37',
  },
  errada: {
    backgroundColor: '#FBE6E6',
    borderColor: currentTheme.RedPattern.colors.title,
  },
  textoErrada: {
    color: currentTheme.RedPattern.colors.weakBackGround,
  },
});

export const stylesCabecalho = StyleSheet.create({
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
    color: currentTheme.BluePattern.colors.title,
  },
  textoPontos: {
    fontSize: 14,
    fontWeight: '600',
    color: currentTheme.YellowPattern.colors.weakBackGround,
  },
  barraFundo: {
    height: 6,
    backgroundColor: currentTheme.Basic.colors.white,
    borderRadius: 3,
    overflow: 'hidden',
  },
  barraPreenchida: {
    height: '100%',
    backgroundColor: currentTheme.BluePattern.colors.strongText,
    borderRadius: 3,
  },
});

export const stylesResult = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: currentTheme.Basic.colors.white,
  },
  pergunta: {
    fontSize: 14,
    fontWeight: '500',
    color: currentTheme.BluePattern.colors.strongText,
    marginBottom: 4,
  },
  acertou: {
    fontSize: 13,
    color: '#1F7A37',
  },
  errou: {
    fontSize: 13,
    color: currentTheme.RedPattern.colors.weakText,
  },
});