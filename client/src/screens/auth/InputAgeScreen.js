import React, { useState } from 'react';
import { ImageBackground, View, Text, StyleSheet, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

export default function InputAgeScreen() {
    const [selectedAge, setSelectedAge] = useState();
    const navigation = useNavigation();
    // eslint-disable-next-line prettier/prettier
    const numbers = Array(100).fill(1).map((v, i) => i + 1);
    return (
        <ImageBackground source={require('../../../public/images/background-login.jpg')} style={styles.image}>
            <View style={styles.card}>
                <Picker selectedValue={selectedAge} onValueChange={(itemValue, itemIndex) => setSelectedAge(itemValue)}>
                    {numbers.map(i => (
                        <Picker.Item label={String(i)} value={String(i)} key={i} />
                    ))}
                </Picker>
                <Pressable style={styles.button} onPress={() => navigation.navigate('ChoiceRole')}>
                    <Text style={styles.buttonText}>Done</Text>
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
