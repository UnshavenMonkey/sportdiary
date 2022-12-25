import React, { useState } from 'react';
import { ImageBackground, View, Text, StyleSheet, TextInput, Platform, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectEmail, selectName, selectPassword, setEmail, setName, setPassword, signUp } from './SignUpScreenSlice';

export default function LoginScreen({ route }) {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const email = useSelector(selectEmail);
    const password = useSelector(selectPassword);

    const handleLogin = async () => {
        console.log('login');
        navigation.navigate('Home');
        // dispatch(signUp({ email, name, password }));
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.heading}>Login</Text>
                <View style={styles.form}>
                    <View style={styles.inputs}>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            autoCapitalize="none"
                            onChangeText={value => dispatch(setEmail(value))}
                        />
                        <TextInput
                            secureTextEntry={true}
                            style={styles.input}
                            placeholder="Password"
                            onChangeText={value => dispatch(setPassword(value))}
                        />
                        <Pressable style={styles.button} onPress={handleLogin}>
                            <Text style={styles.buttonText}>Done</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={() => navigation.navigate('StartScreen')}>
                            <Text style={styles.buttonText}>SignUp</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(210, 48, 48, 0.7)',
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
