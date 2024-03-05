import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {images} from '../../utlies';

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <Image source={images.home} style={{width: 100, height: 100}} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
