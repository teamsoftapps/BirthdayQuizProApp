import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors, images} from '../../utlies';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const HeaderComp2 = ({onPress = () => {}, onPressStreak = () => {}}) => {
  return (
    <View style={styles.mainStyle}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={styles.profileMainViewStyle}>
        <Image source={images.UserPro} style={styles.profileImage} />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flex: 0.88,
        }}>
        <TouchableOpacity
          onPress={onPressStreak}
          activeOpacity={0.8}
          style={styles.streakBtn}>
          <Image
            source={images.Fire}
            style={{
              width: responsiveWidth(7),
              height: responsiveWidth(7),
            }}
          />

          <Text
            style={{
              fontSize: responsiveFontSize(2),
              fontWeight: 'bold',
              color: '#000',
            }}>
            <Text>0 </Text>
            Streaks
          </Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.coinsBtn}>
          <Image
            source={images.star}
            style={{
              width: responsiveWidth(6),
              height: responsiveWidth(6),
            }}
          />

          <Text
            style={{
              fontSize: responsiveFontSize(2),
              fontWeight: 'bold',
              color: 'orange',
            }}>
            <Text>100 </Text>
            Coins
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderComp2;

const styles = StyleSheet.create({
  mainStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: responsiveHeight(2),
  },
  streakBtn: {
    backgroundColor: colors.BtnGreen,
    width: responsiveWidth(32),
    height: responsiveHeight(5),
    borderRadius: responsiveWidth(10),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: responsiveWidth(3),
  },
  coinsBtn: {
    backgroundColor: '#000',
    width: responsiveWidth(33),
    height: responsiveHeight(5.25),
    borderRadius: responsiveWidth(10),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: responsiveWidth(3),
  },
  profileMainViewStyle: {
    borderWidth: responsiveWidth(0.8),
    borderColor: '#fff',
    borderRadius: responsiveWidth(10),
    width: responsiveWidth(13),
    height: responsiveWidth(13),
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: responsiveWidth(12),
    height: responsiveWidth(12),
    borderRadius: responsiveWidth(10),
    borderColor: '#715CE4',
    borderWidth: responsiveWidth(0.8),
  },
});
