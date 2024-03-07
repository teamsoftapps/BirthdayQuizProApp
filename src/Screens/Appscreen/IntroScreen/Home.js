import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {colors, images} from '../../../utlies';
import HeaderComp2 from '../../../components/Header/HeaderComp2';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {dammy} from '../../../json/HomeJson';
import ButtonComp from '../../../components/Buttons/ButtonComp';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Results from './Results';
import All from './All';
import Family from './Family';
import Friends from './Friends';
import CelebandHist from './CelebandHist';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();
const Home = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={images.birthdayBG}
      style={{
        flex: 1,
        backgroundColor: colors.primary,
      }}>
      <StatusBar
        barStyle={'default'}
        backgroundColor={'transparent'}
        translucent
      />
      <SafeAreaView
        edges={['top']}
        style={{flex: 1, marginHorizontal: responsiveWidth(3), gap: 2}}>
        <View style={{flex: 1, overflow: 'hidden'}}>
          <HeaderComp2
            onPressStreak={() => {
              navigation.navigate('Streak');
            }}
            onPress={() => {
              navigation.openDrawer();
            }}
          />

          <Text
            style={{
              color: '#fff',
              fontWeight: '500',
              fontSize: responsiveFontSize(2),
            }}>
            Good Morning Max!
          </Text>

          <Text
            style={{
              fontSize: responsiveFontSize(3),
              fontWeight: 'bold',
              color: colors.BtnGreen,
              marginVertical: responsiveHeight(0.5),
            }}>
            Daily Challenge
          </Text>

          <Text
            style={{
              color: '#fff',
              fontWeight: '500',
              fontSize: responsiveFontSize(2),
            }}>
            Complete daily challenge to maintain streak
          </Text>

          <View>
            <FlatList
              style={{marginTop: responsiveHeight(1)}}
              horizontal
              data={dammy}
              renderItem={({item, index}) => {
                const even = index % 2;
                console.log('EVEN', even);
                return (
                  <View
                    key={index}
                    style={{
                      height: responsiveHeight(22),
                      width: responsiveWidth(80),
                      backgroundColor: even ? 'powderblue' : colors.BtnGreen,
                      borderRadius: responsiveWidth(5),
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingHorizontal: responsiveWidth(3),
                      marginHorizontal: responsiveWidth(2),
                    }}>
                    <View
                      style={{
                        elevation: 5,
                        borderWidth: responsiveWidth(0.5),
                        borderColor: '#fff',
                        width: responsiveWidth(30),
                        height: responsiveWidth(35),
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        borderRadius: responsiveWidth(5),
                        backgroundColor: colors.BtnGreen,
                        overflow: 'hidden',
                      }}>
                      <Image
                        source={item.profilePic}
                        style={{
                          width: responsiveWidth(30),
                          height: responsiveWidth(35),
                        }}
                      />
                    </View>

                    <View
                      style={{
                        justifyContent: 'space-between',
                        height: responsiveWidth(35),
                        flex: 0.9,
                      }}>
                      <Text
                        numberOfLines={3}
                        style={{
                          fontSize: responsiveFontSize(2.5),
                          fontWeight: 'bold',
                          color: '#000',
                        }}>
                        {item.Desc}
                      </Text>

                      <ButtonComp
                        onPress={() => {
                          navigation.navigate('DailyQuiz');
                        }}
                        textstyle={{
                          color: colors.BtnGreen,
                          fontWeight: '400',
                          fontSize: responsiveFontSize(2.2),
                        }}
                        text="Guess Now"
                        buttonstyle={{
                          backgroundColor: '#000',
                          width: responsiveWidth(35),
                          height: responsiveHeight(5),
                        }}
                      />
                    </View>
                  </View>
                );
              }}
            />
          </View>

          <Text
            style={{
              fontSize: responsiveFontSize(3),
              fontWeight: '600',
              color: '#fff',
              marginVertical: responsiveHeight(2),
            }}>
            Upcoming Birthdays
          </Text>
        </View>

        <View style={{flex: 1}}>
          <Tab.Navigator
            screenOptions={{
              swipeEnabled: true,
              tabBarStyle: {
                backgroundColor: 'transparent',
              },
              tabBarScrollEnabled: true,
              tabBarIndicatorStyle: {backgroundColor: 'transparent'},
              tabBarItemStyle: {
                width:
                  Tab.Screen === 'Celebrities & Historical Figures' ? '' : null,
              },
            }}>
            <Tab.Screen
              options={{
                tabBarLabel: ({focused, color}) => (
                  <View>
                    <View
                      style={{
                        backgroundColor: focused ? '#fff' : 'transparent',
                        borderRadius: responsiveWidth(5),
                        paddingHorizontal: responsiveWidth(5),
                        paddingVertical: responsiveHeight(0.5),
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: responsiveWidth(20),
                      }}>
                      <Text style={{color: focused ? '#000' : '#fff'}}>
                        All
                      </Text>
                    </View>
                  </View>
                ),
              }}
              name="All"
              component={() => {
                return (
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: 'red',
                      zIndex: -999999999,
                    }}></View>
                );
              }}
            />
            <Tab.Screen
              options={{
                tabBarLabel: ({focused, color}) => (
                  <View
                    style={{
                      backgroundColor: focused ? '#fff' : 'transparent',
                      borderRadius: responsiveWidth(5),
                      paddingVertical: responsiveHeight(0.5),
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: responsiveWidth(20),
                    }}>
                    <Text style={{color: focused ? '#000' : '#fff'}}>
                      Family
                    </Text>
                  </View>
                ),
              }}
              name="Family"
              component={Family}
            />
            <Tab.Screen
              options={{
                tabBarLabel: ({focused, color}) => (
                  <View
                    style={{
                      backgroundColor: focused ? '#fff' : 'transparent',
                      borderRadius: responsiveWidth(5),
                      paddingVertical: responsiveHeight(0.5),
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: responsiveWidth(20),
                    }}>
                    <Text style={{color: focused ? '#000' : '#fff'}}>
                      Friends
                    </Text>
                  </View>
                ),
              }}
              name="Friends"
              component={Friends}
            />
            <Tab.Screen
              options={{
                tabBarLabel: ({focused, color}) => (
                  <View
                    style={{
                      backgroundColor: focused ? '#fff' : 'transparent',
                      borderRadius: responsiveWidth(5),
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: responsiveWidth(60),
                      paddingVertical: responsiveHeight(0.5),
                      // left: responsiveWidth(10),
                    }}>
                    <Text
                      style={{
                        color: focused ? '#000' : '#fff',
                        // fontSize: responsiveFontSize(1.5),
                      }}>
                      Celebrities & Historical Figures
                    </Text>
                  </View>
                ),
              }}
              name="Celebrities & Historical Figures"
              component={CelebandHist}
            />
          </Tab.Navigator>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({});
