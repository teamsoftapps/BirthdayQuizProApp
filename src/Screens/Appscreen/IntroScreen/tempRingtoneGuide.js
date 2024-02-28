import React, { useState, useEffect } from 'react';
import { ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native';
import Sound from 'react-native-sound';
import { SubmitButton } from '../../../components/Buttons/SubmitButton';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { colors, images } from '../../../utlies';

const Win = () => {
  const [ringtonePlayed, setRingtonePlayed] = useState(false);

  useEffect(() => {
    // Play the ringtone when the component mounts
    if (!ringtonePlayed) {
      const ringtone = new Sound('ringtone.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
          console.log('Failed to load the sound', error);
          return;
        }
        // Play the ringtone
        ringtone.play(success => {
          if (success) {
            console.log('Successfully played the ringtone');
          } else {
            console.log('Failed to play the ringtone');
          }
        });
      });

      // Stop the ringtone when component unmounts
      return () => {
        ringtone.stop();
      };
      
      // Update state to indicate that the ringtone has been played
      setRingtonePlayed(true);
    }
  }, [ringtonePlayed]);

  return (
    <ImageBackground
      source={images.birthdayBGH}
      style={{
        flex: 1,
        backgroundColor: colors.primary,
      }}
    >
      <StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <View style={{ marginTop: responsiveHeight(10) }}>
        <View>
          <Text style={[styles.intro_small, { marginBottom: responsiveHeight(30) }]}>
            YOU WIN !
          </Text>
          <Image source={images.winPerson} style={styles.winImage} />
          <Image source={images.winIcon} style={styles.image} />
          <Text style={styles.txt_intro}>Congrats</Text>
          <Text style={styles.txt_intro_2}>
            You earned <Text style={{ color: colors.secondary }}>+250</Text> free coins
          </Text>
        </View>
        <SubmitButton btnStyles={{ backgroundColor: 'white' }} title={'Share with friends'} />
        <SubmitButton title={'Take new Quiz'} />
      </View>
    </ImageBackground>
  );
};

export default Win;

const styles = StyleSheet.create({
  winImage: {
    height: responsiveHeight(50),
    width: responsiveHeight(50),
    alignSelf: 'center',
    position: 'absolute',
    zIndex: -99,
  },
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
    textAlign: 'center',
    fontSize: responsiveFontSize(4),
  },
  intro_small: {
    color: 'white',
    fontSize: responsiveFontSize(5),
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
  },
});
