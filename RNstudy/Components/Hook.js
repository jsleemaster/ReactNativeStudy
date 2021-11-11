import React, { Component, useEffect, useState } from 'react';
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
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                setUsers(users);
                setLoading(false);
            })
    })
    return (
        <View style={styles.flex}>
            <Text>Hooks</Text>
            <Button title={'이름 변경'} onPress={() => setName('변경이름')}></Button>
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