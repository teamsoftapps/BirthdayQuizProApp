import React from 'react';
import {useState} from 'react';
import {ScrollView, View, Text, StyleSheet, StatusBar} from 'react-native';


// Appscreens
import Results from '../Screens/IntroScreen/Results';
import Win from '../Screens/IntroScreen/Win';
import IntroScreen from '../Screens/IntroScreen/IntroScreen';
import Streaks from '../Screens/IntroScreen/Streaks';
import DailyQuiz from '../Screens/IntroScreen/DailyQuiz';
import FamilyQuiz from '../Screens/IntroScreen/FamilyQuiz';
import Profile from '../Screens/IntroScreen/Profile';
import Loading from '../components/Loading/Loading';
import Rewards from '../Screens/Appscreen/IntroScreen/Rewards';
import LearningScreen from '../Screens/Appscreen/IntroScreen/LearningScreen';
import CompletedDemo from '../Screens/Appscreen/IntroScreen/CompletedDemo';
// import Notifications from '../Screens/Appscreen/Notifications';

// Auth
import Signin from '../Screens/Auth/Signin';
import Signup from '../Screens/Auth/Signup';

//  Navigation
import {
  NavigationContainer,
  createStaticNavigation,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Drawer = createDrawerNavigator();
const tab = createBottomTabNavigator();
const AppStack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator({
  // initialRouteName: 'signup',
  screenOptions: {
    headerShown: false,
  },
  screens: {
    streaks: CompletedDemo,
    // streaks: LearningScreen,
    signup: Signup,
    signin: Signin,
  },
});

const AppNavigators = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Results" component={Results} />
    </Drawer.Navigator>
  );
};

const Auth = createStaticNavigation(RootStack);
const AppMain = () => {
  return (
    <AppStack.Navigator
      // screenOptions={
      //   {
      //     // headerShown: false,
      //   }
      // }
      >
      <AppStack.Screen name='app' component={AppNavigators}></AppStack.Screen>
      {/* <AppStack.Screen name={'Signin'} component={Signin}></AppStack.Screen> */}
    </AppStack.Navigator>
  );
};

const Stacks = () => {
  const [dummyAuthenticated, setDummyAuthenticated] = useState(true);
  return  dummyAuthenticated ? (
    <Auth />
  ) : (
    <NavigationContainer>
     <AppMain></AppMain>
    </NavigationContainer>
  );

};

export default Stacks;

const styles = StyleSheet.create({});


