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
  headingTextStyle = {},
  LeftparentView = false,
  RightparentView = false,
}) => {
  return (
    <View
      style={[
        styles.headerStyle,
        {
          justifyContent:
            !LeftparentView && !RightparentView
              ? 'center'
              : LeftparentView && !RightparentView
              ? ''
              : 'space-between',
        },
        headerStyle,
      ]}>
      {!!LeftparentView && (
        <TouchableOpacity
          style={{flex: !!LeftparentView && !RightparentView ? 0.5 : 0}}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={leftImage ? leftImage : images.back}
            style={[styles.back, leftImageStyle]}
          />
        </TouchableOpacity>
      )}
      {heading && (
        <Text style={[styles.heading, headingTextStyle]}>{heading}</Text>
      )}
      {!!RightparentView && (
        <TouchableOpacity onPress={OptionOnpress}>
          <Image
            source={RightImage ? RightImage : images.more}
            style={[
              styles.back,
              {height: responsiveHeight(3)},
              RightImageStyle,
            ]}
          />
        </TouchableOpacity>
      )}
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
    fontSize: responsiveFontSize(2.8),
    fontWeight: 'bold',
  },
  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
