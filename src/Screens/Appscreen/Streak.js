import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import HeaderComp from '../../components/Header/HeaderComp';
import {colors, images} from '../../utlies';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Calendar} from 'react-native-calendars';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const Streak = () => {
  const [iselected, setSelected] = useState();
  const CustomArrow = ({direction, onPress}) => (
    <Text
      style={{
        fontSize: responsiveFontSize(3),
        color: '#fff',
      }}
      onPress={onPress}>
      {direction === 'right' ? '>' : '<'}
    </Text>
  );
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={{flex: 1, backgroundColor: '#715CE4'}}
      source={images.birthdayBGH}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />

      <SafeAreaView style={{flex: 1, marginHorizontal: responsiveWidth(6)}}>
        <HeaderComp
          navigation={navigation}
          LeftparentView
          RightparentView
          headerStyle={{
            marginTop: responsiveHeight(2),
          }}
          leftImageStyle={{
            width: responsiveWidth(5),
            height: responsiveHeight(5),
          }}
          RightImageStyle={{
            width: responsiveWidth(7),
            height: responsiveHeight(7),
          }}
          leftImage={images.close}
          RightImage={images.share2}
        />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{...styles.dayStreak, fontSize: responsiveFontSize(8)}}>
            0{'\n'}
            <Text style={styles.dayStreak}>day Streaks!</Text>
          </Text>

          <Image source={images.streak} style={styles.streakImage} />
        </View>

        <View style={{flex: 1}}>
          <Text style={styles.streak}>Streak Calender</Text>

          <Calendar
            hideExtraDays={true}
            renderArrow={(direction, onPress) => (
              <CustomArrow direction={direction} onPress={onPress} />
            )}
            markedDates={{
              [iselected]: {
                selected: true,
              },
            }}
            onDayPress={day => {
              console.log('selected day', day.dateString);
              setSelected(day.dateString);
            }}
            style={styles.calender}
            theme={styles.theme}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Streak;

const styles = StyleSheet.create({
  dayStreak: {
    color: '#98FF98',
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
  },

  streakImage: {
    width: responsiveWidth(40),
    height: responsiveWidth(40),
    resizeMode: 'contain',
  },

  streak: {
    color: '#fff',
    fontSize: responsiveFontSize(3),
    fontWeight: '400',
    marginTop: responsiveHeight(3),
  },
  calender: {
    marginTop: responsiveHeight(2),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  theme: {
    calendarBackground: colors.primary,
    selectedDayBackgroundColor: '#98FF98',
    selectedDayTextColor: '#000',
    todayTextColor: '#000',
    todayBackgroundColor: '#98FF98',
    todayButtonFontSize: 10,
    textDayFontWeight: 'bold',
    monthTextColor: '#fff',
    textMonthFontWeight: 'bold',
    textDayHeaderFontSize: responsiveFontSize(2),
    textSectionTitleColor: '#fff',
    textDayHeaderFontWeight: 'bold',
    textDayStyle: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: responsiveFontSize(2),
    },
  },
});
