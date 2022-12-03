import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, View, Text, StyleSheet, Pressable } from 'react-native';

export default function ChoiceRoleScreen() {
    const navigation = useNavigation();
    return (
        <ImageBackground source={require('../public/images/background-login.jpg')} style={styles.image}>
            <View style={styles.card}>
                <View style={styles.form}>
                    <View style={styles.inputs}>
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
                </View>
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
    },
    form: {
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: '5%'
    },
    button: {
        width: '80%',
        backgroundColor: 'black',
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
        marginVertical: 5
    },
    buttonAltText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '400'
    }
});
