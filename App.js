import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignUp from './src/components/pages/signup';
import PasswordChanger from './src/components/pages/passwordchanger';
import LoginPage from './src/components/pages/loginpage';

const Stack = createStackNavigator(
)

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage" screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={LoginPage}/>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="PasswordChanger" component={PasswordChanger} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;