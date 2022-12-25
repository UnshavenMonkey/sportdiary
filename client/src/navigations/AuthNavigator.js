import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignUpScreen, InputAgeScreen, ChoiceRoleScreen, HomeScreen, StartScreen, LoginScreen } from '../screens';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
    return (
        <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="StartScreen"
                component={StartScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="InputAge"
                component={InputAgeScreen}
                options={{
                    headerStyle: {
                        backgroundColor: 'rgba(210, 48, 48, 0.7)'
                    }
                }}
            />
            <Stack.Screen
                name="ChoiceRole"
                component={ChoiceRoleScreen}
                options={{
                    headerStyle: {
                        backgroundColor: 'rgba(210, 48, 48, 0.7)'
                    }
                }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{
                    headerStyle: {
                        backgroundColor: 'rgba(210, 48, 48, 0.7)'
                    }
                }}
            />
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({});
