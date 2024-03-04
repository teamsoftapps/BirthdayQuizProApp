import {
  Alert,
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Home from '../Screens/Appscreen/IntroScreen/Home';
import Notifications from '../Screens/Appscreen/Notifications';
import {images} from '../utlies';

import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import ManageBirthday from '../Screens/Appscreen/IntroScreen/ManageBirthday';

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
      <View style={{alignItems: 'center'}}>
        <Image
          source={icon}
          style={{
            height: responsiveWidth(10),
            width: responsiveWidth(10),
            tintColor: routeName === selectedTab ? '#98FF98' : '#d7d7d7',
          }}
        />
        <Text
          style={{
            color: routeName === selectedTab ? '#98FF98' : '#d7d7d7',
            marginTop: responsiveHeight(1),
          }}>
          {Name}
        </Text>
      </View>

      //   <Ionicons
      //     name={icon}
      //     size={25}
      //     color={routeName === selectedTab ? 'black' : 'gray'}
      //   />
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
    <NavigationContainer>
      <CurvedBottomBar.Navigator
        screenOptions={{headerShown: false}}
        style={styles.bottomBar}
        strokeWidth={0.5}
        height={100}
        circleWidth={60}
        bgColor="#000"
        initialRouteName="Home"
        borderTopLeftRight
        swipeEnabled
        type="DOWN"
        renderCircle={({selectedTab, navigate}) => (
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={styles.btnCircle}
              onPress={() => Alert.alert('Click Action')}></TouchableOpacity>
            <Text style={{bottom: responsiveHeight(3), color: '#98FF98'}}>
              Hellotr
            </Text>
          </View>
        )}
        tabBar={renderTabBar}>
        <CurvedBottomBar.Screen
          position="LEFT"
          name="Home"
          component={ManageBirthday}
        />
        <CurvedBottomBar.Screen
          position="RIGHT"
          name="Notifications"
          component={Notifications}
        />
      </CurvedBottomBar.Navigator>
    </NavigationContainer>
  );
};

export default Bottomtabs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    marginVertical: 5,
  },
  bottomBar: {},
  btnCircle: {
    width: responsiveWidth(22),
    height: responsiveWidth(22),
    borderRadius: responsiveWidth(25),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#98FF98',

    bottom: responsiveHeight(6),
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
