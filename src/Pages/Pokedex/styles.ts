import { StyleSheet, Platform } from 'react-native';
import { theme } from '../../Themes/Theme';

const redColors = theme.LightMode.RedPattern.colors;
const basicColors = theme.LightMode.Basic.colors;
const radii = theme.radii;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: redColors.weakBackGround,
        padding: 10,
        justifyContent: 'center',
    },
    pokedexBody: {
        flex: 1,
        backgroundColor: redColors.title,
        borderRadius: radii.l,
        borderWidth: 4,
        borderColor: redColors.strongBackGround,
        overflow: 'hidden',

        ...Platform.select({
            ios: {
                shadowColor: basicColors.black,
                shadowOffset: { width: 0, height: 10 },
                shadowOpacity: 0.5,
                shadowRadius: 10,
            },
            android: {
                elevation: 10,
            },
        }),
    },
    topPanel: {
        flex: 0.45,
        padding: 20,
        borderBottomWidth: 4,
        borderBottomColor: redColors.strongBackGround,
        backgroundColor: redColors.title,
    },
    blueLensContainer: {
        marginBottom: 15,
    },
    blueLens: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#006eb8',
        borderWidth: 4,
        borderColor: basicColors.white,
    },
    hinge: {
        height: 30,
        backgroundColor: redColors.strongText,
        borderBottomWidth: 4,
        borderBottomColor: redColors.strongBackGround,
        justifyContent: 'center',
    },
    hingeLine: {
        height: 4,
        backgroundColor: redColors.strongBackGround,
        marginVertical: 2,
    },
    bottomPanel: {
        flex: 0.55,
        padding: 20,
        backgroundColor: redColors.title,
        justifyContent: 'flex-start',
    },
    infoScreen: {
        backgroundColor: '#51ae5f',
        borderWidth: 4,
        borderColor: '#2e6636',
        borderRadius: 10,
        minHeight: 110,
        padding: 15,
        justifyContent: 'center',
        marginBottom: 15,
    },
    pokemonName: {
        fontFamily: 'Orbitron_400Regular',
        fontSize: 16,
        color: '#111',
        marginBottom: 8,
    },
    pokemonDetails: {
        fontFamily: 'Orbitron_400Regular',
        fontSize: 10,
        color: '#111',
        marginBottom: 4,
        textTransform: 'uppercase',
    },
    systemText: {
        fontFamily: 'Orbitron_400Regular',
        fontSize: 12,
        color: '#111',
        textAlign: 'center',
    },
    favButton: {
        backgroundColor: '#f5cf5b',
        borderWidth: 2,
        borderColor: '#111',
        borderRadius: 4,
        paddingVertical: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    favButtonText: {
        fontFamily: 'Orbitron_400Regular',
        fontSize: 10,
        color: '#111',
    },
});