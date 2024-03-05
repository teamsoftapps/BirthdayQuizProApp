import React from 'react';
import {useState} from 'react';
import {ScrollView, View, Text, StyleSheet, StatusBar} from 'react-native';
// import Loading from './src/components/Loading/Loading';
// import IntroScreen from './src/Screens/Appscreen/IntroScreen/IntroScreen';
// import Signup from './src/Screens/Auth/Signup';
// import Signin from './src/Screens/Auth/Signin';

// import Results from './src/Screens/Appscreen/IntroScreen/Results';

// Appscreens
<<<<<<< HEAD
import Results from '../Screens/IntroScreen/Results';
import Win from '../Screens/IntroScreen/Win';
import IntroScreen from '../Screens/IntroScreen/IntroScreen';
import Streaks from '../Screens/IntroScreen/Streaks';
import DailyQuiz from '../Screens/IntroScreen/DailyQuiz';
import FamilyQuiz from '../Screens/IntroScreen/FamilyQuiz';
import Profile from '../Screens/IntroScreen/Profile';
import Loading from '../components/Loading/Loading';
=======
import Results from '../Screens/Appscreen/IntroScreen/Results';
import Win from '../Screens/Appscreen/IntroScreen/Win';
import IntroScreen from '../Screens/Appscreen/IntroScreen/IntroScreen';
import Streaks from '../Screens/Appscreen/IntroScreen/Streaks';
import DailyQuiz from '../Screens/Appscreen/IntroScreen/DailyQuiz';
import FamilyQuiz from '../Screens/Appscreen/IntroScreen/FamilyQuiz';
import Profile from '../Screens/Appscreen/IntroScreen/Profile';
import Loading from '../components/Loading/Loading';
import Rewards from '../Screens/Appscreen/IntroScreen/Rewards';
>>>>>>> 277b4e981c6edf05b1ced81597765116ba7f1977

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
<<<<<<< HEAD
    streaks: Profile,
    // streakss: Results,
    signup: Signup,
    signin: Signin,
=======
    
    streaks:Rewards ,
    signup: Signup,
    signin: Signin,  
>>>>>>> 277b4e981c6edf05b1ced81597765116ba7f1977
  },
});

const AppNavigators = () => {
  <Drawer.Navigator
<<<<<<< HEAD
    // initialRouteName="Home"
=======
      // initialRouteName="Home"
>>>>>>> 277b4e981c6edf05b1ced81597765116ba7f1977
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
<<<<<<< HEAD

=======
>>>>>>> 277b4e981c6edf05b1ced81597765116ba7f1977
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
