import React, { useState } from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

// Propriedades que o cartão recebe
type GameCardProps = {
    consoleName: string;
    gameA: string;
    gameB: string;
    coverA: string;
    coverB: string;
};

export function GameCard({ consoleName, gameA, gameB, coverA, coverB }: GameCardProps) {

    // Controlador de qual a versão está sendo exibida
    const [showVersionA, setShowVersionA] = useState(true);

    const toggleVersion = () => {
        setShowVersionA((prev) => !prev);
    };

    return (

        <TouchableOpacity
            style={styles.cardContainer}
            activeOpacity={0.8}
            onPress={toggleVersion}
        >

            <Text style={styles.consoleTag}>{consoleName}</Text>

            <Image
                source={{ uri: showVersionA ? coverA : coverB }}
                style={styles.image}
                alt="Capa do Jogo"
            />

            <Text style={styles.title}>{showVersionA ? gameA : gameB}</Text>

            <Text style={styles.subTitle}>(Toque para trocar a versão)</Text>
        </TouchableOpacity>
    );
}




