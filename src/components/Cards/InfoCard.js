import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export const InfoCard = ({children, CardStyles}) => {
  return <View style={[styles.container, CardStyles]}>{children}</View>;
};
const styles = StyleSheet.create({
  btnText: {
<<<<<<< HEAD
=======

>>>>>>> 277b4e981c6edf05b1ced81597765116ba7f1977
    color: 'black',
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
    fontWeight: 'bold',
  },
  container: {
    marginTop: responsiveHeight(2),
<<<<<<< HEAD
    width: responsiveWidth(90),
    backgroundColor: '#98FF98',
    borderRadius: responsiveHeight(2),
    height: responsiveHeight(10),
=======
    width: responsiveWidth(80),
    backgroundColor: '#98FF98',
    borderRadius: responsiveHeight(2),
    height: responsiveHeight(9),
>>>>>>> 277b4e981c6edf05b1ced81597765116ba7f1977
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
