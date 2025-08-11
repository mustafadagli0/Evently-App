import * as React from 'react';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from './src/screens/LoginPage';
import SignUpPage from './src/screens/SignUpPage';
import { StyleSheet } from 'react-native';


const RootStack = createNativeStackNavigator({
  screens: {
    Login: {
      screen: LoginPage,
      options: {title: 'Login'},
    },
    SignUp: {
      screen: SignUpPage,
      options: {title: 'Sign Up'},
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

const App = () => {
  return (
    <Navigation/>
  )
}

export default App

const styles = StyleSheet.create({})