import { StyleSheet } from "react-native";
import { theme } from '../../Themes/Theme';
import { DarkTheme } from "@react-navigation/native";

const currentTheme = theme.LightMode;
const darkTheme = theme.DarkMode;
const radii = theme.radii;

export const stylesLight = StyleSheet.create({

  tela: {
    flex: 1,
    backgroundColor: currentTheme.Basic.colors.white,
  },
  header: {
    backgroundColor: currentTheme.BluePattern.colors.title,
    paddingVertical: 16,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: currentTheme.YellowPattern.colors.strongBackGround,
  },
  headerTitulo: {
    fontSize: 20,
    fontWeight: '700',
    color: currentTheme.Basic.colors.white,
    letterSpacing: 1,
  },
  containerIntro: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  containerQuiz: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  containerResultado: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  titulo: {
    fontSize: 22,
    fontWeight: '700',
    color: currentTheme.Basic.colors.black,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 14,
    color: currentTheme.Basic.colors.black,
    marginBottom: 24,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    color: currentTheme.Basic.colors.black,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: currentTheme.YellowPattern.colors.strongText,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    marginBottom: 20,
    backgroundColor: currentTheme.Basic.colors.white,
  },
  botaoPrimario: {
    backgroundColor: currentTheme.RedPattern.colors.title,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 12,
  },
  botaoDesabilitado: {
    backgroundColor: currentTheme.BluePattern.colors.subTitle,
  },
  textoBotaoPrimario: {
    color: currentTheme.Basic.colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  tempo: {
    textAlign: 'center',
    fontSize: 14,
    color: currentTheme.RedPattern.colors.weakText,
    marginBottom: 8,
  },
  imagemContainer: {
    height: 180,
    backgroundColor: currentTheme.Basic.colors.white,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    overflow: 'hidden',
  },
  imagem: {
    width: '85%',
    height: '85%',
  },
  pergunta: {
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 14,
    color: currentTheme.BluePattern.colors.title,
  },
  opcoes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  pontuacaoFinal: {
    fontSize: 15,
    color: currentTheme.Basic.colors.grey,
    textAlign: 'center',
    marginBottom: 16,
  },
  lista: {
    flex: 1,
    marginBottom: 16,
  },
});

export const stylesDark = StyleSheet.create({

  tela: {
    flex: 1,
    backgroundColor: darkTheme.Basic.colors.black,
  },
  header: {
    backgroundColor: darkTheme.BluePattern.colors.subTitle,
    paddingVertical: 16,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor:darkTheme.YellowPattern.colors.strongText,
  },
  headerTitulo: {
    fontSize: 20,
    fontWeight: '700',
    color: darkTheme.Basic.colors.white,
    letterSpacing: 1,
  },
  containerIntro: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  containerQuiz: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  containerResultado: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  titulo: {
    fontSize: 22,
    fontWeight: '700',
    color: darkTheme.Basic.colors.white,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 14,
    color: darkTheme.Basic.colors.white,
    marginBottom: 24,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    color: darkTheme.Basic.colors.white,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: darkTheme.YellowPattern.colors.strongText,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    marginBottom: 20,
    backgroundColor: darkTheme.Basic.colors.white,
  },
  botaoPrimario: {
    backgroundColor: darkTheme.RedPattern.colors.title,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 12,
  },
  botaoDesabilitado: {
    backgroundColor: darkTheme.BluePattern.colors.title,
  },
  textoBotaoPrimario: {
    color: darkTheme.Basic.colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  tempo: {
    textAlign: 'center',
    fontSize: 14,
    color: darkTheme.RedPattern.colors.weakText,
    marginBottom: 8,
  },
  imagemContainer: {
    height: 180,
    backgroundColor: darkTheme.Basic.colors.white,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    overflow: 'hidden',
  },
  imagem: {
    width: '85%',
    height: '85%',
  },
  pergunta: {
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 14,
    color: darkTheme.BluePattern.colors.strongText,
  },
  opcoes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  pontuacaoFinal: {
    fontSize: 15,
    color: darkTheme.Basic.colors.white,
    textAlign: 'center',
    marginBottom: 16,
  },
  lista: {
    flex: 1,
    marginBottom: 16,
  },
});