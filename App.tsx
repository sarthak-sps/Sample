/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Text,
  View,
  Button,
  Image,
  TextInput,
  StyleSheet,
  FlatList
} from 'react-native';
import LoginScreen from './src/screens/Login'
import HomeScreen from './src/screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailScreen from './src/screens/DetailScreen';

const Stack = createNativeStackNavigator()
const fruit = (val: String): String => {
  console.warn(val)
  return 'Apple'
}


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Detail' component={DetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>

  )

}
const styles = StyleSheet.create({
  item: {
    fontSize: 24,
    padding: 10,
    color: "white",
    backgroundColor: "blue",
    borderBlockColor: "black",
    borderWidth: 1,
    margin: 10
  }
})

export default App;
