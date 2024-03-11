import React from 'react';
import {useState} from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import MainStack from './MainStack';
import {AuthStacks} from './AuthStacks';

const Routes = () => {
  const [dummyAuthenticated, setDummyAuthenticated] = useState(true);
  return dummyAuthenticated ? (
    <AuthStacks />
  ) : (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
