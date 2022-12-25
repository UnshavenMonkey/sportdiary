import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ImageBackground, View, Text, StyleSheet, Pressable } from 'react-native';

export default function ChoiceRoleScreen({ route }) {
    const navigation = useNavigation();
    const age = route.params.selectedAge;
    const [role, setRole] = useState({ coach: false, sportsman: false, parrent: false });
    console.log(role);
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Pressable
                    style={[styles.button, role.coach ? styles.buttoncheck : null]}
                    onPress={() => setRole({ ...role, coach: !role.coach })}>
                    <Text style={styles.buttonText}>Тренер</Text>
                </Pressable>
                <Pressable
                    style={[styles.button, role.sportsman ? styles.buttoncheck : null]}
                    onPress={() => setRole({ ...role, sportsman: !role.sportsman })}>
                    <Text style={styles.buttonText}>Спортсмен</Text>
                </Pressable>
                <Pressable
                    style={[styles.button, role.parrent ? styles.buttoncheck : null]}
                    onPress={() => setRole({ ...role, parrent: !role.parrent })}>
                    <Text style={styles.buttonText}>Родитель</Text>
                </Pressable>
                <Pressable style={styles.buttonAlt} onPress={() => navigation.navigate('SignUp', { role, age })}>
                    <Text style={styles.buttonAltText}>Done</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(210, 48, 48, 0.7)'
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
        backgroundColor: '#7D3AA7',
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5
    },
    buttoncheck: {
        backgroundColor: 'rgba(210, 85, 85, 1)'
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
