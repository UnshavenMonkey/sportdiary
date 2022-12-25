import React, { useState } from 'react';
import { ImageBackground, View, Text, StyleSheet, Pressable, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

export default function InputAgeScreen({ route }) {
    const navigation = useNavigation();
    // eslint-disable-next-line prettier/prettier
    const numbers = Array(100).fill(1).map((v, i) => i + 1);

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../public/images/firstscreenup.jpg')} style={styles.image} />
            <View style={styles.ossView}>
                <Pressable onPress={() => navigation.navigate('InputAge')}>
                    <Text style={styles.ossText}>Oss</Text>
                </Pressable>
            </View>
            <ImageBackground source={require('../../public/images/firstscreenmidle.jpg')} style={styles.image} />
            <View style={styles.novaView}>
                <Pressable onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={styles.ossText}>NOVA</Text>
                </Pressable>
            </View>
            <ImageBackground source={require('../../public/images/firstscreendown.jpg')} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 3,
        alignItems: 'center'
    },
    ossView: {
        flex: 1,
        backgroundColor: 'rgba(210, 48, 48, 0.7)'
    },
    novaView: {
        flex: 1,
        backgroundColor: 'rgba(125, 58, 167, 1)'
    },
    ossText: {
        color: 'white',
        fontSize: 64,
        fontWeight: '600',
        textAlign: 'center'
    }
});
