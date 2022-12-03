import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../screens/SignUpScreen';
import InputAgeScreen from '../screens/InputAgeScreen';
import ChoiceRoleScreen from '../screens/ChoiceRoleScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
    return (
        <Stack.Navigator initialRouteName="SignUp">
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="InputAge" component={InputAgeScreen} />
            <Stack.Screen name="ChoiceRole" component={ChoiceRoleScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({});
