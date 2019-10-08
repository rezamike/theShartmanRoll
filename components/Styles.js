import React, { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        width: '75%',
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    resultScreen: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '20%',
    },
    input: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '50%'
    },
    button: {
        width: 250,
        height: 75,
        borderRadius: 4,
        borderWidth: 5,
        borderColor: 'white',
        backgroundColor: 'transparent'
    },
    buttonClick: {
        width: 250,
        height: 75,
        borderRadius: 4,
        borderWidth: 5,
        borderColor: 'white',
        backgroundColor: 'white'
    },
    buttonText: {
        fontSize: 32,
        textAlign: 'center',
        margin: 'auto',
        width: '100%',
        height: '100%',
        fontWeight: 'bold',
        color: 'red',
        padding: 10
    }
});