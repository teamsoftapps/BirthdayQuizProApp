import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {images} from '../../utlies';

const HeaderComp = ({
  heading,
  navigation,
  OptionOnpress = () => {},
  leftImage,
  leftImageStyle = {},
  RightImage,
  RightImageStyle = {},
  headerStyle = {},
}) => {
  return (
    <View style={[styles.headerStyle, headerStyle]}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          source={leftImage ? leftImage : images.back}
          style={[styles.back, leftImageStyle]}
        />
      </TouchableOpacity>
      {heading && <Text style={styles.heading}>{heading}</Text>}
      <TouchableOpacity onPress={OptionOnpress}>
        <Image
          source={RightImage ? RightImage : images.more}
          style={[styles.back, {height: responsiveHeight(3)}, RightImageStyle]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderComp;

const styles = StyleSheet.create({
  back: {
    width: responsiveWidth(8),
    height: responsiveHeight(8),
    resizeMode: 'contain',
    tintColor: '#fff',
  },
  heading: {
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
    fontSize: responsiveFontSize(2.3),
    fontWeight: 'bold',
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(5),
    alignItems: 'center',
  },
});
