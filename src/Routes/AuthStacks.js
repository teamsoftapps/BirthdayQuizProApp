import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStaticNavigation} from '@react-navigation/native';
import Signup from '../Screens/Auth/Signup';
import Signin from '../Screens/Auth/Signin';
import IntroScreen from '../Screens/Appscreen/IntroScreen/IntroScreen';

const RootStack = createNativeStackNavigator({
  screenOptions: {
    headerShown: false,
  },
  screens: {
    introScreen: IntroScreen,
    signup: Signup,
    signin: Signin,
  },
});

export const AuthStacks = createStaticNavigation(RootStack);
