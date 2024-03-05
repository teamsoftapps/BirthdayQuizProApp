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
<<<<<<< HEAD
import {useNavigation} from '@react-navigation/native';
=======
  import {useNavigation} from '@react-navigation/native';
>>>>>>> 277b4e981c6edf05b1ced81597765116ba7f1977
//   import {AvoidSoftInput} from 'react-native-avoid-softinput';
//   import {useFocusEffect} from '@react-navigation/native';
//   import useToast from '../../Hooks';
//   import {useSignupMutation} from '../../Store/Auth';
//   import MsgModal from '../../Common/Loader';
//   import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
const Signin = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(0);
<<<<<<< HEAD
  const [showEye, setShowEye] = useState(true);
=======
  const [showEye, setShowEye] = useState(true)
>>>>>>> 277b4e981c6edf05b1ced81597765116ba7f1977
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

<<<<<<< HEAD
  const onToggleEye = () => {
    setShowEye(!showEye);
  };
=======
  const onToggleEye = ()=>{
    setShowEye(!showEye)
  }
>>>>>>> 277b4e981c6edf05b1ced81597765116ba7f1977
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

      <View style={{marginTop: responsiveHeight(10)}}>
        <View>
          <Text style={styles.intro_small}>Sign In</Text>
          <Image source={images.party} style={styles.image}></Image>
          <Text style={styles.txt_intro}>Welcome Back!</Text>
          <Text style={styles.txt_intro_2}>Signin to continue</Text>
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
<<<<<<< HEAD

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
=======
          
          <View style={styles.txt_input}>
            <View style={{flexDirection:"row" , alignItems:"center"}}>
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
              secureTextEntry={showEye?false:true}
              onChangeText={pre => setValue(txt => ({...txt, password: pre}))}
            /></View>
            {/* image */}
            <TouchableOpacity onPress={onToggleEye} >
              <Image
              tintColor={"white"}
                source={showEye? images.showEye:images.hideEye}
                resizeMode="contain"
                style={{height: responsiveHeight(2.5), width:responsiveHeight(2.5)}}
              />
            </TouchableOpacity>
>>>>>>> 277b4e981c6edf05b1ced81597765116ba7f1977
            </View>
          </View>
        </View>
        <View
          style={{
            alignItems: 'flex-end',
            width: responsiveWidth(80),
            alignSelf: 'center',
<<<<<<< HEAD
            marginTop: responsiveHeight(1.5),
            marginBottom: responsiveHeight(2),
=======
            marginTop:responsiveHeight(1.5),
            marginBottom:responsiveHeight(2)
>>>>>>> 277b4e981c6edf05b1ced81597765116ba7f1977
          }}>
          <Text style={{color: colors.secondary}}>Forget Password?</Text>
        </View>
        {/* <View  style={{backgroundColor:"red"}}> */}
<<<<<<< HEAD
        <SubmitButton title={'Sign In'} />
=======
        <SubmitButton  title={'Sign In'} />
>>>>>>> 277b4e981c6edf05b1ced81597765116ba7f1977
        {/* </View> */}
        <View
          style={{
            width: responsiveWidth(73),
            alignSelf: 'center',
            marginTop: responsiveHeight(1),
          }}>
          <Text style={{color: 'white'}}>
            Don't have an account?{' '}
<<<<<<< HEAD
            <Text
              onPress={() => navigation.navigate('signup')}
              style={{fontWeight: 'bold', color: colors.secondary}}>
=======
            <Text onPress={()=>navigation.navigate('signup')} style={{fontWeight: 'bold', color: colors.secondary}}>
>>>>>>> 277b4e981c6edf05b1ced81597765116ba7f1977
              Sign up
            </Text>
          </Text>
          {/* <Text style={{color:"white", alignSelf:"center", marginVertical:responsiveHeight(3)}} >━━━━━━━━━━ Sign in with ━━━━━━━━━━</Text>
          <View style={{flexDirection:"row"}}>
            <Image style={[styles.image,{marginTop:0, marginHorizontal:responsiveWidth(2)}]} source={images.google}/>
            <Image style={[styles.image,{marginTop:0}]} source={images.facebook}/>
            <Image style={[styles.image,{marginTop:0}]} source={images.google}/>
          </View> */}
        </View>
      </View>
      <View style={{height: responsiveHeight(9)}}></View>
      {/* </ScrollView> */}
      {/* </GestureHandlerRootView> */}
    </ImageBackground>
  );
};

export default Signin;

const styles = StyleSheet.create({
  text_Input: {
    color: 'white',
    paddingVertical: responsiveHeight(0.4),
    height: responsiveHeight(4),
    width: responsiveWidth(60),
    right: responsiveWidth(1),
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
  },
  intro_small: {
    color: colors.secondary,
    fontSize: responsiveHeight(3),
    fontWeight: 'normal',
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
    overflow: 'hidden',
    height: responsiveHeight(7),
    width: responsiveWidth(80),
    borderWidth: responsiveWidth(0.2),
    borderColor: 'white',
    borderRadius: responsiveWidth(2),
    justifyContent: 'center',
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(0.5),
  },
  image: {
    height: responsiveHeight(7),
    width: responsiveHeight(7),
    alignSelf: 'center',
    marginTop: responsiveHeight(10),
  },
});
