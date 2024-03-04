import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {images} from '../../utlies';

const HeaderComp = ({heading, navigation, OptionOnpress = () => {}}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: responsiveWidth(5),
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Image source={images.back} style={styles.back} />
      </TouchableOpacity>
      {heading && <Text style={styles.heading}>{heading}</Text>}
      <TouchableOpacity onPress={OptionOnpress}>
        <Image
          source={images.more}
          style={[styles.back, {height: responsiveHeight(3)}]}
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
});
