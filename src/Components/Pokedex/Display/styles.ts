import { StyleSheet } from 'react-native';
import { theme } from '../../Themes/Theme';

const basicColors = theme.LightMode.Basic.colors;

export const styles = StyleSheet.create({
    mainScreenContainer: {
        backgroundColor: '#dedede',
        borderRadius: theme.radii.m,
        borderBottomLeftRadius: 35,
        borderWidth: 10,
        borderColor: basicColors.white,
        height: 220,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    headerLights: {
        position: 'absolute',
        top: 5,
        flexDirection: 'row',
        gap: 15,
    },
    redLight: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#dc0a2d',
        borderWidth: 1,
        borderColor: basicColors.black,
    },
    systemText: {
        fontFamily: 'Orbitron_400Regular',
        fontSize: 12,
        color: '#444',
    },
    systemTextError: {
        fontFamily: 'Orbitron_400Regular',
        fontSize: 12,
        color: '#b00018',
        textAlign: 'center',
    },
    pokemonImage: {
        width: 140,
        height: 140,
        resizeMode: 'contain',
    },
    pokemonId: {
        fontFamily: 'Orbitron_400Regular',
        fontSize: 14,
        color: '#222',
        marginTop: 10,
        backgroundColor: '#bcbcbc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: theme.radii.s,
        borderWidth: 2,
        borderColor: '#8c8c8c',
        overflow: 'hidden',
    },
});