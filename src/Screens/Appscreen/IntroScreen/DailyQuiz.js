import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Animated,
  Alert,
  ScrollView,
} from 'react-native';
import React, {
  useCallback,
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
} from 'react';
import {SubmitButton} from '../../../components/Buttons/SubmitButton';
//   import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, images} from '../../../utlies';

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
let fillValue = 75;
const DailyQuiz = () => {
  // const navigation = useNavigation();
  const [selected, setSelected] = useState(false);

  const [progress, setProgress] = useState(new Animated.Value(0));
  const [remainingSeconds, setRemainingSeconds] = useState(20);
  const [isLiked, setIsLiked] = useState([
    {id: 1, value: 'A. 19 July 3, 1962', selected: false},
    {id: 2, value: 'B. 19 July 13, 1962', selected: false},
    {id: 3, value: 'C. 19 July 18, 1962', selected: false},
    {id: 4, value: 'D. 19 July 25, 1962', selected: false},
  ]);

  const correctAnswer = '19 July 3, 1962';

  useLayoutEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 20000,
      useNativeDriver: false,
    }).start(() => {
      setSelected(true);
      Alert.alert('Loader Finished');
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingSeconds(prev => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const width = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['100%', '0%'],
    extrapolate: 'clamp',
  });

  const displayText = `${remainingSeconds}`;

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

        <View style={{marginTop: responsiveHeight(7), alignSelf: 'center'}}>
          <View style={styles.container_4}>
            <View style={styles.container_2}>
              <View>
                <Image
                  style={{
                    height: responsiveHeight(2.4),
                    width: responsiveHeight(2.4),
                  }}
                  source={images.heart}></Image>
              </View>
              <View>
                <Text style={styles.lives}>4</Text>
              </View>
            </View>
            <View style={styles.container_1}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{
                    height: responsiveHeight(2.4),
                    width: responsiveHeight(2.4),
                  }}
                  source={images.star}></Image>
              </View>
              <View>
                <Text style={{color: 'white', fontWeight: '600'}}>
                  150 Coins
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.container_3}>
            <Text style={styles.text_1}>{displayText}</Text>
            <Animated.View
              style={{
                ...StyleSheet.absoluteFill,
                borderColor: colors.primary,
                borderWidth:
                  remainingSeconds < 5 ? null : responsiveHeight(0.3),
                overflow: 'hidden',
                borderRadius: responsiveHeight(2),
                backgroundColor: colors.secondary,
                marginStart: responsiveHeight(0.2),
                alignSelf: 'center',
                width,
              }}></Animated.View>
            <Image
              style={[
                styles.icon,
                {
                  marginRight: responsiveHeight(1),
                  position: 'absolute',
                  alignSelf: 'flex-end',
                  right: responsiveWidth(1),
                },
              ]}
              source={images.clock}></Image>
          </View>

          <View style={{flexDirection: 'row', gap: responsiveHeight(2)}}>
            <View style={styles.imageContainer}>
              <Image
                style={{
                  height: responsiveHeight(14.2),
                  width: responsiveHeight(11.2),
                }}
                source={images.profile}></Image>
            </View>
            <View>
              <Text style={styles.txt_intro}>Daily Challenge</Text>
              <Text style={styles.intro_small}>Guess the birthday</Text>
              <Text style={styles.intro_small}>of Tom Cruise</Text>
            </View>
          </View>
          <View
            style={{
              gap: responsiveHeight(2),
              alignSelf: 'center',
              marginTop: responsiveHeight(3),
            }}>
            {isLiked.map((item, index) => {
              return (
                <View key={item.id} style={styles.txt_input}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={styles.optionsText}>{item.value}</Text>
                    <TouchableOpacity
                      onPress={() => {}}
                      style={styles.radioButton}>
                      <View style={styles.radioButtonIcon} />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </View>
          <View style={{marginTop: responsiveHeight(3)}}>
            <SubmitButton navigate={'Win'} title={'Submit'} />
          </View>
        </View>
      </ScrollView>
      {/* </GestureHandlerRootView> */}
    </ImageBackground>
  );
};

export default DailyQuiz;

const styles = StyleSheet.create({
  text_1: {
    color: '#000',
    fontSize: responsiveFontSize(2),
    zIndex: 9999,
    alignSelf: 'center',
    position: 'absolute',
  },
  container_4: {
    flexDirection: 'row',
    marginBottom: responsiveHeight(2.5),
    justifyContent: 'space-between',
  },
  container_3: {
    borderColor: 'white',
    borderWidth: responsiveHeight(0.5),
    borderRadius: responsiveHeight(2),
    height: responsiveHeight(4),
    // ,backgroundColor:"red",
    marginBottom: responsiveHeight(2.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_2: {
    flexDirection: 'row',
    backgroundColor: colors.secondary,
    borderRadius: responsiveHeight(3),
    justifyContent: 'center',
    alignItems: 'center',
    gap: responsiveHeight(1),
    padding: responsiveHeight(0.7),
  },
  container_1: {
    flexDirection: 'row',
    backgroundColor: 'black',
    borderRadius: responsiveHeight(3),
    justifyContent: 'center',
    alignItems: 'center',
    gap: responsiveHeight(1),
    padding: responsiveHeight(0.7),
  },
  icon: {
    height: responsiveHeight(2.4),
    width: responsiveHeight(2.4),
  },
  lives: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: responsiveFontSize(2),
  },
  radioButton: {
    height: responsiveHeight(3),
    width: responsiveHeight(3),
    borderRadius: responsiveHeight(100),
    borderWidth: 1,
    borderColor: '#E6E6E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonIcon: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: colors.primary,
  },
  optionsText: {
    color: 'white',
    fontSize: responsiveHeight(2.2),
    fontWeight: 'normal',
  },
  imageContainer: {
    height: responsiveHeight(15),
    width: responsiveHeight(12),
    borderColor: 'white',
    borderWidth: responsiveHeight(0.35),
    borderRadius: responsiveHeight(1),
    backgroundColor: colors.secondary,
    justifyContent: 'center',
  },
  text_Input: {
    color: 'white',
    paddingVertical: responsiveHeight(0.4),
    height: responsiveHeight(4),
    width: responsiveWidth(60),
    right: responsiveWidth(1),
  },
  txt_intro: {
    color: colors.secondary,
    fontFamily: 'Taviraj-Regular',
    marginBottom: responsiveHeight(2.3),
    fontSize: responsiveFontSize(2.5),
  },
  intro_small: {
    color: 'white',
    fontSize: responsiveHeight(3),
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
