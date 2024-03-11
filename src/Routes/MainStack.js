import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Bottomtabs from './Bottomtabs';
import DrawerStack from './DrawerStack';
import DailyQuiz from '../Screens/Appscreen/IntroScreen/DailyQuiz';
import Win from '../Screens/Appscreen/IntroScreen/Win';
import Streak from '../Screens/Appscreen/Streak';
import Rewards from '../Screens/Appscreen/IntroScreen/Rewards';

const AppStack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen name="app" component={Bottomtabs} />
      <AppStack.Screen name="DailyQuiz" component={DailyQuiz} />
      <AppStack.Screen name="Win" component={Win} />
      <AppStack.Screen name="Streak" component={Streak} />
      <AppStack.Screen name="Rewards" component={Rewards} />
    </AppStack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
