import React from 'react';
import { ImageBackground, View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
    return (
        <ImageBackground source={require('../../../public/images/background-login.jpg')} style={styles.image}>
            <View style={styles.card}>
                <Text style={styles.heading}>Home</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: '100%',
        alignItems: 'center'
    },
    card: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: '80%',
        marginTop: '40%',
        borderRadius: 20,
        maxHeight: 380,
        paddingBottom: '30%'
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginTop: '5%',
        marginBottom: '30%',
        color: 'black'
    }
});
