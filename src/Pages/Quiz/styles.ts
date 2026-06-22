import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#FFFCF7',
  },
  header: {
    backgroundColor: '#2A75BB',
    paddingVertical: 16,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#ffcb05',
  },
  headerTitulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
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
    color: '#262626',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 14,
    color: '#6B6B6B',
    marginBottom: 24,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    color: '#262626',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D9D0BC',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  botaoPrimario: {
    backgroundColor: '#E3350D',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 12,
  },
  botaoDesabilitado: {
    backgroundColor: '#C9BBA0',
  },
  textoBotaoPrimario: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  tempo: {
    textAlign: 'center',
    fontSize: 14,
    color: '#A83232',
    marginBottom: 8,
  },
  imagemContainer: {
    height: 180,
    backgroundColor: '#F6F1E8',
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
    color: '#262626',
  },
  opcoes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  pontuacaoFinal: {
    fontSize: 15,
    color: '#6B6B6B',
    textAlign: 'center',
    marginBottom: 16,
  },
  lista: {
    flex: 1,
    marginBottom: 16,
  },
});
