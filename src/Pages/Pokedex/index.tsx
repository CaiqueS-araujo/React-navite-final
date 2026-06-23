import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { styles } from './styles';

export function Pokedex() {

    const [query, setQuery] = useState("");
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [favorites, setFavorites] = useState([]);

    const handleSearch = () => {
        if (!query.trim()) {
            Alert.alert("Erro", "Digite um nome/número!");
            return;
        }
        Alert.alert("Buscando", `Você procurou por: ${query}`);
    };

    const handleAddFavorite = () => {
        if (!pokemon) return;

        if (favorites.length >= 3) {
            Alert.alert("Aviso", "Você só pode ter 3 Pokémon favoritos.");
            return;
        }

        setFavorites([...favorites, { id: pokemon.id, name: pokemon.name, nickname: "" }]);
    };

    return (
        <View style={styles.container}>

            <View style={styles.pokedexBody}>

                <View style={styles.topPanel}>
                    <View style={styles.blueLensContainer}>
                        <View style={styles.blueLens} />
                    </View>

                </View>

                <View style={styles.hinge}>
                    <View style={styles.hingeLine} />
                    <View style={styles.hingeLine} />
                </View>

                <View style={styles.bottomPanel}>



                </View>

            </View>
        </View>
    );
}












