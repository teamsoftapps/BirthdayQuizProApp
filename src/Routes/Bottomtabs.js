import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {images} from '../utlies';

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import LeaderBoard from '../Screens/Appscreen/IntroScreen/LeaderBoard';
import DrawerStack from './DrawerStack';
import Notifications from '../Screens/Appscreen/Notifications';
import Notification from '../Screens/Appscreen/IntroScreen/Notification';
import Home from '../Screens/Appscreen/IntroScreen/Home';
import { SafeAreaView } from 'react-native-safe-area-context';

const Bottomtabs = () => {
  const _renderIcon = (routeName, selectedTab) => {
    let icon = '';
    let Name = '';

    switch (routeName) {
      case 'Home':
        icon = images.home;
        Name = 'Home';
        break;
      case 'Notifications':
        icon = images.notifications;
        Name = 'Notifications';
        break;
    }

    return (
      <View style={{paddingTop: responsiveHeight(0.8)}}>
        <Image
          source={icon}
          style={{
            height: responsiveWidth(7),
            width: responsiveWidth(7),
            tintColor: routeName === selectedTab ? '#98FF98' : '#d7d7d7',
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            color: routeName === selectedTab ? '#98FF98' : '#d7d7d7',
            marginTop: responsiveHeight(1),
            fontSize: responsiveFontSize(1.5),
          }}>
          {Name}
        </Text>
      </View>
    );
  };
  const renderTabBar = ({routeName, selectedTab, navigate}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigate(routeName)}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
    edges={['bottom']}
    style={{flex: 1,backgroundColor:'black'}}>
      <CurvedBottomBar.Navigator
        screenOptions={{
          headerShown: false,
        }}
        style={styles.bottomBar}
        circleWidth={responsiveWidth(100)}
        bgColor="#000"
        initialRouteName="Home"
        borderTopLeftRight
        renderCircle={({selectedTab, navigate}) => (
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={styles.btnCircle}
              onPress={() => Alert.alert('Click Action')}>
              <Image
                source={images.trophy2}
                style={{
                  width: responsiveWidth(8),
                  height: responsiveWidth(8),
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: '#fff',
                bottom: responsiveHeight(2),
                fontSize: responsiveFontSize(1.5),
              }}>
              Start Quiz
            </Text>
          </View>
        )}
        tabBar={renderTabBar}>
        <CurvedBottomBar.Screen
          position="LEFT"
          name="Home"
          component={DrawerStack}
        />
        <CurvedBottomBar.Screen
          position="RIGHT"
          name="Notifications"
          component={Notification}
        />

        <CurvedBottomBar.Screen
          // position="RIGHT"
          name="Not"
          component={Home}
          options={{
            tabBarStyle: {
              display: 'none',
            },
          }}
        />
      </CurvedBottomBar.Navigator>
    </SafeAreaView>
  );
};

export default Bottomtabs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,backgroundColor:'black'
  },
  button: {
    marginVertical: 5,
  },
  bottomBar: {
    borderTopLeftRadius: 200,
  },
  btnCircle: {
    width: responsiveWidth(16),
    height: responsiveWidth(16),
    borderRadius: responsiveWidth(16),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#98FF98',
    bottom: responsiveHeight(4),
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 5,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  img: {
    width: 30,
    height: 30,
  },
});
