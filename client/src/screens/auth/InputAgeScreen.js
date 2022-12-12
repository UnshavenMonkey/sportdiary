import React, { useState } from 'react';
import { ImageBackground, View, Text, StyleSheet, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

export default function InputAgeScreen({ route }) {
    const [selectedAge, setSelectedAge] = useState();
    const navigation = useNavigation();
    // eslint-disable-next-line prettier/prettier
    const numbers = Array(100).fill(1).map((v, i) => i + 1);

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Picker selectedValue={selectedAge} onValueChange={(itemValue, index) => setSelectedAge(itemValue)}>
                    {numbers.map(i => (
                        <Picker.Item label={String(i)} value={String(i)} key={i} />
                    ))}
                </Picker>
                <Pressable style={styles.button} onPress={() => navigation.navigate('ChoiceRole', { selectedAge })}>
                    <Text style={styles.buttonText}>Done</Text>
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
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: '80%',
        marginTop: '40%',
        borderRadius: 20,
        maxHeight: 380,
        paddingBottom: '30%'
    },
    button: {
        width: '80%',
        backgroundColor: 'black',
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 5
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '400'
    }
});
