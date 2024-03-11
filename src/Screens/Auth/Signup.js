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
import {SubmitButton} from '../../components/Buttons/SubmitButton';
//   import {SafeAreaView} from 'react-native-safe-area-context';

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors, images} from '../../utlies';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import TinputWlabel from '../../components/TextInput/TinputWlabel';
import ButtonComp from '../../components/Buttons/ButtonComp';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const Signup = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(0);
  const [showEye, setShowEye] = useState(true);
  const [confirmShowEye, setShowConfirmEye] = useState(true);

  const [value, setValue] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmpassword: '',
  });

  console.log('value.firstname', value.firstname);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSignup = async () => {
    if (!emailRegex.test(value.email)) {
    }
    let body = {
      fullname: value.fullname,
      email: value.email,
      confirmpassword: value.confirmpassword,
      password: value.password,
    };

    try {
      const response = await setsignup(body);
      console.log(response, isError, isSuccess, status, data);

      if (response.data) {
        navigation.navigate('login');
        //   showToast('success', 'Now Login', 'Account Created', 5000);
      }
      if (response.error) {
        //   showToast('error', 'Error', response.error.data.error, 5000);
      }
    } catch (error) {
      console.log(error);
      // showToast('error', 'Error', error, 5000);
    }
  };

  const btn = useCallback(n => {
    setSelected(n);
  }, []);

  const onToggleEye = () => {
    setShowEye(!showEye);
  };

  const onToggleConfirmEye = () => {
    setShowConfirmEye(!confirmShowEye);
  };
  return (
    <ImageBackground
      source={images.birthdayBGH}
      style={{
        flex: 1,
        backgroundColor: colors.primary,
      }}>
      <StatusBar
        translucent={true}
        barStyle={'default'}
        backgroundColor={'transparent'}
      />

      <SafeAreaView
        style={{
          flex: 1,
          marginHorizontal: responsiveWidth(6),
          gap: responsiveHeight(5),
        }}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              marginTop: responsiveHeight(10),
              marginBottom: responsiveHeight(5),
            }}>
            <Text style={styles.txt_intro}>Sign Up</Text>
            <Text style={[styles.txt_intro, styles.intro_small]}>
              Create an account
            </Text>
          </View>

          <TinputWlabel text="Full Name" placeholder="Full Name" />

          <TinputWlabel
            inputstyle={{marginVertical: responsiveHeight(2)}}
            text="Email"
            placeholder="Email"
          />

          <TinputWlabel text="Password" placeholder="Password" />

          <TinputWlabel
            inputstyle={{marginVertical: responsiveHeight(2)}}
            text="Confirm Password"
            placeholder="Confirm Password"
          />

          <SubmitButton
            btnStyles={{
              width: '100%',
              backgroundColor: colors.BtnGreen,
              marginVertical: responsiveHeight(3),
              marginBottom: responsiveHeight(2),
            }}
            title={'Sign In'}
          />

          <Text
            style={{
              color: 'white',
            }}>
            Already have an account?{' '}
            <Text
              onPress={() => navigation.navigate('signin')}
              style={{fontWeight: 'bold', color: colors.secondary}}>
              Sign in
            </Text>
          </Text>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Signup;

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
