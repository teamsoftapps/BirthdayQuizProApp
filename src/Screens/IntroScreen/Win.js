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
const Win = () => {
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
          <Text
            style={[styles.intro_small, {marginBottom: responsiveHeight(30)}]}>
            YOU WIN !
          </Text>
          <Image source={images.winPerson} style={styles.winImage}></Image>
          <Image source={images.winIcon} style={styles.image}></Image>
          <Text style={styles.txt_intro}>Congrats</Text>
          <Text style={styles.txt_intro_2}>
            You earned <Text style={{color: colors.secondary}}>+250</Text> free
            coins
          </Text>
        </View>

        <SubmitButton
          btnStyles={{backgroundColor: 'white'}}
          title={'Share with friends'}
        />
        <SubmitButton title={'Take new Quiz'} />
      </View>

      {/* </ScrollView> */}
      {/* </GestureHandlerRootView> */}
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
    fontSize: responsiveFontSize(2),
    color: 'white',
    textAlign: 'center',
  },
  txt_intro: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    //   fontWeight: 'bold',
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
    //   marginTop: responsiveHeight(10),
  },
});
