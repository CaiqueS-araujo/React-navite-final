export type Pergunta = {
  id: number;
  imagemUrl: string;
  correta: string;
  opcoes: string[];
};

export type Resposta = {
  correta: string;
  escolhida: string | null;
  acertou: boolean;
};

const perguntasQuiz: Pergunta[] = [
  {
    id: 1,
    imagemUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    correta: "Pikachu",
    opcoes: ["Pikachu", "Raichu", "Pichu", "Eevee"],
  },
  {
    id: 2,
    imagemUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    correta: "Charmander",
    opcoes: ["Squirtle", "Charmander", "Bulbasaur", "Caterpie"],
  },
  {
    id: 3,
    imagemUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
    correta: "Jigglypuff",
    opcoes: ["Clefairy", "Jigglypuff", "Meowth", "Psyduck"],
  },
  {
    id: 4,
    imagemUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png",
    correta: "Gengar",
    opcoes: ["Gastly", "Haunter", "Gengar", "Koffing"],
  },
  {
    id: 5,
    imagemUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png",
    correta: "Snorlax",
    opcoes: ["Snorlax", "Slowpoke", "Drowzee", "Kabuto"],
  },
  {
    id: 6,
    imagemUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
    correta: "Mewtwo",
    opcoes: ["Mew", "Mewtwo", "Alakazam", "Gardevoir"],
  },
];

export default perguntasQuiz;
