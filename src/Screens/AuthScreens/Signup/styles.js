import React from 'react';
import {View, StyleSheet} from 'react-native';
import {HP, WP, colors, size} from '../../../utilities';

const styles = StyleSheet.create({
  safeAryViewStyle: {flex: 1, backgroundColor: '#fff'},
  backgroundImgContStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    // marginTop: WP('-10'),
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImgStyle: {
    height: WP('100%'),
    width: WP('100%'),
    opacity: 0.1,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: WP('10'),
  },
  titleTextStyle: {
    fontSize: size.h1,
    textAlign: 'center',
    color: colors.drakBlack,
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: WP('90'),
    height: WP('12'),
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: WP('10'),
    marginBottom: WP('3'),
    backgroundColor: colors.drakBlack,
    borderRadius: WP('2'),
  },
  btnTitleStyle: {fontWeight: 'bold', color: colors.white},
  bottomTextNoramlText: {
    fontSize: size.medium,
    color: colors.drakBlack,
    fontWeight: 'normal',
    textAlign: 'center',
    marginBottom: WP('5'),
  },
  bottomTextColoredText: {
    fontSize: size.medium,
    color: colors.skyBlue,
    fontWeight: 'normal',
    textAlign: 'center',
  },
});
export default styles;
