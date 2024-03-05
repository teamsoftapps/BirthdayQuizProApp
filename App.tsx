import {ScrollView, View, Text, StyleSheet, StatusBar} from 'react-native';
import Loading from './src/components/Loading/Loading';
<<<<<<< HEAD
import IntroScreen from './src/Screens/IntroScreen/IntroScreen';
import Signup from './src/Screens/Auth/Signup';
import Signin from './src/Screens/Auth/Signin';
import Win from './src/Screens/IntroScreen/Win';
import DailyQuiz from './src/Screens/IntroScreen/DailyQuiz';
import Results from './src/Screens/IntroScreen/Results';
=======
import IntroScreen from './src/Screens/Appscreen/IntroScreen/IntroScreen';
import Signup from './src/Screens/Auth/Signup';
import Signin from './src/Screens/Auth/Signin';
import Win from './src/Screens/Appscreen/IntroScreen/Win';
import DailyQuiz from './src/Screens/Appscreen/IntroScreen/DailyQuiz';
import Results from './src/Screens/Appscreen/IntroScreen/Results';
>>>>>>> 277b4e981c6edf05b1ced81597765116ba7f1977
import React from 'react';

//  Navigation S  ettings

// Developed Profile screen from scratch
// Developed Manage birthdays page UI from scratch
// developed navigation basic layout

const App = () => {
  return (
    <View style={{flex: 1}}>
<<<<<<< HEAD
      {/* <DailyQuiz /> */}
      <Results />
=======
      <DailyQuiz />
      {/* <Results /> */}
>>>>>>> 277b4e981c6edf05b1ced81597765116ba7f1977
      {/* <Signin></Signin> */}
      {/* <Win></Win> */}
      {/* <Signup></Signup> */}
      {/* <StatusBar backgroundColor={'transparent'} translucent={true} /> */}
      {/* <IntroScreen /> */}
      {/* <Loading /> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
