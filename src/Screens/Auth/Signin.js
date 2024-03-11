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
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import TinputWlabel from '../../components/TextInput/TinputWlabel';
//   import {AvoidSoftInput} from 'react-native-avoid-softinput';
//   import {useFocusEffect} from '@react-navigation/native';
//   import useToast from '../../Hooks';
//   import {useSignupMutation} from '../../Store/Auth';
//   import MsgModal from '../../Common/Loader';
//   import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
const Signin = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(0);
  const [showEye, setShowEye] = useState(true);
  const [check, setcheck] = useState(false);
  const [value, setValue] = useState({
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

  const onToggleEye = () => {
    setShowEye(!showEye);
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
        edges={['top']}
        style={{flex: 1, marginHorizontal: responsiveWidth(6)}}>
        <Text style={styles.intro_small}>Sign In</Text>

        <View style={{marginTop: responsiveHeight(3)}}>
          <Image source={images.party} style={styles.image}></Image>
          <Text style={styles.txt_intro}>Welcome Back!</Text>
          <Text style={styles.txt_intro_2}>Signin to continue</Text>
        </View>

        <View style={{marginVertical: responsiveHeight(4)}}>
          <TinputWlabel
            text="Email"
            placeholder="Email"
            showImage={images.check}
          />

          <TinputWlabel
            inputstyle={{marginTop: responsiveHeight(2)}}
            text="Password"
            placeholder="Password"
            showImage={images.check}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: responsiveHeight(2),
            }}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => {
                  setcheck(!check);
                }}
                activeOpacity={1}
                style={{
                  width: responsiveWidth(5),
                  height: responsiveHeight(2.5),
                  borderWidth: responsiveWidth(0.4),
                  borderColor: check ? '#fff' : '#d7d7d7',
                  borderRadius: responsiveWidth(1),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {check && (
                  <Image
                    source={images.check}
                    style={{
                      width: responsiveWidth(3),
                      height: responsiveWidth(3),
                      tintColor: '#fff',
                    }}
                  />
                )}
              </TouchableOpacity>
              <Text
                style={{marginHorizontal: responsiveWidth(3), color: '#fff'}}>
                Remember me
              </Text>
            </View>
            <Text style={{color: colors.BtnGreen}}>Forgot password?</Text>
          </View>
        </View>

        <View>
          <SubmitButton
            btnStyles={{width: '100%', height: responsiveHeight(8)}}
            title={'Sign In'}
          />
          <Text style={{color: 'white', marginTop: responsiveHeight(2)}}>
            Don't have an account?{' '}
            <Text
              onPress={() => navigation.navigate('signup')}
              style={{fontWeight: 'bold', color: colors.secondary}}>
              Sign up
            </Text>
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: responsiveHeight(4),
          }}>
          <Image
            source={images.line}
            style={{
              width: responsiveWidth(20),
              height: responsiveWidth(0.5),
              tintColor: '#fff',
            }}
          />
          <Text style={{color: '#fff'}}>
            {'   '}Sign in with{'   '}
          </Text>
          <Image
            source={images.line}
            style={{
              width: responsiveWidth(20),
              height: responsiveWidth(0.5),
              tintColor: '#fff',
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={images.google}
            style={{
              width: responsiveWidth(10),
              height: responsiveHeight(10),
              resizeMode: 'contain',
            }}
          />
          <Image
            source={images.facebook}
            style={{
              width: responsiveWidth(10),
              height: responsiveHeight(10),
              resizeMode: 'contain',
              marginHorizontal: responsiveWidth(10),
            }}
          />
          <Image
            source={images.linkedin}
            style={{
              width: responsiveWidth(10),
              height: responsiveHeight(10),
              resizeMode: 'contain',
            }}
          />
        </View>
      </SafeAreaView>

      {/* </ScrollView> */}
      {/* </GestureHandlerRootView> */}
    </ImageBackground>
  );
};

export default Signin;

const styles = StyleSheet.create({
  text_Input: {
    color: 'white',
    right: responsiveWidth(1),
    fontSize: responsiveFontSize(1.5),
    paddingRight: responsiveWidth(3),

    height: responsiveHeight(5),
  },
  txt_intro_2: {
    fontSize: responsiveFontSize(2),
    color: 'white',
    textAlign: 'center',
  },
  txt_intro: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: responsiveFontSize(4),
    marginTop: responsiveHeight(2),
  },
  intro_small: {
    color: colors.secondary,
    fontSize: responsiveHeight(3),
    marginVertical: responsiveHeight(4),
    textAlign: 'center',
    fontWeight: 'bold',
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
    height: responsiveHeight(8),
    borderWidth: responsiveWidth(0.2),
    borderColor: 'white',
    width: responsiveWidth(88), //
    borderRadius: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(5),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: responsiveHeight(1),
    overflow: 'hidden',
  },
  image: {
    height: responsiveHeight(7),
    width: responsiveHeight(7),
    alignSelf: 'center',
  },
});
