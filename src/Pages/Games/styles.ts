import { StyleSheet, Platform } from 'react-native';
import { theme } from '../../Themes/Theme';

// Azul no modo claro
const currentTheme = theme.LightMode.BluePattern.colors;
const radii = theme.radii;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: currentTheme.weakBackGround,
    },
    header: {
        paddingTop: Platform.OS === 'ios' ? 50 : 40,
        paddingBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: currentTheme.strongBackGround,
        borderBottomWidth: 3,
        borderBottomColor: currentTheme.title,
    },
    titulo: {
        fontSize: 24,
        color: currentTheme.title,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    content: {
        flex: 1,
        padding: 20,
    },
    searchInput: {
        backgroundColor: currentTheme.subTitle,
        height: 50,
        borderRadius: radii.m,
        paddingHorizontal: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: currentTheme.strongText,
        color: currentTheme.weakText,
        fontSize: 16,
    },
    listContainer: {
        paddingBottom: 20,
    }
});
