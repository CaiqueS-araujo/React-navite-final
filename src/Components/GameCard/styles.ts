import { StyleSheet, Platform } from 'react-native';
import { theme } from '../../Themes/Theme';

const blueColors = theme.LightMode.BluePattern.colors;
const basicColors = theme.LightMode.Basic.colors;
const radii = theme.radii;

export const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: blueColors.strongBackGround,
        padding: 20,
        marginVertical: 10,
        alignItems: 'center',
        borderRadius: radii.l,
        borderWidth: 2,
        borderColor: blueColors.strongText,

        ...Platform.select({
            ios: {
                shadowColor: basicColors.black,
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 6,
            },
            android: {
                elevation: 8,
            },
        }),
    },
    consoleTag: {
        fontSize: 12,
        color: blueColors.weakBackGround,
        marginBottom: 10,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    image: {
        width: 160,
        height: 160,
        borderRadius: radii.s,
        resizeMode: 'contain',
        backgroundColor: basicColors.white,
        padding: 5,
    },
    title: {
        marginTop: 15,
        fontSize: 16,
        color: basicColors.white,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    subTitle: {
        marginTop: 5,
        fontSize: 11,
        color: blueColors.weakBackGround,
    },
});

