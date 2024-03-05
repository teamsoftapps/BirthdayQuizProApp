import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {SubmitButton} from '../../../components/Buttons/SubmitButton';

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors, images} from '../../../utlies';
// import {useNavigation} from '@react-navigation/native';

const LearningScreen = () => {
  // const navigation = useNavigation();
  const [selected, setSelected] = useState(0);



  const btn = useCallback(n => {
    setSelected(n);
  }, []);

  return (
    <ImageBackground
      source={images.birthdayBGH}
      style={{
        flex: 1,
        backgroundColor: colors.primary,
      }}>
      <StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      {/* <GestureHandlerRootView> */}
      <ScrollView>
        {/* {isLoading ? <MsgModal loader={true} /> : null} */}

        <View style={{marginTop: responsiveHeight(20)}}>
          <View>
            <Text style={styles.txt_intro}>Sign Up</Text>
            <Text style={[styles.txt_intro, styles.intro_small]}>
              Create an account
            </Text>
          </View>
          <View
            style={{
              gap: 10,
              alignSelf: 'center',
              marginTop: responsiveHeight(3),
            }}></View>
          <SubmitButton navigate={'signin'} title={'Next'} />
          <SubmitButton navigate={'signin'} title={'Quiz Mode'} />
        </View>
        <View style={{height: responsiveHeight(9)}}></View>
      </ScrollView>
    </ImageBackground>
  );
};

export default LearningScreen;

const styles = StyleSheet.create({
  text_Input: {
    color: 'white',
    paddingVertical: responsiveHeight(0.4),
    height: responsiveHeight(4),
    width: responsiveWidth(60),
    right: responsiveWidth(1),
  },
  txt_intro: {
    color: colors.secondary,
    fontFamily: 'Taviraj-Regular',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: responsiveFontSize(4),
  },
  intro_small: {
    color: 'white',
    fontSize: responsiveHeight(3),
    fontWeight: 'normal',
  },

  btnText: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonText: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
    color: '#000',
  },

  txt_input: {
    backgroundColor: colors.primary,
    height: responsiveHeight(6.5),
    width: responsiveWidth(80),
    borderWidth: responsiveWidth(0.2),
    borderColor: 'white',
    borderRadius: responsiveWidth(2),
    justifyContent: 'center',
    paddingHorizontal: responsiveWidth(5),
  },
});
