import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {size, WP} from '../utilities';

const CustomHeader = ({
  onPress,
  isShow,
  contStyle,
  title,
  isTitle,
  isShowMenu,
}) => {
  return (
    <View style={[styles.mainContainer, contStyle]}>
      <TouchableOpacity onPress={onPress}>
        {isShow ? (
          <View style={styles.iconContainerStyle}>
            <Icon
              name="arrow-left"
              type="material-community"
              style={styles.iconStyle}
            />
          </View>
        ) : null}
      </TouchableOpacity>
      {isTitle ? (
        <View style={styles.titleContainerStyle}>
          <Text style={styles.titleTextStyle}>{title}</Text>
        </View>
      ) : null}
      <TouchableOpacity onPress={onPress}>
        {isShowMenu ? (
          <View style={styles.iconContainerStyle}>
            <Icon
              name="menu"
              type="material-community"
              style={styles.iconStyle}
            />
          </View>
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'transparent',
    height: WP('12'),
    width: WP('100'),
    flexDirection: 'row',
  },
  iconContainerStyle: {
    height: WP('12'),
    width: WP('12'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    width: WP('10'),
    backgroundColor: 'transparent',
  },
  titleContainerStyle: {
    height: WP('12'),
    width: WP('75'),
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleTextStyle: {
    fontSize: size.h5,
    fontWeight: 'bold',
  },
});
