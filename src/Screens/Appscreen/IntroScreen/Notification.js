import {
  FlatList,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {colors, images} from '../../../utlies';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import HeaderComp from '../../../components/Header/HeaderComp';
import {useNavigation} from '@react-navigation/native';
import {Dummy} from '../../../json/NotificationJson';

const Notification = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={images.birthdayBGH}
      style={{flex: 1, backgroundColor: colors.primary}}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'default'}
        translucent
      />

      <SafeAreaView style={{flex: 1, marginHorizontal: responsiveWidth(6)}}>
        <View style={{marginVertical: responsiveHeight(2)}}>
          <HeaderComp
            navigation={navigation}
            heading={'Notifications'}
            LeftparentView
            RightparentView
            RightImage={images.setting}
          />
        </View>

        <View>
          <FlatList
            data={Dummy}
            renderItem={({item, index}) => {
              return (
                <View
                  // onTouchEnd={() => navigation.navigate('Not', {item: item})}
                  style={{
                    height: responsiveHeight(20),
                    backgroundColor: colors.BtnGreen,
                    borderRadius: responsiveWidth(3),
                    marginVertical: responsiveHeight(2),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: responsiveHeight(1),
                    paddingHorizontal: responsiveWidth(5),
                  }}>
                  <View
                    style={{
                      backgroundColor: '#fff',
                      padding: 2,
                      borderRadius: responsiveWidth(10),
                      width: responsiveWidth(8),
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: responsiveWidth(8),
                    }}>
                    <Image
                      source={item.icon}
                      style={{
                        resizeMode: 'contain',
                        width: responsiveWidth(5),
                        height: responsiveWidth(5),
                      }}
                    />
                  </View>

                  <View style={{flex: 1}}>
                    <Text
                      style={{fontSize: 16, color: '#000', fontWeight: '500'}}>
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        marginVertical: responsiveHeight(1),
                      }}>
                      {item.desc}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        color: 'purple',
                        fontWeight: '500',
                      }}>
                      {item.mark}
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: 'purple',
                      fontWeight: '500',
                    }}>
                    {item.time}
                  </Text>
                </View>
              );
            }}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Notification;

const styles = StyleSheet.create({});
