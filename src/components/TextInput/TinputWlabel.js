import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors, images} from '../../utlies';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const TinputWlabel = ({
  text = '',
  value,
  onChangeText,
  onPress = () => {},
  secureTextEntry,
  showImage,
  inputstyle = {},
  placeholder = '',
}) => {
  return (
    <View style={[styles.txt_input, inputstyle]}>
      <View style={{flex: 1}}>
        <Text
          style={{
            color: colors.secondary,
            fontSize: 13,
            marginTop: responsiveHeight(1),
          }}>
          {text}
        </Text>

        <TextInput
          placeholder={placeholder}
          placeholderTextColor={'white'}
          style={styles.text_Input}
          value={value}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
        />
      </View>

      {!!showImage && (
        <TouchableOpacity onPress={onPress}>
          <Image
            tintColor={'white'}
            source={showImage}
            resizeMode="contain"
            style={styles.imagestyle}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TinputWlabel;

const styles = StyleSheet.create({
  txt_input: {
    backgroundColor: colors.primary,
    height: responsiveHeight(8),
    borderWidth: responsiveWidth(0.2),
    borderColor: 'white',
    width: responsiveWidth(88),
    borderRadius: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(5),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: responsiveHeight(1),
    overflow: 'hidden',
  },
  text_Input: {
    color: 'white',
    right: responsiveWidth(1),
    fontSize: responsiveFontSize(1.5),
    paddingRight: responsiveWidth(3),
    height: responsiveHeight(5),
  },
  imagestyle: {
    height: responsiveWidth(4),
    width: responsiveWidth(4),
  },
});
