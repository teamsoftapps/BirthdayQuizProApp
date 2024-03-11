import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import React, {useCallback, useState, useEffect} from 'react';
import {InfoCard} from '../../../components/Cards/InfoCard';
// import Sound from 'react-native-sound';

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors, images} from '../../../utlies';
import {useNavigation} from '@react-navigation/native';

import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

const Dummy_data = [
  {
    id: 1,
    heading: 'Quiz Master',
    description: 'Earned for correctly\nanswering the questions',
  },
  {
    id: 2,
    heading: 'Daily Challenger',
    description: 'Earned for correctly\nanswering the questions',
  },
  {
    id: 3,
    heading: 'Streak keeper',
    description: 'Earned for correctly\nanswering the questions',
  },
  {
    id: 4,
    heading: 'Quiz Master',
    description: 'Earned for correctly\nanswering the questions',
  },
  {
    id: 5,
    heading: 'Daily Challenger',
    description: 'Earned for correctly\nanswering the questions',
  },
  {
    id: 6,
    heading: 'Streak keeper',
    description: 'Earned for correctly\nanswering the questions',
  },
  {
    id: 7,
    heading: 'Streak keeper',
    description: 'Earned for correctly\nanswering the questions',
  },
  {
    id: 8,
    heading: 'Streak keeper',
    description: 'Earned for correctly\nanswering the questions',
  },
  {
    id: 9,
    heading: 'Streak keeper',
    description: 'Earned for correctly\nanswering the questions',
  },
  {
    id: 10,
    heading: 'Streak keeper',
    description: 'Earned for correctly\nanswering the questions',
  },
];
const Rewards = () => {
  const [ringtonePlayed, setRingtonePlayed] = useState(false);
  const navigation = useNavigation();
  const [selected, setSelected] = useState(0);

  const btn = useCallback(n => {
    setSelected(n);
  }, []);

  const renderItem = ({item}) => {
    return (
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
          {/* <Text style={styles.h1}>Quiz Master</Text> */}
          <Text style={styles.h1}>{item.heading}</Text>
          <Text style={styles.p1}>{item.description}</Text>
        </View>
        <TouchableOpacity style={styles.claimBtn}>
          <Text style={styles.btnText}>Claim</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ImageBackground
      source={images.birthdayBGH}
      style={{
        flex: 1,
        backgroundColor: colors.primary,
      }}>
      <StatusBar
        translucent={true}
        barStyle={'default'}
        backgroundColor={'transparent'}
      />

      <SafeAreaView
        style={{
          gap: responsiveHeight(2),
          flex: 1,
        }}>
        <View style={{marginVertical: responsiveHeight(3)}}>
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
            </View>
          </InfoCard>
        </View>

        <FlatList
          scrollEnabled
          renderItem={renderItem}
          data={Dummy_data}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Rewards;

const styles = StyleSheet.create({
  userInfo: {gap: responsiveHeight(0.7)},
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
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  userContainer: {
    marginBottom: responsiveHeight(2),
    // justifyContent:"center",
    gap: responsiveHeight(0.5),
    // backgroundColor: 'red',
    flexDirection: 'row',
    width: responsiveWidth(80),

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
