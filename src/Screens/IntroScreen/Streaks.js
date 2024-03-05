import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import {SubmitButton} from '../../components/Buttons/SubmitButton';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors, images} from '../../utlies';
const Streaks = () => {
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
        <View
          style={{
            marginTop: responsiveHeight(5),
            marginBottom: responsiveHeight(2),
          }}>
          <View>
            <Text style={styles.intro_small}>STREAKS</Text>
            <Image source={images.streak} style={styles.winImage}></Image>
            <Text style={styles.txt_intro}>Congratulations</Text>
            <Text style={styles.txt_intro_2}>
              On your{' '}
              <Text style={{fontWeight: 'bold', color: colors.secondary}}>
                1-day{' '}
              </Text>
              streak!{'\n'} Keep it up to earn even more{'\n'} rewards!
            </Text>
            <Text
              style={[
                styles.txt_intro_3,
                {fontSize: responsiveFontSize(2.8), fontWeight: '600'},
              ]}>
              Current Streak
            </Text>
            <Text style={styles.streak}>1</Text>
            <Text style={[styles.txt_intro_3, {color: colors.secondary}]}>
              Day Streaks!
            </Text>
            <Text
              style={[
                styles.txt_intro,
                {marginBottom: 0, marginTop: responsiveHeight(1.4)},
              ]}>
              Streak Rewards
            </Text>
            <Text style={styles.txt_intro_3}>
              Maintain 7 days streak to unlock
            </Text>
            <View
              style={{
                alignSelf: 'center',
                alignItems: 'center',
                gap: responsiveHeight(0.5),
                marginTop: responsiveHeight(1.4),
              }}>
              <Image source={images.star} style={styles.icon} />
              <Text style={styles.txt_intro}>500 Coins</Text>
            </View>
          </View>
          <SubmitButton
            btnStyles={{backgroundColor: 'white'}}
            title={'Share with friends'}
          />
          <SubmitButton title={'Return to Menu'} />
        </View>
      </ScrollView>
      {/* </GestureHandlerRootView> */}
    </ImageBackground>
  );
};

export default Streaks;

const styles = StyleSheet.create({
  streak: {
    marginTop: responsiveHeight(1),
    fontSize: responsiveFontSize(5),
    alignSelf: 'center',
    color: colors.secondary,
    backgroundColor: 'black',
    borderRadius: responsiveHeight(4),
    fontWeight: 'bold',
    paddingHorizontal: responsiveHeight(1),
    marginBottom: responsiveHeight(0.7),
  },
  icon: {
    height: responsiveHeight(4),
    width: responsiveHeight(4),
  },
  winImage: {
    height: responsiveHeight(20),
    width: responsiveHeight(20),
    alignSelf: 'center',
    //   position: 'absolute',
    //   zIndex: -99,
    // marginTop: responsiveHeight(10),
  },
  text_Input: {
    color: 'white',
    paddingVertical: responsiveHeight(0.4),
    height: responsiveHeight(4),
    width: responsiveWidth(60),
    right: responsiveWidth(1),
  },
  txt_intro_2: {
    marginBottom: responsiveHeight(1.2),
    fontSize: responsiveFontSize(2.5),
    color: 'white',
    textAlign: 'center',
  },
  txt_intro_3: {
    fontSize: responsiveFontSize(2.3),
    color: 'white',
    textAlign: 'center',
  },
  txt_intro: {
    marginBottom: responsiveHeight(1.4),
    color: colors.secondary,
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
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
