import React, { useState, useEffect } from 'react';
import { View, Text, Alert, Keyboard, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { PokedexSearch } from '../../components/Pokedex/Search';
import { PokedexDisplay } from '../../components/Pokedex/Display';
import { PokedexFavorites } from '../../components/Pokedex/Favorites';
import { searchPokemon, PokemonData } from '../../Data/pokeApi';
import { getFavorites, addFavorite, removeFavorite, updateFavorite, FavoritePokemon } from '../../Data/favoritesApi';

export function Pokedex() {
    const [query, setQuery] = useState("");
    const [pokemon, setPokemon] = useState<PokemonData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [favorites, setFavorites] = useState<FavoritePokemon[]>([]);

    const [isOpened, setIsOpened] = useState(false);
    const flipAnim = useRef(new Animated.Value(0)).current;

    const openPokedex = () => {
        Animated.timing(flipAnim, {
            toValue: 1,
            duration: 1000,
            easing: Easing.out(Easing.poly(4)),
            useNativeDriver: true,
        }).start(() => setIsOpened(true));
    };

    const coverRotateX = flipAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '90deg'],
    });

    const screenOpacity = flipAnim.interpolate({
        inputRange: [0, 0.4, 0.5, 0.7, 1],
        outputRange: [0.1, 0.1, 0.8, 0.3, 1],
    });

    useEffect(() => {
        loadFavorites();
    }, []);

    const loadFavorites = async () => {
        try {
            const data = await getFavorites();
            setFavorites(data);
        } catch (err) {
            console.log("Erro ao buscar favoritos na nuvem");
        }
    };

    const handleSearch = async () => {
        if (!query.trim()) {
            setError("Digite um nome!");
            return;
        }
        Keyboard.dismiss();
        setLoading(true);
        setError("");
        setPokemon(null);

        try {
            const data = await searchPokemon(query.toLowerCase());
            setPokemon(data);
        } catch (err) {
            setError("Pokémon não encontrado!");
        } finally {
            setLoading(false);
        }
    };

    const handleAddFavorite = async () => {
        if (!pokemon) return;
        if (favorites.length >= 3) {
            Alert.alert("Aviso", "Você só pode ter 3 Pokémon favoritos na nuvem.");
            return;
        }
        try {
            const newFav = await addFavorite({ pokemonId: pokemon.id, name: pokemon.name, nickname: "" });
            setFavorites([...favorites, newFav]);
            Alert.alert("Sucesso!", `${pokemon.name.toUpperCase()} foi salvo na nuvem!`);
        } catch (err) {
            Alert.alert("Erro", "Falha ao comunicar com o servidor.");
        }
    };

    const handleRemoveFavorite = async (idToRemove: string) => {
        try {
            await removeFavorite(idToRemove);
            setFavorites(favorites.filter(fav => fav.id !== idToRemove));
        } catch (err) {
            Alert.alert("Erro", "Não foi possível remover o Pokémon.");
        }
    };

    const handleUpdateFavorite = async (idToUpdate: string, newNickname: string) => {
        try {
            const updatedFav = await updateFavorite(idToUpdate, newNickname);
            setFavorites(favorites.map(fav => fav.id === idToUpdate ? updatedFav : fav));
        } catch (err) {
            Alert.alert("Erro", "Não foi possível atualizar o apelido.");
        }
    };

    return (

        <View style={styles.container}>
            <View style={styles.pokedexBody}>

                <View style={styles.topPanel}>
                    <View style={styles.blueLensContainer}>
                        <View style={styles.blueLens} />
                    </View>

                    <Animated.View style={{ opacity: screenOpacity, width: '100%' }}>
                        <PokedexDisplay pokemon={pokemon} loading={loading} error={error} />
                    </Animated.View>
                </View>

                <View style={styles.hinge}>
                    <View style={styles.hingeLine} />
                    <View style={styles.hingeLine} />
                </View>

                <View style={styles.bottomPanel}>

                    {!isOpened && (
                        <Animated.View
                            style={[
                                styles.closedCover,
                                {
                                    transform: [
                                        { perspective: 850 },
                                        { rotateX: coverRotateX }
                                    ]
                                }
                            ]}
                        >
                            <TouchableWithoutFeedback onPress={openPokedex}>
                                <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={styles.coverCircle}>
                                        <View style={styles.coverTriangle} />
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </Animated.View>
                    )}

                    <View style={styles.infoScreen}>
                        {pokemon ? (
                            <View>
                                <Text style={styles.pokemonName}>{pokemon.name.toUpperCase()}</Text>
                                <Text style={styles.pokemonDetails}>TIPOS: {pokemon.types.join(", ")}</Text>
                                <Text style={styles.pokemonDetails}>MOVS: {pokemon.moves.join(", ")}</Text>

                                <TouchableOpacity onPress={handleAddFavorite} style={styles.favButton}>
                                    <Text style={styles.favButtonText}>+ FAVORITAR</Text>
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <Text style={styles.systemText}>AGUARDANDO...</Text>
                        )}
                    </View>

                    <PokedexSearch query={query} setQuery={setQuery} handleSearch={handleSearch} />

                    <PokedexFavorites
                        favorites={favorites}
                        handleRemoveFavorite={handleRemoveFavorite}
                        handleUpdateFavorite={handleUpdateFavorite}
                    />

                </View>
            </View>
        </View>
    );
}







