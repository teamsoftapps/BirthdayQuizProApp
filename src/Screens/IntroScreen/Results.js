import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SubmitButton} from '../../components/Buttons/SubmitButton';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors, images} from '../../utlies';
const Results = () => {
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
      <View style={{marginTop: responsiveHeight(7)}}>
        <View>
          <Text style={styles.intro_small}>QUIZ RESULTS</Text>
          <Image source={images.trophy} style={styles.winImage}></Image>
          <Text style={styles.txt_intro}>Congratulations</Text>
          <Text style={styles.txt_intro_2}>
            on completing the quiz!{'\n'}Here is your performance:
          </Text>
          <Text style={styles.txt_intro_3}>
            Correct Answers:
            <Text style={{color: colors.secondary}}> 3 out of 4</Text>
            {'\n'}
            Incorrect Answers:<Text style={{color: colors.secondary}}> 1</Text>
            {'\n'}
            Hints Used:<Text style={{color: colors.secondary}}> 1</Text>
            {'\n'}
            Hearts Remaining:<Text style={{color: colors.secondary}}> 3</Text>
            {'\n'}
          </Text>
          <Text style={styles.txt_intro}>Rewards Earned</Text>
          <Text style={styles.txt_intro_3}>You Earned</Text>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              alignItems: 'center',
              gap: responsiveHeight(0.5),
            }}>
            <Image source={images.star} style={styles.icon} />
            <Text style={styles.txt_intro}>500</Text>
          </View>
        </View>
        <SubmitButton
          btnStyles={{backgroundColor: 'white'}}
          title={'Share with friends'}
        />
        <SubmitButton title={'Return to Menu'} />
      </View>

      {/* </ScrollView> */}
      {/* </GestureHandlerRootView> */}
    </ImageBackground>
  );
};

export default Results;

const styles = StyleSheet.create({
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

//  Developed Quiz results screen UI from scratch
//
