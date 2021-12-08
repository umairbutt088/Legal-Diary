import React from 'react';
import {StyleSheet, View} from 'react-native';
import {WP, colors} from '../utilities';

const UnderLine = () => {
  return (
    <View
      style={{
        width: WP('90'),
        borderColor: colors.drakBlack,
        borderWidth: WP('0.1'),
        marginVertical: WP('2'),
      }}></View>
  );
};

export default UnderLine;

const styles = StyleSheet.create({});
