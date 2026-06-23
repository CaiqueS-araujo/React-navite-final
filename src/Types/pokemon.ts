export interface PokemonLite {
  id: number;
  name: string;
  types: string[];
  moves: string[];
}

export interface PokemonBattle extends PokemonLite {
  hp: number;
  maxHp: number;
  atk: number;
  def: number;
}

export type BattleResult = "win" | "loss" | null;
