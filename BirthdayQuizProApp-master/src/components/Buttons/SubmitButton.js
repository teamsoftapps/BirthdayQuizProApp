import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

// export const SubmitButton = ({title, buttonStyles, key}) => {
export const SubmitButton = ({ navigate, title, btnStyles}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={()=>navigation.navigate(`${navigate}`)} style={[styles.container,btnStyles]}>
    {/* // <TouchableOpacity onPress={()=>   navigation.navigate('signin')} style={[styles.container,btnStyles]}> */}
      <Text style={[styles.btnText]}>{title}</Text>
    </TouchableOpacity>
  );
};

  // if (title === 'Signup') {
  //   return (
  //     <TouchableOpacity style={styles.signup}>
  //       <Text style={[styles.btnText]}>{title}</Text>
  //     </TouchableOpacity>
  //   );
  // }
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
    borderRadius: responsiveHeight(10),
    height: responsiveHeight(6.5),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  // signup:{
  //   marginTop: responsiveHeight(2),
  //   width: responsiveWidth(80),
  //   backgroundColor: 'white',
  //   borderRadius: responsiveHeight(10),
  //   height: responsiveHeight(6.5),
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   alignSelf: 'center',
  // }
});
