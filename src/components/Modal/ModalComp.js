import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';

const ModalComp = ({
  children,
  style,
  isVisible,
  onBackdropPress = () => {},
}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
      style={{style}}>
      <View>{children}</View>
    </Modal>
  );
};

export default ModalComp;

const styles = StyleSheet.create({});
