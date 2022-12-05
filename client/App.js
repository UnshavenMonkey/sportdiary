import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigations/AuthNavigator';
import { store } from './src/store'
import { Provider } from 'react-redux'

export default function App() {
    // const isSignedIn = false;
    return (
        <Provider store={store}>
            <NavigationContainer>
                <AuthNavigator />
            </NavigationContainer> 
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
