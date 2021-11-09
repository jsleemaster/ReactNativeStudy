import React, { Component, useState } from 'react';
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
    const [name, setName] = useState('smlee')

    return (
        <View style={styles.flex}>
            <Text>Hooks</Text>
            <Text>{name}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    flex: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    }
});
export default Hook;