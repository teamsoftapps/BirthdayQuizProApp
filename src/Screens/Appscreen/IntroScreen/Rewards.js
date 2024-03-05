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
import {InfoCard} from '../../../components/Cards/InfoCard';

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors, images} from '../../../utlies';
import {useNavigation} from '@react-navigation/native';


const Dummy_data = [
    {id:1, heading:"Quiz Master", description:"Earned for correctly{'\n'}answering the questions"},
    {id:2, heading:"Daily Challenger", description:"Earned for correctly{'\n'}answering the questions"},
    {id:3, heading:"Streak keeper", description:"Earned for correctly{'\n'}answering the questions"}
]
const Rewards = () => {
  const navigation = useNavigation();
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

      <ScrollView>
        <View
          style={{marginTop: responsiveHeight(10), gap: responsiveHeight(2)}}>
          <View>
            <Text style={styles.txt_intro}>Rewards</Text>
            <Text style={[styles.txt_intro, styles.intro_small]}>
              Explore your achievements and claim your{'\n'} rewards here!
            </Text>
          </View>
          <View
            style={{
              gap: 10,
              alignSelf: 'center',
              marginTop: responsiveHeight(3),
            }}>
            <InfoCard
              CardStyles={{
                backgroundColor: 'white',
                paddingHorizontal: responsiveHeight(3),
                height: responsiveHeight(14),
                gap: responsiveHeight(1),
              }}>
              <Text style={styles.heading}>Sign in for points</Text>
              <View style={styles.pointsContainer}>
                {/* <View style={styles.pointsContainer}> */}
                <View style={styles.iconContainer}>
                  <Image style={styles.icon} source={images.grayCoin}></Image>
                  <Text style={styles.iconTxt}>Day 1</Text>
                </View>
                <View style={styles.iconContainer}>
                  <Image style={styles.icon} source={images.goldCoin}></Image>
                  <Text style={styles.iconSeletedTxt}>Day 2</Text>
                </View>
                <View style={styles.iconContainer}>
                  <Image style={styles.icon} source={images.goldCoin}></Image>
                  <Text style={styles.iconSeletedTxt}>Day 3</Text>
                </View>
                <View style={styles.iconContainer}>
                  <Image style={styles.icon} source={images.goldCoin}></Image>
                  <Text style={styles.iconSeletedTxt}>Day 4</Text>
                </View>
                <View style={styles.iconContainer}>
                  <Image style={styles.icon} source={images.goldCoin}></Image>
                  <Text style={styles.iconSeletedTxt}>Day 5</Text>
                </View>
                <View style={styles.iconContainer}>
                  <Image style={styles.icon} source={images.goldCoin}></Image>
                  <Text style={styles.iconSeletedTxt}>Day 6</Text>
                </View>

                {/* </View> */}
              </View>
            </InfoCard>
          </View>

          <View style={styles.userContainer}>
            <View style={styles.userImageContainer}>
              <Image
                style={{
                  width: responsiveWidth(16),
                  height: responsiveWidth(16),
                }}
                source={images.menIcon}
              />
            </View>
            <View style={styles.userInfo}>
              <Text style={styles.h1}>Quiz Master</Text>
              <Text style={styles.p1}>
                Earned for correctly{'\n'}answering the questions
              </Text>
            </View>
            <TouchableOpacity style={styles.claimBtn}>
              <Text style={styles.btnText}>Claim</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{height: responsiveHeight(9)}}></View>
      </ScrollView>
      {/* </GestureHandlerRootView> */}
    </ImageBackground>
  );
};

export default Rewards;

const styles = StyleSheet.create({
    userInfo:{gap:responsiveHeight(.7)},
  h1: {
    color: colors.secondary,
    fontSize: responsiveScreenFontSize(2),
    fontWeight: '700',
    fontFamily: 'Poppins-Regular',
  },
  p1: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: responsiveFontSize(1.7),
  },
  claimBtn: {
    alignSelf: 'center',
    backgroundColor: 'yellow',
    height: responsiveHeight(4),
    justifyContent: 'center',
    paddingVertical: responsiveHeight(0.5),
    paddingHorizontal: responsiveHeight(2.5),
    borderRadius: responsiveHeight(2),
  },

  btnText: {
    fontSize: responsiveFontSize(1.7),
    color: 'black',
    fontFamily: 'Poppins-Regular',
  },

  userImageContainer: {
    overflow: 'hidden',
    backgroundColor: colors.secondary,
    width: responsiveWidth(20),
    borderRadius: responsiveHeight(2),
    justifyContent:"flex-end",
    alignItems:"center"
  },
  userContainer: {
    // justifyContent:"center",
    gap: responsiveHeight(0.5),
    // backgroundColor: 'red',
    flexDirection: 'row',
    width: responsiveWidth(80),
    height: responsiveHeight(10),
    alignSelf: 'center',
  },
  iconSeletedTxt: {
    color: '#fcaa17',
    fontSize: responsiveFontSize(1.5),
    fontFamily: 'Poppins-Regular',
  },
  iconTxt: {color: '#bdbdbd', fontFamily: 'Poppins-Regular'},
  iconContainer: {
    alignItems: 'center',
    fontSize: responsiveFontSize(1.5),
  },
  heading: {
    color: 'black',
    alignSelf: 'flex-start',
    fontWeight: '600',
    fontSize: responsiveFontSize(2),
  },
  icon: {height: responsiveHeight(5), width: responsiveHeight(5)},
  pointsContainer: {
    flexDirection: 'row',
    gap: responsiveHeight(1),
  },

  txt_intro: {
    color: colors.secondary,
    fontFamily: 'Taviraj-Regular',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: responsiveFontSize(4),
  },
  intro_small: {
    color: 'white',
    fontSize: responsiveFontSize(2),
    fontWeight: 'normal',
  },
});
