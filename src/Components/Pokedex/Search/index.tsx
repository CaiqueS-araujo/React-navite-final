import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

type PokedexSearchProps = {
    query: string;
    setQuery: (text: string) => void;
    handleSearch: () => void;
};

export function PokedexSearch({ query, setQuery, handleSearch }: PokedexSearchProps) {

    return (

        <View style={styles.searchContainer}>
            <TextInput
                style={styles.searchInput}
                placeholder="NOME OU ID..."
                placeholderTextColor="#999"
                value={query}

                onChangeText={setQuery}
                maxLength={20}

                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="search"
                onSubmitEditing={handleSearch}
            />

            <TouchableOpacity
                style={styles.searchButton}
                activeOpacity={0.7}
                onPress={handleSearch}
            >
                <Text style={styles.searchButtonText}>BUSCAR</Text>
            </TouchableOpacity>
        </View>
    );
}



