import {
  FlatList,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors, images} from '../../../utlies';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Data} from '../../../json/ManageBirthday';
import {InfoCard} from '../../../components/Cards/InfoCard';
import ButtonComp from '../../../components/Buttons/ButtonComp';
import HeaderComp from '../../../components/Header/HeaderComp';

const ManageBirthday = () => {
  const heading = () => {
    return (
      <View>
        <Text style={styles.header}>Manage Birthdays</Text>
      </View>
    );
  };

  const footer = () => {
    return (
      <View>
        <ButtonComp
          buttonstyle={{
            alignSelf: 'center',
            marginVertical: responsiveHeight(3),
          }}
          text="Add New Birthday"
          leftView={
            <View>
              <Image
                resizeMode="contain"
                source={images.add}
                style={{
                  width: responsiveWidth(15),
                  height: responsiveHeight(5),
                }}
              />
            </View>
          }
        />
      </View>
    );
  };
  return (
    <ImageBackground
      style={{flex: 1, backgroundColor: '#715CE4'}}
      source={images.birthdayBG}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#715CE4'} />

      <View>
        <FlatList
          ListHeaderComponent={heading}
          ListFooterComponent={footer}
          data={Data}
          renderItem={({item, index}) => {
            return (
              <View style={{flex: 1}}>
                <View>
                  <Text style={styles.manage}>{item.heading}</Text>
                </View>

                <View>
                  {item.persons.map((itm, i) => {
                    return (
                      <View key={i}>
                        <InfoCard
                          CardStyles={styles.cardStyles}
                          children={
                            <View>
                              <Text style={styles.name}>
                                {itm.name}
                                <Text style={styles.reamining}>
                                  {' '}
                                  {itm.reamining}
                                </Text>
                              </Text>

                              <Text style={styles.birth}>
                                {itm.dateofBirth}
                              </Text>
                            </View>
                          }
                        />
                      </View>
                    );
                  })}
                </View>
              </View>
            );
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default ManageBirthday;

const styles = StyleSheet.create({
  manage: {
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
    fontSize: responsiveFontSize(2.3),
    marginTop: responsiveHeight(4),
    marginHorizontal: responsiveWidth(5),
  },
  name: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
    color: '#000',
    marginBottom: responsiveHeight(1),
  },
  reamining: {
    fontSize: responsiveFontSize(1.8),
  },
  birth: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    color: '#715CE4',
  },
  cardStyles: {
    alignItems: 'flex-start',
    alignSelf: 'center',
    paddingHorizontal: responsiveWidth(5),
    borderRadius: responsiveHeight(1),
  },
  header: {
    alignSelf: 'center',
    marginVertical: responsiveHeight(2),
    color: '#fff',
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
  },
});
