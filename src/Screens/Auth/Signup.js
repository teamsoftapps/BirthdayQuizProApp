import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {SubmitButton} from '../../components/Buttons/SubmitButton';
//   import {SafeAreaView} from 'react-native-safe-area-context';
// import { images } from '../../utlies';

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors, images} from '../../utlies';
//   import {useNavigation} from '@react-navigation/native';
//   import {AvoidSoftInput} from 'react-native-avoid-softinput';
//   import {useFocusEffect} from '@react-navigation/native';
//   import useToast from '../../Hooks';
//   import {useSignupMutation} from '../../Store/Auth';
//   import MsgModal from '../../Common/Loader';
//   import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
const Signup = () => {
  // const navigation = useNavigation();
  const [selected, setSelected] = useState(0);
  const [value, setValue] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  console.log('value.firstname', value.firstname);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // const {showToast} = useToast();
  // const [setsignup, {isError, isLoading, isSuccess, data, status}] =useSignupMutation();
  const handleSignup = async () => {
    if (!emailRegex.test(value.email)) {
      // showToast('error', 'Error', 'Enter Valid Email', 5000);
    }
    let body = {
      firstName: value.firstname,
      lastName: value.lastname,
      email: value.email,
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
  // const onFocusEffect = React.useCallback(() => {
  //   AvoidSoftInput.setShouldMimicIOSBehavior(true);
  //   AvoidSoftInput.setEnabled(true);
  //   return () => {
  //     // AvoidSoftInput.setEnabled(false);
  //     // AvoidSoftInput.setShouldMimicIOSBehavior(false);
  //   };
  // }, []);

  // useFocusEffect(onFocusEffect);

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
      {/* <ScrollView> */}
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
          }}>
          <View style={styles.txt_input}>
            <TextInput
              placeholder="First Name"
              style={{color: 'white'}}
              placeholderTextColor={'white'}
              value={value.firstname}
              onChangeText={pre => setValue(txt => ({...txt, firstname: pre}))}
            />
          </View>
          <View style={styles.txt_input}>
            <TextInput
              placeholder="Last Name"
              style={{color: 'white'}}
              placeholderTextColor={'white'}
              value={value.lastname}
              onChangeText={pre => setValue(txt => ({...txt, lastname: pre}))}
            />
          </View>
          <View style={styles.txt_input}>
            <TextInput
              placeholder="email"
              style={{color: 'white'}}
              placeholderTextColor={'white'}
              value={value.email}
              onChangeText={pre => setValue(txt => ({...txt, email: pre}))}
            />
          </View>
          <View style={styles.txt_input}>
            <Text
              style={{
                color: colors.secondary,
                position: 'relative',
                backgroundColor: 'red',
              }}>
              Password
            </Text>
            <TextInput
              placeholder="Password"
              placeholderTextColor={'white'}
              style={{
                color: 'white',
                // backgroundColor: 'black',
                height: responsiveHeight(3),
              }}
              value={value.password}
              secureTextEntry
              onChangeText={pre => setValue(txt => ({...txt, password: pre}))}
            />
          </View>
        </View>
        <SubmitButton title={'Sign Up'} />
        <View
          style={{
            width: responsiveWidth(73),
            alignSelf: 'center',
            marginTop: responsiveHeight(1),
          }}>
          <Text style={{color: 'white'}}>
            Already have an account?{' '}
            <Text style={{fontWeight: 'bold', color: colors.secondary}}>
              Sign in
            </Text>
          </Text>
        </View>
      </View>
      <View style={{height: responsiveHeight(9)}}></View>
      {/* </ScrollView> */}
      {/* </GestureHandlerRootView> */}
    </ImageBackground>
  );
};

export default Signup;

const styles = StyleSheet.create({
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
