import {ScrollView, View, Text, StyleSheet, StatusBar} from 'react-native';
import Loading from './src/components/Loading/Loading';
import IntroScreen from './src/Screens/Appscreen/IntroScreen/IntroScreen';
import Signup from './src/Screens/Auth/Signup';

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <Signup></Signup> */}
      {/* <StatusBar backgroundColor={'transparent'} translucent={true} /> */}
      <IntroScreen />
      {/* <Loading /> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
