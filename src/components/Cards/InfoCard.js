import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export const InfoCard = ({children, CardStyles, onPress = () => {}}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, CardStyles]}>
      {children}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btnText: {
    color: 'black',
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
    fontWeight: 'bold',
  },
  container: {
    marginTop: responsiveHeight(2),
    width: responsiveWidth(80),
    backgroundColor: '#98FF98',
    borderRadius: responsiveHeight(2),
    height: responsiveHeight(9),
    width: responsiveWidth(90),
    backgroundColor: '#98FF98',
    borderRadius: responsiveHeight(2),
    height: responsiveHeight(10),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
