// DATE: 6-3-2024
// PROJECT: 56A

// UPDATES

// DEVELO
import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
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
// import {useNavigation} from '@react-navigation/native';

const CompletedDemo = () => {
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
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      {/* <GestureHandlerRootView> */}
      <ScrollView>
        <View style={{marginTop: responsiveHeight(10), gap:responsiveHeight(1)}}>
          <Image style={styles.avatarImage} source={images.checkedCoin}/>
          <Text style={styles.txt_intro}>Congratulations</Text>
          <View style={styles.familyContainer}>
            <View style={styles.FactsText}>
              <Text style={[styles.txt_intro, styles.intro_small]}>
                You've completed studying the birthdays of all available family
                members
              </Text>
              <Text style={[styles.txt_intro, styles.intro_small]}>
                Keep up the good work and check back later for new content
                updates!
              </Text>
            </View>
          </View>
          <View
            style={{
              gap: 10,
              alignSelf: 'center',
              marginTop: responsiveHeight(3),
            }}></View>
          <View>
            <SubmitButton navigate={'signin'} title={'Back to menu'} />
            <SubmitButton
              btnStyles={{backgroundColor: 'white'}}
              navigate={'signin'}
              title={'Quiz Mode'}
            />
          </View>
        </View>
        <View style={{height: responsiveHeight(9)}}></View>
      </ScrollView>
    </ImageBackground>
  );
};

export default CompletedDemo;

const styles = StyleSheet.create({
  avatarImage: {
    alignSelf: 'center',
    width: responsiveHeight(25),
    height: responsiveHeight(25),
  },
  FactsText: {
    width: responsiveWidth(80),
    gap: responsiveHeight(2),
  },

  infoText: {
    color: 'white',
    fontSize: responsiveFontSize(2.5),
    alignSelf: 'center',
  },
  infoHeading: {
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
    // fontFamily: 'Poppins-BoldItalic',
    color: 'white',
    fontSize: responsiveFontSize(2.5),
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
