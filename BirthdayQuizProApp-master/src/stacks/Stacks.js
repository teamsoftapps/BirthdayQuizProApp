import React from 'react';
import {useState} from 'react';
import {ScrollView, View, Text, StyleSheet, StatusBar} from 'react-native';
// import Loading from './src/components/Loading/Loading';
// import IntroScreen from './src/Screens/Appscreen/IntroScreen/IntroScreen';
// import Signup from './src/Screens/Auth/Signup';
// import Signin from './src/Screens/Auth/Signin';

// import Results from './src/Screens/Appscreen/IntroScreen/Results';

// Appscreens
import Results from '../Screens/Appscreen/IntroScreen/Results';
import Win from '../Screens/Appscreen/IntroScreen/Win';
import IntroScreen from '../Screens/Appscreen/IntroScreen/IntroScreen';
import Streaks from '../Screens/Appscreen/IntroScreen/Streaks';
import DailyQuiz from '../Screens/Appscreen/IntroScreen/DailyQuiz';
import FamilyQuiz from '../Screens/Appscreen/IntroScreen/FamilyQuiz';
import Profile from '../Screens/Appscreen/IntroScreen/Profile';
import Loading from '../components/Loading/Loading';

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
    
    streaks: Profile,
    signup: Signup,
    signin: Signin,
  },
});

const AppNavigators = () => {
  <Drawer.Navigator
      // initialRouteName="Home"
    screenOptions={{
      headerShown: false,
      unmountOnBlur: true,
    }}
    //   drawerContent={props => <CoustomDrawer {...props} />
    //   }
  >
    {/* <Drawer.Screen name="Tab" component={MyTabs} /> */}
    <Drawer.Screen name="Results" component={Results} />
  </Drawer.Navigator>;
};

const Auth = createStaticNavigation(RootStack);

const AppMain = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="AppNavigators"
        component={AppNavigators}></AppStack.Screen>
    </AppStack.Navigator>
  );
};

const Stacks = () => {
  const [dummyAuthenticated, setDummyAuthenticated] = useState(true);
  return dummyAuthenticated ? <Auth /> : <AppMain />;
  // <NavigationContainer>

  //  {/* </NavigationContainer> */}
};

export default Stacks;

const styles = StyleSheet.create({});

// {/* <View style={{flex: 1}}>
// <DailyQuiz />
// {/* <Results /> */}
// {/* <Signin></Signin> */}
// {/* <Win></Win> */}
// {/* <Signup></Signup> */}
// {/* <StatusBar backgroundColor={'transparent'} translucent={true} /> */}
// {/* <IntroScreen /> */}
// {/* <Loading /> */}
// </View> */}
