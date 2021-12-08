import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {colors, size, WP} from '../utilities';

const NextDateComponent = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.nextStepsContainer}>
        <View style={styles.headerButtonContainer}>
          <TouchableOpacity style={styles.headerButtonSubContainer}>
            <Text style={styles.buttonTextStyle}>Steps</Text>
          </TouchableOpacity>
          <View style={{width: WP('4')}}></View>
          <TouchableOpacity style={styles.headerButtonSubContainer}>
            <Text style={styles.buttonTextStyle}>Notes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default NextDateComponent;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  nextStepsContainer: {
    height: WP('80'),
    width: WP('90'),
    backgroundColor: 'transparent',
    borderWidth: WP('0.5'),
    borderColor: colors.drakBlack,
    borderRadius: WP('2'),
    overflow: 'hidden',
  },
  headerButtonContainer: {
    height: WP('10'),
    width: WP('88'),
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: WP('0.2'),
    borderBottomColor: colors.drakBlack,
  },
  headerButtonSubContainer: {
    height: WP('8'),
    width: WP('35'),
    backgroundColor: colors.drakBlack,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: WP('0.1'),
    borderRadius: WP('2'),
  },
  buttonTextStyle: {
    fontSize: size.large,
    fontWeight: 'bold',
    color: colors.white,
  },
});
