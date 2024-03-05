/* eslint-disable prettier/prettier */

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
  ImageBackground,
} from 'react-native';
//   import React, {useContext, useEffect} from 'react';
import {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
//   import { images } from '../../Utils/constants/Themes';
import {images, colors} from '../../../utlies';
//   import LinearGradient from 'react-native-linear-gradient';
//   import {launchImageLibrary} from 'react-native-image-picker';
//   import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {TextInput} from 'react-native-gesture-handler';
import {InfoCard} from '../../../components/Cards/InfoCard';
// import { SubmitButton } from '../../../components/Buttons/SubmitButton';
//   import { updateUsersName } from '../../Utils/Api';
//   import { updatePhote } from '../../Utils/Api';
//   import { AuthContext } from '../../store/auth-context';

const CardStyles = {
  backgroundColor: 'white',
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: responsiveHeight(2),
};
const Profile = () => {
  const [imageUri, setImageUri] = useState(null);
  const [name, setName] = useState('Mark timber');
  const [editName, setEditName] = useState(false);
  // const authCtx = useContext(AuthContext);

  //    useEffect(() => {
  //     const getData = async () => {
  //       try {
  //         const [uri, name] = await Promise.all([
  //           AsyncStorage.getItem('uri'),
  //           AsyncStorage.getItem('name')
  //         ]);
  //         console.log(uri, "uri from async storage");
  //         console.log(name, "name from async storage");
  //         setImageUri(uri);
  //         setName(name);
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       }
  //     };

  //     getData();
  //   }, []);
  const handleNameEdit = () => {
    setEditName(true);
  };
  const saveName = async () => {
    await AsyncStorage.setItem('name', name.toString());
  };
  const onSavedName = async () => {
    try {
      setEditName(false);

      const res = await updateUsersName(name);
      console.log(res, 'username updated');
      saveName();
    } catch (error) {
      console.log(error);
    }
  };
  const saveImageUri = async image => {
    await AsyncStorage.setItem('uri', image.toString());
  };

  const handleOnChangeName = name => {
    setName(name);
  };

  // const openImagePicker = () => {
  //   const options = {
  //     mediaType: 'photo',
  //     includeBase64: false,
  //     maxHeight: 2000,
  //     maxWidth: 2000,
  //   };

  //   launchImageLibrary  (options, response => {
  //     if (response.didCancel) {
  //       console.log('User cancelled image picker');
  //     } else if (response.error) {
  //       console.log('Image picker error: ', response.error);
  //     } else {
  //       let imageUri = response.uri || response.assets?.[0]?.uri;
  //       setImageUri(imageUri);
  //       console.log(imageUri, "imageUri")
  //       updatePhote(imageUri);
  //       saveImageUri(imageUri)
  //     }
  //   });
  // };
  const handleLogout = () => {
    authCtx.logout();
  };
  return (
    <ImageBackground
      style={{flex: 1, backgroundColor: colors.primary}}
      source={images.birthdayBg}>
      {/* <SafeAreaView
        edges={['bottom']}
        style={{flex: 1, backgroundColor: '#F6F5F0'}}> */}
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} />
      <View
        style={{
          paddingTop: responsiveHeight(2),
        }}></View>
      <View>
        <View style={{marginTop: responsiveHeight(4)}}>
          <Image
            source={!imageUri ? images.avatar : {uri: imageUri}}
            resizeMode="cover"
            style={{
              borderRadius: responsiveHeight(100),
              marginBottom: responsiveWidth(15),
              width: responsiveWidth(50),
              height: responsiveWidth(50),
              alignSelf: 'center',
            }}
          />
          {/* </View> */}

          <Text style={styles.name}>{name ? name : 'Mark timber'}</Text>
          <Text style={styles.welcome}>24 Years</Text>
          {/* <Text style={styles.name}>{"Muhammad Ibrahim KHAN"}</Text> */}
          {editName && (
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                width: responsiveWidth(90),
                justifyContent: 'space-between',
              }}>
              <TextInput
                style={styles.TextInput}
                value={name}
                onChangeText={handleOnChangeName}
                placeholder={'Enter new Name'}></TextInput>
              <TouchableOpacity onPress={onSavedName}>
                {/* <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 2, y: 0}}
              colors={['#232323', '#020f00']}
              // style={styles.linearGradient}
              style={styles.confirm}
              >
              <Text style={[styles.loginbtnTxt]}>Confirm</Text>
            </LinearGradient> */}
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: responsiveWidth(85),
          alignSelf: 'center',
          justifyContent: 'space-between',
        }}>
        {/* <TouchableOpacity onPress={openImagePicker}> */}
        <TouchableOpacity onPress={() => {}}>
          {/* <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 2, y: 0}}
      colors={['#fff', '#fff']}
      style={styles.linearGradient}>
      <Text style={[styles.btnText]}>Upload Image</Text>
    </LinearGradient> */} 
        </TouchableOpacity>
        <TouchableOpacity>
          {/* <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 2, y: 0}}
      colors={['#fff', '#fff']}
      style={styles.linearGradient}>
      <Text onPress={handleNameEdit} style={[styles.btnText]}>
        Edit Name
      </Text>
    </LinearGradient> */}
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleLogout}>
        <InfoCard CardStyles={CardStyles}>
          <Text style={styles.cardText}>Birthday</Text>
          <Text style={styles.cardText}>26 July, 1996</Text>
        </InfoCard>
        <InfoCard CardStyles={{...CardStyles,backgroundColor:colors.secondary,}}>
          <Text style={styles.cardText}>Birthday</Text>
          <Text style={styles.cardText}>26 July, 1996</Text>
        </InfoCard>
      </TouchableOpacity>
      {/* </SafeAreaView> */}
    </ImageBackground>
  );
};

export default Profile;

const styles = StyleSheet.create({
  cardText: {
    color: 'black',
    fontWeight: '500',
    fontSize: responsiveFontSize(2),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: responsiveWidth(6),
    paddingTop: responsiveHeight(3),
  },
  buttonText: {
    fontSize: responsiveFontSize(2.8),
    fontFamily: 'Taviraj-Bold',
    color: '#000',
  },
  back: {
    height: responsiveHeight(4),
    width: responsiveWidth(8),
  },
  name: {
    color: 'white',
    fontSize: responsiveFontSize(5),
    textAlign: 'center',
    bottom: responsiveHeight(5),
  },
  welcome: {
    fontFamily: 'Taviraj-Regular',
    color: colors.secondary,
    fontSize: responsiveFontSize(2.3),
    textAlign: 'center',
    bottom: responsiveHeight(5),
  },
  linearGradient: {
    height: responsiveHeight(7),
    width: responsiveWidth(40),
    borderRadius: responsiveWidth(30),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
    borderColor: 'black',
    borderWidth: responsiveWidth(0.3),
  },
  logoutGradient: {
    height: responsiveHeight(7),
    width: responsiveWidth(85),
    borderRadius: responsiveWidth(30),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
  },
  btnText: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: 'bold',
    // color: '#fff',
    color: 'black',
  },
  loginbtnTxt: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: 'bold',
    color: '#fff',
  },
  confirm: {
    width: responsiveWidth(25),
    height: responsiveHeight(7),

    borderRadius: responsiveWidth(30),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  TextInput: {
    height: responsiveHeight(7),
    width: responsiveWidth(60),
    borderRadius: responsiveWidth(30),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: responsiveFontSize(2),
    backgroundColor: '#ebebeb',
  },
});
