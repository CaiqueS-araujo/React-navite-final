import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';
import { FavoritePokemon } from '../../../Data/favoritesApi';

type PokedexFavoritesProps = {
    favorites: FavoritePokemon[];
    handleRemoveFavorite: (id: string) => void;
    handleUpdateFavorite: (id: string, newNickname: string) => void;
};

export function PokedexFavorites({ favorites, handleRemoveFavorite, handleUpdateFavorite }: PokedexFavoritesProps) {
    const [editingId, setEditingId] = useState<string | null>(null);
    const [tempName, setTempName] = useState("");

    const startEditing = (fav: FavoritePokemon) => {
        setEditingId(fav.id);
        setTempName(fav.nickname || fav.name);
    };

    const saveEditing = (id: string) => {
        if (tempName.trim() === "") return;
        handleUpdateFavorite(id, tempName);
        setEditingId(null);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>SEUS FAVORITOS:</Text>

            {favorites.length === 0 ? (
                <Text style={styles.emptyText}>Nenhum Pokémon salvo.</Text>
            ) : (

                <ScrollView showsVerticalScrollIndicator={false}>
                    {favorites.map((fav) => (
                        <View key={fav.id} style={styles.favItem}>

                            {editingId === fav.id ? (
                                <View style={styles.editGroup}>
                                    <TextInput
                                        style={styles.editInput}
                                        value={tempName}
                                        onChangeText={setTempName}
                                        maxLength={12}
                                        autoFocus
                                    />
                                    
                                    <TouchableOpacity onPress={() => saveEditing(fav.id)} style={styles.saveBtn}>
                                        <Text style={styles.btnText}>OK</Text>
                                    </TouchableOpacity>
                                </View>
                            ) : (

                                <View style={styles.favInfo}>
                                    <Text style={styles.favId}>#{String(fav.pokemonId).padStart(3, '0')}</Text>
                                    <Text style={styles.favName}>
                                        {fav.nickname ? fav.nickname.toUpperCase() : fav.name.toUpperCase()}
                                    </Text>
                                </View>
                            )}

                            <View style={styles.actionButtons}>
                                {editingId !== fav.id && (
                                    <TouchableOpacity onPress={() => startEditing(fav)} style={styles.editBtn}>
                                        <Text style={styles.btnText}>✎</Text>
                                    </TouchableOpacity>
                                )}

                                <TouchableOpacity onPress={() => handleRemoveFavorite(fav.id)} style={styles.deleteBtn}>
                                    <Text style={styles.btnText}>X</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    ))}
                </ScrollView>
            )}
        </View>
    );
}



