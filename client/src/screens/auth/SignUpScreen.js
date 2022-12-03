import React, { useState } from 'react';
import { ImageBackground, View, Text, StyleSheet, TextInput, Platform, Pressable } from 'react-native';

const API_URL = Platform.OS === 'ios' ? 'http://localhost:5001' : 'http://10.0.2.2:5000';

export default function SignUpScreen(props) {
    const { navigation } = props;
    return (
        <ImageBackground source={require('../../../public/images/background-login.jpg')} style={styles.image}>
            <View style={styles.card}>
                <Text style={styles.heading}>Signup</Text>
                <View style={styles.form}>
                    <View style={styles.inputs}>
                        <TextInput style={styles.input} placeholder="Email" autoCapitalize="none" />
                        <TextInput style={styles.input} placeholder="Name" />
                        <TextInput secureTextEntry={true} style={styles.input} placeholder="Password" />
                        <Pressable style={styles.button}>
                            <Text style={styles.buttonText}>Done</Text>
                        </Pressable>
                        <Pressable style={styles.buttonAlt} onPress={() => navigation.navigate('InputAge')}>
                            <Text style={styles.buttonAltText}>Sign Up</Text>
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
    inputs: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '10%'
    },
    input: {
        width: '80%',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingTop: 10,
        fontSize: 16,
        minHeight: 40
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
    },
    message: {
        fontSize: 16,
        marginVertical: '5%'
    }
});
