import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, View, Text, StyleSheet, Pressable } from 'react-native';

export default function ChoiceRoleScreen() {
    const navigation = useNavigation();
    return (
        <ImageBackground source={require('../../../public/images/background-login.jpg')} style={styles.image}>
            <View style={styles.card}>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Тренер</Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Спортсмен</Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Родитель</Text>
                </Pressable>
                <Pressable style={styles.buttonAlt} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonAltText}>Done</Text>
                </Pressable>
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
        width: '80%',
        marginTop: '40%',
        borderRadius: 20,
        maxHeight: 380,
        paddingBottom: '30%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
        width: '80%',
        backgroundColor: 'gray',
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '400'
    },
    buttonAlt: {
        width: '80%',
        borderWidth: 1,
        height: 40,
        borderRadius: 50,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
        backgroundColor: 'black'
    },
    buttonAltText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '400'
    }
});
