import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {WP} from '../utilities';

const CustomHeader = ({onPress, isShow, contStyle}) => {
  return (
    <View style={[styles.mainContainer, contStyle]}>
      <TouchableOpacity onPress={onPress}>
        {isShow ? (
          <Icon
            name="arrow-left"
            type="material-community"
            style={styles.iconStyle}
          />
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'transparent',
    height: WP('10'),
    width: WP('100'),
    paddingHorizontal: WP('3'),
    justifyContent: 'center',
    color: '#fff',
  },
  iconStyle: {
    width: WP('10'),
    backgroundColor: 'transparent',
    left: 0,
  },
});
