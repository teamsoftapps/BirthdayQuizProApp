import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {colors, images} from '../../../utlies';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import HeaderComp from '../../../components/Header/HeaderComp';
import ButtonComp from '../../../components/Buttons/ButtonComp';
import {Dummy} from '../../../json/LaederBoardJson';

const LeaderBoard = () => {
  const [selected, setSelected] = useState(false);

  const header = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'gold',
          height: responsiveHeight(6),
          borderRadius: responsiveHeight(6),
          paddingHorizontal: responsiveWidth(5),
          marginHorizontal: responsiveWidth(2),
        }}>
        <View
          style={{
            flexDirection: 'row',
            flex: 0.7,
            justifyContent: 'space-between',
          }}>
          <Text style={{color: '#000'}}>Rank </Text>

          <Text style={{color: '#000'}}>Name & Level</Text>
        </View>
        <Text style={{color: '#000'}}>Points</Text>
      </View>
    );
  };
  return (
    <ImageBackground
      source={images.birthdayBG}
      style={{flex: 1, backgroundColor: colors.primary}}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'default'}
        translucent
      />

      <SafeAreaView
        edges={['top']}
        style={{
          flex: 1,
          marginHorizontal: responsiveWidth(3),
          gap: responsiveHeight(1.5),
        }}>
        <View>
          <HeaderComp
            heading={'LeaderBoard'}
            headerStyle={{marginTop: responsiveHeight(3)}}
          />
        </View>

        <View
          style={{
            flex: 1,
          }}>
          <View
            style={{
              width: responsiveWidth(90),
              height: responsiveHeight(6.5),
              backgroundColor: colors.BtnGreen,
              borderRadius: responsiveWidth(10),
              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: responsiveWidth(1.5),
            }}>
            <ButtonComp
              onPress={() => {
                setSelected(true);
              }}
              buttonstyle={{
                height: responsiveHeight(5),
                backgroundColor: selected ? '#000' : 'transparent',
                flex: 0.5,
              }}
              textstyle={{
                color: selected ? '#fff' : '#000',
                fontSize: responsiveFontSize(2),
                fontWeight: '500',
              }}
              text="Global"
            />
            <ButtonComp
              onPress={() => {
                setSelected(false);
              }}
              buttonstyle={{
                height: responsiveHeight(5),
                backgroundColor: !selected ? '#000' : 'transparent',
                flex: 0.5,
              }}
              textstyle={{
                color: !selected ? '#fff' : '#000',
                fontSize: responsiveFontSize(2),
                fontWeight: '500',
              }}
              text="Friends & Family"
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'center',
              marginTop: responsiveHeight(2.1),
            }}>
            <View style={{flex: 1}}>
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    width: responsiveWidth(18),
                    height: responsiveWidth(18),
                    borderRadius: responsiveWidth(20),
                    backgroundColor: colors.BtnGreen,
                    borderWidth: responsiveHeight(0.3),
                    borderColor: '#000',
                    alignItems: 'center',
                    overflow: 'hidden',
                  }}>
                  <Image
                    source={images.avatar}
                    style={{
                      width: responsiveWidth(18),
                      height: responsiveWidth(18),
                      borderRadius: responsiveWidth(20),
                    }}
                  />
                </View>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: responsiveFontSize(1.4),
                    marginTop: responsiveHeight(0.5),
                  }}>
                  Mark Timber
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: responsiveWidth(20),
                  }}>
                  <View style={{}}>
                    <Image
                      source={images.star}
                      style={{
                        width: responsiveWidth(3),
                        height: responsiveHeight(3),
                        resizeMode: 'contain',
                      }}
                    />
                  </View>
                  <View style={{marginHorizontal: responsiveWidth(0.5)}} />
                  <Text
                    numberOfLines={1}
                    style={{
                      color: '#FFD700',
                      fontSize: responsiveFontSize(1.2),
                      fontWeight: 'bold',
                    }}>
                    2154213
                  </Text>
                </View>
              </View>
              <ImageBackground
                source={images.SecondPosn}
                style={{
                  height: responsiveHeight(20),
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}>
                <Text
                  style={{
                    fontSize: responsiveFontSize(8),
                    fontWeight: 'bold',
                    bottom: responsiveHeight(0.5),
                    color: '#fff',
                  }}>
                  2
                </Text>
              </ImageBackground>
            </View>
            <View style={{flex: 1}}>
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    width: responsiveWidth(18),
                    height: responsiveWidth(18),
                    borderRadius: responsiveWidth(20),
                    backgroundColor: colors.BtnGreen,
                    borderWidth: responsiveHeight(0.3),
                    borderColor: '#000',
                    alignItems: 'center',
                    overflow: 'hidden',
                  }}>
                  <Image
                    source={images.UserPro}
                    style={{
                      width: responsiveWidth(18),
                      height: responsiveWidth(18),
                      borderRadius: responsiveWidth(20),
                    }}
                  />
                </View>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: responsiveFontSize(1.4),
                    marginTop: responsiveHeight(0.5),
                  }}>
                  Ben Stroke
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: responsiveWidth(20),
                  }}>
                  <View style={{}}>
                    <Image
                      source={images.star}
                      style={{
                        width: responsiveWidth(3),
                        height: responsiveHeight(3),
                        resizeMode: 'contain',
                      }}
                    />
                  </View>
                  <View style={{marginHorizontal: responsiveWidth(0.5)}} />
                  <Text
                    numberOfLines={1}
                    style={{
                      color: '#FFD700',
                      fontSize: responsiveFontSize(1.2),
                      fontWeight: 'bold',
                    }}>
                    3154213
                  </Text>
                </View>
              </View>
              <ImageBackground
                source={images.SecondPosn}
                style={{
                  height: responsiveHeight(25),
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  marginHorizontal: responsiveWidth(1),
                }}>
                <Text
                  style={{
                    fontSize: responsiveFontSize(12),
                    fontWeight: 'bold',
                    bottom: responsiveHeight(0.5),
                    color: '#fff',
                  }}>
                  1
                </Text>
              </ImageBackground>
            </View>
            <View style={{flex: 1}}>
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    width: responsiveWidth(18),
                    height: responsiveWidth(18),
                    borderRadius: responsiveWidth(20),
                    backgroundColor: 'gold',
                    borderWidth: responsiveHeight(0.3),
                    borderColor: '#000',
                    alignItems: 'center',
                    overflow: 'hidden',
                  }}>
                  <Image
                    source={images.familyQuizdp}
                    style={{
                      width: responsiveWidth(18),
                      height: responsiveWidth(18),
                      borderRadius: responsiveWidth(20),
                    }}
                  />
                </View>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: responsiveFontSize(1.4),
                    marginTop: responsiveHeight(0.5),
                  }}>
                  Sarah John
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: responsiveWidth(20),
                  }}>
                  <View style={{}}>
                    <Image
                      source={images.star}
                      style={{
                        width: responsiveWidth(3),
                        height: responsiveHeight(3),
                        resizeMode: 'contain',
                      }}
                    />
                  </View>
                  <View style={{marginHorizontal: responsiveWidth(0.5)}} />
                  <Text
                    numberOfLines={1}
                    style={{
                      color: '#FFD700',
                      fontSize: responsiveFontSize(1.2),
                      fontWeight: 'bold',
                    }}>
                    1154213
                  </Text>
                </View>
              </View>
              <ImageBackground
                source={images.ThirdPosn}
                style={{
                  height: responsiveHeight(16),
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}>
                <Text
                  style={{
                    fontSize: responsiveFontSize(8),
                    fontWeight: 'bold',
                    bottom: responsiveHeight(0.5),
                    color: '#fff',
                  }}>
                  3
                </Text>
              </ImageBackground>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 0.9,
            borderWidth: responsiveWidth(0.3),
            borderRadius: responsiveWidth(5),
            borderColor: '#fff',
            overflow: 'hidden',
            paddingTop: responsiveHeight(1),
          }}>
          {/* <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: 'gold',
              height: responsiveHeight(6),
              borderRadius: responsiveHeight(6),
              paddingHorizontal: responsiveWidth(5),
              marginHorizontal: responsiveWidth(2),
            }}>
            <View
              style={{
                flexDirection: 'row',
                flex: 0.7,
                justifyContent: 'space-between',
              }}>
              <Text style={{color: '#000'}}>Rank </Text>

              <Text style={{color: '#000'}}>Name & Level</Text>
            </View>
            <Text style={{color: '#000'}}>Points</Text>
          </View> */}
          <FlatList
            ListHeaderComponent={header}
            stickyHeaderIndices={[0]}
            ListFooterComponent={() => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: 'gold',
                    height: responsiveHeight(8),

                    paddingHorizontal: responsiveWidth(5),
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',

                      justifyContent: 'space-between',
                    }}>
                    <Text style={{color: '#000'}}>Rank </Text>

                    <Text style={{color: '#000'}}>Name & Level</Text>
                  </View>
                  <Text style={{color: '#000'}}>Points</Text>
                </View>
              );
            }}
            data={Dummy}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginHorizontal: responsiveWidth(2),
                  }}>
                  <View style={{flex: 0.1}}>
                    <Text
                      numberOfLines={1}
                      style={{
                        color: '#fff',
                        fontSize: responsiveFontSize(1.5),
                      }}>
                      {item.id}
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 1,
                      alignItems: 'center',
                    }}>
                    <Image
                      source={item.prof}
                      style={{
                        width: responsiveWidth(15),
                        height: responsiveWidth(15),
                      }}
                    />

                    <View style={{flex: 0.8}}>
                      <Text
                        numberOfLines={1}
                        style={{
                          color: '#fff',
                        }}>
                        {item.name}
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      height: responsiveHeight(3),
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: responsiveWidth(20),
                      backgroundColor: '#fff',
                      borderRadius: responsiveWidth(8),
                      paddingHorizontal: responsiveWidth(4),
                    }}>
                    <View style={{}}>
                      <Image
                        source={item.coin}
                        style={{
                          width: responsiveWidth(4),
                          height: responsiveHeight(4),
                          resizeMode: 'contain',
                        }}
                      />
                    </View>
                    <View style={{marginHorizontal: responsiveWidth(1)}} />
                    <Text
                      numberOfLines={1}
                      style={{
                        color: '#FFD700',
                        fontSize: responsiveFontSize(1.5),
                        fontWeight: 'bold',
                      }}>
                      {item.coinCount}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default LeaderBoard;

const styles = StyleSheet.create({});
