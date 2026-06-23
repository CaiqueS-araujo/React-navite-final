import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import { GameCard } from '../../Components/GameCard';
import { styles } from './styles';

// Dados locais
const GAMES_DATA = [
  {
    id: '1',
    console: 'Game Boy',
    gameA: 'Pokémon Red Version',
    gameB: 'Pokémon Blue Version',
    coverA: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ruby.png', // Usando imagens temporárias da PokeAPI
    coverB: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/sapphire.png',
  },
  {
    id: '2',
    console: 'Game Boy Advance',
    gameA: 'Pokémon Ruby Version',
    gameB: 'Pokémon Sapphire Version',
    coverA: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ruby.png',
    coverB: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/sapphire.png',
  },
];

export function Games() {

    // Busca e lista
    const [searchText, setSearchText] = useState('');
    const [filteredGames, setFilteredGames] = useState(GAMES_DATA);

    // Filtro
    useEffect(() => {
        if (searchText === '') {
            setFilteredGames(GAMES_DATA);
        } else {
            const filtered = GAMES_DATA.filter((game) =>
                game.gameA.toLowerCase().includes(searchText.toLowerCase()) ||
                game.console.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredGames(filtered);
        }
    }, [searchText]);

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.titulo}>Jogos Clássicos</Text>
            </View>

            <View style={styles.content}>

                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar jogo ou console..."
                    placeholderTextColor="#4A658A"
                    value={searchText}
                    onChangeText={setSearchText}
                />

                <FlatList
                    data={filteredGames}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listContainer}
                    renderItem={({ item }) => (
                        <GameCard
                            consoleName={item.console}
                            gameA={item.gameA}
                            gameB={item.gameB}
                            coverA={item.coverA}
                            coverB={item.coverB}
                        />
                    )}
                />
            </View>
        </View>
    );
}








