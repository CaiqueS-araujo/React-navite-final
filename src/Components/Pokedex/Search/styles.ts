import { StyleSheet, Platform } from 'react-native';
import { theme } from '../../../Themes/Theme';

const basicColors = theme.LightMode.Basic.colors;

export const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 20,
        width: '100%',
    },
    searchInput: {
        flex: 1,
        paddingHorizontal: 15,
        height: 50,
        borderWidth: 3,
        borderColor: '#333',
        borderRadius: theme.radii.s,
        backgroundColor: basicColors.white,
        color: '#222',
        fontSize: 12,
        fontWeight: 'bold',

        ...Platform.select({
            ios: {
                shadowColor: basicColors.black,
                shadowOffset: { width: 0, height: -2 },
                shadowOpacity: 0.1,
                shadowRadius: 2,
            },
            android: {
                elevation: 2,
            },
        }),
    },
    searchButton: {
        backgroundColor: '#2e3035',
        justifyContent: 'center',
        paddingHorizontal: 20,
        borderWidth: 3,
        borderColor: basicColors.black,
        borderRadius: theme.radii.s,

        ...Platform.select({
            ios: {
                shadowColor: basicColors.black,
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 1,
                shadowRadius: 0,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    searchButtonText: {
        color: basicColors.white,
        fontSize: 12,
        fontWeight: 'bold',
    }
});