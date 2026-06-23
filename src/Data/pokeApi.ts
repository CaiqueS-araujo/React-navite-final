import axios from 'axios';

export type PokemonData = {
    id: number;
    name: string;
    types: string[];
    moves: string[];
    sprite: string;
};

export const searchPokemon = async (query: string): Promise<PokemonData> => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`);
        const data = response.data;

        return {
            id: data.id,
            name: data.name,
            types: data.types.map((t: any) => t.type.name.toUpperCase()),

            moves: data.moves.slice(0, 4).map((m: any) => m.move.name.toUpperCase()),

            sprite: data.sprites.other['official-artwork'].front_default || data.sprites.front_default,
        };
    } catch (error) {
        throw new Error('Pokémon não encontrado!');
    }
};

