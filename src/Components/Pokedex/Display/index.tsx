import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { PokemonData } from '../../../Data/pokeApi';

type PokedexDisplayProps = {
    pokemon: PokemonData | null;
    loading: boolean;
    error: string;
};

export function PokedexDisplay({ pokemon, loading, error }: PokedexDisplayProps) {

    return (

        <View style={styles.mainScreenContainer}>

            <View style={styles.headerLights}>
                <View style={styles.redLight} />
                <View style={styles.redLight} />
            </View>

            {loading && <Text style={styles.systemText}>BUSCANDO...</Text>}
            {error !== "" && <Text style={styles.systemTextError}>{error}</Text>}

            {pokemon && !loading && !error && (
                <>
                    <Image
                        source={{ uri: pokemon.sprite }}
                        style={styles.pokemonImage}
                    />
                    <Text style={styles.pokemonId}>
                        Nº {String(pokemon.id).padStart(3, '0')}
                    </Text>
                </>
            )}
        </View>
    );
}




