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
//   import {AvoidSoftInput} from 'react-native-avoid-softinput';
//   import {useFocusEffect} from '@react-navigation/native';
//   import useToast from '../../Hooks';
//   import {useSignupMutation} from '../../Store/Auth';
//   import MsgModal from '../../Common/Loader';
//   import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
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
  // const {showToast} = useToast();
  // const [setsignup, {isError, isLoading, isSuccess, data, status}] =useSignupMutation();
  const handleSignup = async () => {
    if (!emailRegex.test(value.email)) {
      // showToast('error', 'Error', 'Enter Valid Email', 5000);
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
            }}>
            <View style={styles.txt_input}>
              <View style={{height: responsiveHeight(2)}}>
                <Text
                  style={{
                    color: colors.secondary,
                  }}>
                  Full name
                </Text>
              </View>
              <View>
                <TextInput
                  placeholder="Full name"
                  style={styles.text_Input}
                  placeholderTextColor={'white'}
                  value={value.fullname}
                  onChangeText={pre =>
                    setValue(txt => ({...txt, fullname: pre}))
                  }
                />
              </View>
            </View>
            <View style={styles.txt_input}>
              <View style={{height: responsiveHeight(2)}}>
                <Text
                  style={{
                    color: colors.secondary,
                  }}>
                  Email
                </Text>
              </View>
              <View>
                <TextInput
                  placeholder="Email"
                  style={styles.text_Input}
                  placeholderTextColor={'white'}
                  value={value.email}
                  onChangeText={pre => setValue(txt => ({...txt, email: pre}))}
                />
              </View>
            </View>

            <View style={styles.txt_input}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View>
                  {/* text */}
                  <Text
                    style={{
                      color: colors.secondary,
                      position: 'relative',
                      //   backgroundColor: 'red',
                    }}>
                    Password
                  </Text>
                  {/* password */}
                  <TextInput
                    placeholder="Password"
                    placeholderTextColor={'white'}
                    style={styles.text_Input}
                    value={value.password}
                    secureTextEntry={showEye ? false : true}
                    onChangeText={pre =>
                      setValue(txt => ({...txt, password: pre}))
                    }
                  />
                </View>
                {/* image */}
                <TouchableOpacity onPress={onToggleEye}>
                  <Image
                    tintColor={'white'}
                    source={showEye ? images.showEye : images.hideEye}
                    resizeMode="contain"
                    style={{
                      height: responsiveHeight(2.5),
                      width: responsiveHeight(2.5),
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.txt_input}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View>
                  {/* text */}
                  <Text
                    style={{
                      color: colors.secondary,
                      position: 'relative',
                      //   backgroundColor: 'red',
                    }}>
                    Confirm password
                  </Text>
                  {/* password */}
                  <TextInput
                    placeholder="Confirm password"
                    placeholderTextColor={'white'}
                    style={styles.text_Input}
                    value={value.confirmpassword}
                    secureTextEntry={confirmShowEye ? false : true}
                    onChangeText={pre =>
                      setValue(txt => ({...txt, confirmpassword: pre}))
                    }
                  />
                </View>
                {/* image */}
                <TouchableOpacity onPress={onToggleConfirmEye}>
                  <Image
                    tintColor={'white'}
                    source={confirmShowEye ? images.showEye : images.hideEye}
                    resizeMode="contain"
                    style={{
                      height: responsiveHeight(2.5),
                      width: responsiveHeight(2.5),
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* <View style={styles.txt_input}>
            <Text
              style={{
                color: colors.secondary,
                position: 'relative',
                // backgroundColor: 'red',
              }}>
              Confirm password
            </Text>
            <TextInput
              placeholder="Password"
              placeholderTextColor={'white'}
              style={{
                fontSize:responsiveHeight(5),
                color: 'white',
                // backgroundColor: 'black',
                height: responsiveHeight(3),
              }}
              value={value.password}
              secureTextEntry
              onChangeText={pre => setValue(txt => ({...txt, password: pre}))}
            />
          </View> */}
          </View>
          <SubmitButton navigate={'signin'} title={'Sign Up'} />
          <View
            style={{
              width: responsiveWidth(73),
              alignSelf: 'center',
              marginTop: responsiveHeight(1),
            }}>
            <Text style={{color: 'white'}}>
              Already have an account?{' '}
              <Text
                onPress={() => navigation.navigate('signin')}
                style={{fontWeight: 'bold', color: colors.secondary}}>
                Sign in
              </Text>
            </Text>
          </View>
        </View>
        <View style={{height: responsiveHeight(9)}}></View>
      </ScrollView>
      {/* </GestureHandlerRootView> */}
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
