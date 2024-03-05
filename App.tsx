import {ScrollView, View, Text, StyleSheet, StatusBar} from 'react-native';
import Loading from './src/components/Loading/Loading';
import IntroScreen from './src/Screens/Appscreen/IntroScreen/IntroScreen';
import Signup from './src/Screens/Auth/Signup';
import Signin from './src/Screens/Auth/Signin';
import Win from './src/Screens/Appscreen/IntroScreen/Win';
import DailyQuiz from './src/Screens/Appscreen/IntroScreen/DailyQuiz';
import Results from './src/Screens/Appscreen/IntroScreen/Results';
import React from 'react';

//  Navigation S  ettings

// Developed Profile screen from scratch
// Developed Manage birthdays page UI from scratch
// developed navigation basic layout

const App = () => {
  return (
    <View style={{flex: 1}}>
      <DailyQuiz />
      {/* <Results /> */}
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
