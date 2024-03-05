import AppIntroSlider from 'react-native-app-intro-slider';

import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import {images} from '../../utlies';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {SubmitButton} from '../../components/Buttons/SubmitButton';

const slides = [
  {
    key: 1,
    title: 'Welcome To\n Birthday Quiz Pro!',
    text: "Explore Birthday Quiz Pro, where you'll test\nyour knowledge of birthdays, from family to\n celebrities! Dive into endless fun and\n excitement, earning rewards along the way",
    image: images.intro,
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Guess The Birthday Quzzes Fun & Rewards!',
    text: 'Test your knowledge with fun quizzes!Guess\nbirthdays of stars, family, and historical\nfigures to earn rewards and clind the\nleaderboard!',
    image: images.intro2,
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: images.intro,
    backgroundColor: '#22bcb5',
  },
];
const IntroScreen = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  onDone = () => {
    setShowRealApp(true);
  };

  renderItem = ({item}) => {
    console.log(item.key, 'key');
    return (
      <ImageBackground source={images.birthdayHeader} style={styles.container}>
        <Image style={styles.backgroundImages} source={images.top} />
        <Image style={styles.image} source={item.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
        {/* <SubmitButton title={""}/> */}
        {item.key === 1 ? (
          <SubmitButton title={"Let's Get Started"} />
        ) : (
          <>
            <SubmitButton title={'Signin'} />
            <SubmitButton title={'Signup'} key={item.key} />
            {/* <SubmitButton title={'Signup'} buttonStyles={{backgroundColor:"white"}} /> */}
          </>
        )}

        <Image style={styles.backgroundImages} source={images.bottom} />
      </ImageBackground>
    );
  };

  const dotStyle = {
    backgroundColor: '#98FF98',
  };
  const activeDotStyle = {
    backgroundColor: '#98FF98',
    width: responsiveWidth(5),
  };

  return (
    <AppIntroSlider
      // showNextButton={false}
      dotStyle={dotStyle}
      activeDotStyle={activeDotStyle}
      renderItem={renderItem}
      data={slides}
      onDone={onDone}
    />
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  backgroundImages: {
    width: responsiveWidth(100),
    height: responsiveHeight(40),
  },

  image: {
    height: responsiveHeight(30),
    width: responsiveHeight(30),
    alignSelf: 'center',
    marginBottom: responsiveHeight(2),
  },

  title: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: responsiveFontSize(3),
    marginBottom: responsiveHeight(2),
  },
  text: {
    textAlign: 'center',
    // backgroundColor:"red",
    color: 'white',
    alignSelf: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: '#715CE4',
    justifyContent: 'center',
  },
});
