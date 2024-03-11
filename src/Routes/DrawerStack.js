import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Results from '../Screens/Appscreen/IntroScreen/Results';
import Home from '../Screens/Appscreen/IntroScreen/Home';

import {createDrawerNavigator} from '@react-navigation/drawer';
import Bottomtabs from './Bottomtabs';
import ManageBirthday from '../Screens/Appscreen/IntroScreen/ManageBirthday';
import LeaderBoard from '../Screens/Appscreen/IntroScreen/LeaderBoard';
import Rewards from '../Screens/Appscreen/IntroScreen/Rewards';
import LearningScreen from '../Screens/Appscreen/IntroScreen/LearningScreen';

const Drawer = createDrawerNavigator();
const DrawerStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen
        name="Home1"
        component={Home}
        options={{
          drawerLabel: 'Home',
        }}
      />
      <Drawer.Screen name="ManageBirthday" component={ManageBirthday} />
      <Drawer.Screen name="LeaderBoard" component={LeaderBoard} />
      <Drawer.Screen name="Rewards" component={Rewards} />
      <Drawer.Screen name="LearningScreen" component={LearningScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerStack;

const styles = StyleSheet.create({});
