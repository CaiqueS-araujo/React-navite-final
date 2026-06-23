import axios from 'axios';

const BASE_URL = 'https://6a39d04f917c7b14c74c52cc.mockapi.io/favorites/pokemon';

export type FavoritePokemon = {
  id: string;
  pokemonId: number; 
  name: string;
  nickname: string;
};

// GET
export const getFavorites = async (): Promise<FavoritePokemon[]> => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

// POST
export const addFavorite = async (pokemon: Omit<FavoritePokemon, 'id'>): Promise<FavoritePokemon> => {
  const response = await axios.post(BASE_URL, pokemon);
  return response.data;
};

// PUT
export const updateFavorite = async (id: string, nickname: string): Promise<FavoritePokemon> => {
  const response = await axios.put(`${BASE_URL}/${id}`, { nickname });
  return response.data;
};

// DELETE
export const removeFavorite = async (id: string): Promise<FavoritePokemon> => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};


