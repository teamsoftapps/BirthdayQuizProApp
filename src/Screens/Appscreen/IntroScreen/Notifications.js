import {
  Image,
  ImageBackground,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {images} from '../../../utlies';
import HeaderComp from '../../../components/Header/HeaderComp';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import ButtonComp from '../../../components/Buttons/ButtonComp';
import ModalComp from '../../../components/Modal/ModalComp';
import {useNavigation} from '@react-navigation/native';

const Notifications = () => {
  const [isVisible, setisVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={{flex: 1, backgroundColor: '#715CE4'}}
      source={images.birthdayBG}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#715CE4'} />

      <HeaderComp
        navigation={navigation}
        headerStyle={{
          marginHorizontal: responsiveWidth(3),
          marginTop: responsiveHeight(7),
        }}
        LeftparentView
        RightparentView
        OptionOnpress={() => {
          alert('OK');
        }}
      />

      <View
        style={{
          flex: 1,
          alignItems: 'center',
          marginHorizontal: responsiveWidth(3),
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
          }}>
          <View style={styles.profile}>
            <Image source={images.user} style={styles.user} />
          </View>

          <View style={styles.edit}>
            <Image source={images.pencil} style={styles.pencil} />
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.name}>Mark Timber</Text>
          <Text style={styles.age}>24 Years</Text>
        </View>
        <ButtonComp
          buttonstyle={styles.btn1}
          leftView={<Image source={images.cake} style={styles.cake} />}
          textstyle={{fontWeight: 'normal', fontSize: 14}}
          text="Birthday"
          RightView={<Text style={{}}>26 July, 1996</Text>}
        />
        <ButtonComp
          buttonstyle={styles.btn2}
          leftView={<Image source={images.partymin} style={styles.partymin} />}
          textstyle={{fontWeight: 'normal', fontSize: 14}}
          text="Send Wishes"
          RightView={<Image source={images.share} style={styles.share} />}
        />
      </View>
      <ModalComp isVisible={isVisible} style={{}}>
        <View
          style={{
            backgroundColor: '#715CE4',
            height: responsiveHeight(30),
            width: responsiveWidth(90),
            borderRadius: responsiveWidth(5),
          }}>
          <View>
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                fontSize: responsiveFontSize(2.5),
              }}>
              Are you sure you want to delete
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              flex: 1,
            }}>
            <ButtonComp
              buttonstyle={{
                flex: 0.45,
                backgroundColor: '#d7d7d7',
                borderRadius: responsiveWidth(3),
              }}
              text="Cancel"
              textstyle={{fontWeight: 'normal'}}
            />
            <ButtonComp
              buttonstyle={{
                backgroundColor: '#98FF98',
                flex: 0.45,
                borderRadius: responsiveWidth(3),
              }}
              text="Yes"
              textstyle={{fontWeight: 'normal'}}
            />
          </View>
        </View>
      </ModalComp>
    </ImageBackground>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  pencil: {
    width: responsiveWidth(5),
    height: responsiveWidth(5),
  },
  profile: {
    height: responsiveWidth(35),
    width: responsiveWidth(35),
    backgroundColor: '#98FF98',
    borderRadius: responsiveWidth(20),
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  user: {
    width: responsiveWidth(30),
    height: responsiveWidth(30),
    alignSelf: 'center',
  },
  edit: {
    backgroundColor: '#fff',
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    borderRadius: responsiveWidth(8),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: responsiveWidth(1),
    position: 'absolute',
  },
  name: {
    color: '#fff',
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    marginTop: responsiveHeight(3),
  },
  age: {
    color: '#98FF98',
    fontSize: responsiveFontSize(2),
  },
  btn1: {
    borderRadius: responsiveWidth(4),
    height: responsiveHeight(8),
    marginTop: responsiveHeight(3),
  },
  cake: {
    width: responsiveWidth(8),
    height: responsiveHeight(8),
    resizeMode: 'contain',
  },
  btn2: {
    marginTop: responsiveHeight(2),
    borderRadius: responsiveWidth(4),
    height: responsiveHeight(8),
    backgroundColor: '#98FF98',
  },
  partymin: {
    width: responsiveWidth(8),
    height: responsiveHeight(8),
    resizeMode: 'contain',
  },
  share: {
    width: responsiveWidth(5),
    height: responsiveHeight(5),
    resizeMode: 'contain',
  },
});
