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
  useResponsiveFontSize,
} from 'react-native-responsive-dimensions';
import {colors, images} from '../../../utlies';


const LearningScreen = () => {

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

        <View style={{marginTop: responsiveHeight(10)}}>
          <View style={{gap: responsiveHeight(0.7)}}>
            <Text style={styles.txt_intro}>Family</Text>
            <Text style={[styles.txt_intro, styles.intro_small]}>
              Easy Level
            </Text>
            <Text style={[styles.txt_intro, styles.intro_smallGreen]}>
              Birthday 1/4
            </Text>
          </View>
          <Image style={styles.avatarImage} source={images.familyIcon}></Image>
          <View style={styles.familyContainer}>
            <Text style={styles.infoHeading}>
              Name: <Text style={styles.infoText}>Grandma</Text>
            </Text>
            <Text style={styles.infoHeading}>
              Birthday: <Text style={styles.infoText}>June 15, 1945</Text>
            </Text>
           
            <View style={styles.FactsText}>
            <Text
              style={[styles.infoHeading, {marginTop: responsiveHeight(6)}]}>
              Facts
            </Text>
              <Text style={[styles.txt_intro, styles.intro_small]}>
                Grandma is known for her delicious homemade apple pie.
              </Text>
              <Text
                style={[
                  styles.txt_intro,
                  styles.intro_small,
                  {marginBottom: responsiveHeight(6)},
                ]}>
                She loves spending time with her grandchildren and telling
                stories about the past.
              </Text>
            </View>
          </View>
          <View
            style={{
              gap: 10,
              alignSelf: 'center',
              marginTop: responsiveHeight(3),
            }}></View>
          <SubmitButton navigate={'signin'} title={'Next'} />
          <SubmitButton
            btnStyles={{backgroundColor: 'white'}}
            navigate={'signin'}
            title={'Quiz Mode'}
          />
        </View>
        <View style={{height: responsiveHeight(9)}}></View>
      </ScrollView>
    </ImageBackground>
  );
};

export default LearningScreen;

const styles = StyleSheet.create({
  avatarImage: {
    marginVertical: responsiveHeight(2),
    alignSelf: 'center',
    width: responsiveWidth(25),
    height: responsiveWidth(32),
  },
  FactsText: {
    width: responsiveWidth(80),
    gap: responsiveHeight(2),
  },

  infoText: {

    color: 'white',
    fontSize: responsiveFontSize(2.5),
    alignSelf: 'center',
    fontWeight:"normal",
  },
  infoHeading: {
    fontWeight:"600",
    color: colors.secondary,
    fontSize: responsiveFontSize(2.5),
    alignSelf: 'center',
  },
  familyContainer: {
    alignSelf: 'center',
  },
  txt_intro: {
    color: colors.secondary,
    fontFamily: 'Poppins-Regular',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: responsiveFontSize(4),
  },
  intro_smallGreen: {
    color: colors.secondary,
    fontSize: responsiveFontSize(2),
    fontWeight: 'normal',
  },
  intro_small: {
    color: 'white',
    fontSize: responsiveFontSize(2),
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
