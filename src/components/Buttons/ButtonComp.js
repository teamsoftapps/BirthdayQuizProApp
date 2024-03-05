import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
  useResponsiveWidth,
} from 'react-native-responsive-dimensions';

const ButtonComp = ({
  buttonstyle = {},
  text = '',
  textstyle = {},
  leftView,
  RightView,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.buttonstyle, buttonstyle]}>
      {RightView && leftView ? (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {!!leftView && <View style={{}}>{leftView}</View>}
          <View style={{}}>
            <Text
              style={[
                styles.textstyle,
                {marginHorizontal: responsiveWidth(2)},
                textstyle,
              ]}>
              {text}
            </Text>
          </View>
        </View>
      ) : (
        <>
          {!!leftView && <View style={{}}>{leftView}</View>}
          <View style={{flex: 1}}>
            <Text style={[styles.textstyle, {}, textstyle]}>{text}</Text>
          </View>
        </>
      )}

      {RightView && <View>{RightView}</View>}
    </TouchableOpacity>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  buttonstyle: {
    width: responsiveWidth(90),
    height: responsiveHeight(7),
    backgroundColor: '#fff',
    borderRadius: responsiveHeight(10),
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: responsiveWidth(4),
    justifyContent: 'space-between',
  },
  textstyle: {
    fontSize: responsiveFontSize(2.8),
    color: '#000',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});
