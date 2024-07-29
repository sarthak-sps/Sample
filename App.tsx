/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
} from 'react-native';
import LoginScreen from './src/screens/Login'
import HomeScreen from './src/screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetailScreen from './src/screens/DetailScreen';
import ContactUs from './src/screens/ContactUs';
import AboutUs from './src/screens/AboutUs';
import Products from './src/screens/Products';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from './src/screens/Profile';
import { Provider } from 'react-redux';
import store from './src/screens/redux/store';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Main' component={MyDrawer} options={{ headerShown: false }} />
      <Stack.Screen name='Detail' component={DetailScreen} />
    </Stack.Navigator>
  )

}
const MyTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        headerShown: false, tabBarIcon: () => (
          <Image source={require('../Sample/src/assets/home.png')} style={{ width: 20, height: 20 }}></Image>
        )
      }} />
      <Tab.Screen name="Contact" component={ContactUs} options={{
        headerShown: false, tabBarIcon: () => (
          <Image source={require('../Sample/src/assets/phone-call.png')} style={{ width: 20, height: 20 }}></Image>
        )
      }} />
      <Tab.Screen name="AboutUs" component={AboutUs} options={{
        headerShown: false, tabBarIcon: () => (
          <Image source={require('../Sample/src/assets/user.png')} style={{ width: 20, height: 20 }}></Image>
        )
      }} />
      <Tab.Screen name="Store" component={Products} options={{
        headerShown: false, tabBarIcon: () => (
          <Image source={require('../Sample/src/assets/store.png')} style={{ width: 20, height: 20 }}></Image>
        )
      }} />
    </Tab.Navigator>
  )
}
const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='MyTab' component={MyTab} options={{title:"Products"}} />
      <Drawer.Screen name='Profile' component={ProfileScreen} />
    </Drawer.Navigator>
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

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
    </Provider>
  );
}
