import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    Button
} from 'react-native';
const Hook = () => {
    return (
        <View styles={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Hooks</Text>
        </View>
    )
}
const styles = StyleSheet.create({

});
export default Hook;