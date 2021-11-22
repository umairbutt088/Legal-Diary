import React, {useState} from 'react';
import Modal from 'react-native-modal';
import CustomTextInput from './TextInput';
import {Icon} from 'react-native-elements';
import {colors, size, WP} from '../utilities';
import DropDownPicker from 'react-native-dropdown-picker';
import {StyleSheet, Text, View} from 'react-native';

const PlaintifDetails = ({
  heading,
  CaseTitle,
  CourtName,
  CourtType,
  CaseNo,
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headingContStyle}>
        <Text style={styles.headingTextStyle}>{heading}</Text>
      </View>
      <View style={styles.caseTitleTextMainCont}>
        <View style={styles.caseTitleTextContStyle}>
          <Text style={styles.caseTitleTextStyle}>{CaseTitle}</Text>
        </View>
        <CustomTextInput
          inputContStyle={styles.caseTitleInputContStyle}
          placeholder="Name"
        />
      </View>
      <View></View>
      <View style={styles.caseTitleTextMainCont}>
        <View style={styles.caseTitleTextContStyle}>
          <Text style={styles.caseTitleTextStyle}>{CourtName}</Text>
        </View>
        <CustomTextInput
          inputContStyle={styles.caseTitleInputContStyle}
          placeholder="Contact No"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.caseTitleTextMainCont}>
        <View style={styles.caseTitleTextContStyle}>
          <Text style={styles.caseTitleTextStyle}>{CourtType}</Text>
        </View>
        <CustomTextInput
          inputContStyle={styles.caseTitleInputContStyle}
          placeholder="Address"
        />
      </View>
      <View style={styles.caseTitleTextMainCont}>
        <View style={styles.caseTitleTextContStyle}>
          <Text style={styles.caseTitleTextStyle}>{CaseNo}</Text>
        </View>
        <CustomTextInput
          inputContStyle={styles.caseTitleInputContStyle}
          placeholder="Advocate Name"
        />
      </View>
    </View>
  );
};

export default PlaintifDetails;

const styles = StyleSheet.create({
  mainContainer: {
    width: WP('90'),
    borderWidth: WP('0.5'),
    borderColor: colors.darkGrey,
    borderRadius: WP('2'),
    backgroundColor: '#EDEFF1',
    marginTop: WP('5'),
    paddingBottom: WP('5'),
  },
  headingContStyle: {
    height: WP('8'),
    width: WP('35'),
    backgroundColor: colors.darkGrey,
    marginTop: WP('-4'),
    marginLeft: WP('5'),
    justifyContent: 'center',
    marginBottom: WP('2'),
  },
  headingTextStyle: {
    fontSize: size.large,
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  caseTitleTextMainCont: {
    height: WP('10'),
    width: WP('90'),
    backgroundColor: 'transparent',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: WP('5'),
  },
  caseTitleTextContStyle: {
    height: WP('10'),
    width: WP('25'),
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  caseTitleInputContStyle: {
    width: WP('53'),
    height: WP('7'),
    paddingVertical: 0,
    borderRadius: 1,
    marginTop: WP('-2'),
  },
  caseTitleTextStyle: {fontSize: size.small, color: '#000', fontWeight: 'bold'},
});
