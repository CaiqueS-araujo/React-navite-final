import { StyleSheet } from 'react-native';

import { theme } from '../../../Themes/Theme';


const basicColors = theme.LightMode.Basic.colors;

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#222',
        borderWidth: 4,
        borderColor: '#111',
        borderRadius: theme.radii.s,
        padding: 15,
        maxHeight: 180,
        marginTop: 15,
    },
    title: {
        fontFamily: 'Orbitron_400Regular',
        fontSize: 12,
        color: '#ffcb05',
        marginBottom: 10,
    },
    emptyText: {
        fontFamily: 'Orbitron_400Regular',
        fontSize: 10,
        color: '#aaa',
    },
    favItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#333',
        padding: 8,
        borderRadius: 4,
        marginBottom: 8,
    },
    favInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    favId: {
        fontFamily: 'Orbitron_400Regular',
        fontSize: 10,
        color: basicColors.white,
    },
    favName: {
        fontFamily: 'Orbitron_400Regular',
        fontSize: 10,
        color: '#68baff',
    },
    actionButtons: {
        flexDirection: 'row',
        gap: 8,
    },
    editBtn: {
        backgroundColor: '#111',
        borderWidth: 1,
        borderColor: '#ffcb05',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    deleteBtn: {
        backgroundColor: '#d00',
        borderWidth: 1,
        borderColor: '#000',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    btnText: {
        color: basicColors.white,
        fontSize: 10,
        fontFamily: 'Orbitron_400Regular',
    },
    editGroup: {
        flexDirection: 'row',
        flex: 1,
        gap: 5,
        alignItems: 'center',
        marginRight: 10,
    },
    editInput: {
        flex: 1,
        backgroundColor: '#111',
        color: basicColors.white,
        borderWidth: 1,
        borderColor: '#68baff',
        borderRadius: 2,
        paddingHorizontal: 5,
        height: 30,
        fontSize: 10,
        fontFamily: 'Orbitron_400Regular',
    },
    saveBtn: {
        backgroundColor: '#51ae5f',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 2,
    }
});