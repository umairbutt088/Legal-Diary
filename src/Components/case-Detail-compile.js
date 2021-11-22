import React, {useState} from 'react';
import CustomTextInput from './TextInput';
import {Icon} from 'react-native-elements';
import {colors, size, WP} from '../utilities';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const CaseDetailCompile = ({caseTitle}) => {
  return (
    <TouchableOpacity
      enabled="false"
      shiftDistanceX="5"
      style={styles.mainContainer}>
      <View style={styles.caseTitleContStyle}>
        <Text style={styles.caseTitleTextStyle}>{caseTitle}</Text>
        <Text style={styles.caseNoTextStyle}>21/21</Text>
      </View>
      <View style={styles.courtNameContainer}>
        <Text style={styles.courtNameBoldText}>
          Court :{' '}
          <Text style={styles.courtNameLightText}>
            Hassan Ali Civil Judge Lahore
          </Text>
        </Text>
      </View>
      <View style={styles.courtNameContainer}>
        <Text style={styles.courtNameBoldText}>
          Case No : <Text style={styles.courtNameLightText}>21/2021</Text>
        </Text>
      </View>
      <View style={styles.clientNameContainer}>
        <Icon name="account-tie" type="material-community" color="blue" />
        <View style={styles.clientNameTextStyle}>
          <Text style={styles.courtNameBoldText}>Muhammad Umair Butt</Text>
        </View>
      </View>
      <View style={styles.clientNameContainer}>
        <Icon name="phone" type="material-community" color="green" />
        <View style={styles.clientNameTextStyle}>
          <Text style={styles.courtNameBoldText}>+923064343088</Text>
        </View>
      </View>
      <View style={styles.courtNameContainer}>
        <Text style={styles.courtNameBoldText}>
          On Behalf of :{' '}
          <Text style={styles.courtNameLightText}>Respondent</Text>
        </Text>
      </View>
      <View style={styles.previousDateContainerStyle}>
        <View style={styles.perviousDateSubContainer}>
          <Text style={styles.courtNameBoldText}>Previous Date :</Text>
          <View style={styles.DateContainer}>
            <Text style={styles.courtNameLightText}>28/10/2020</Text>
          </View>
        </View>
        <View style={styles.perviousDateSubContainer}>
          <Text style={styles.courtNameBoldText}>Adjourn Date :</Text>
          <View style={styles.DateContainer}>
            <Text style={styles.courtNameLightText}>28/10/2020</Text>
          </View>
        </View>
      </View>
      <View style={styles.nextStepContainer}>
        <Text style={styles.courtNameBoldText}>Adjourn Date :</Text>
        <TouchableOpacity style={styles.nextStepDetailCont}>
          <Text style={styles.courtNameLightText}>Notice</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default CaseDetailCompile;

const styles = StyleSheet.create({
  mainContainer: {
    width: WP('90'),
    borderWidth: WP('0.5'),
    borderColor: colors.darkGrey,
    borderRadius: WP('2'),
    backgroundColor: '#EDEFF1',
    marginTop: WP('5'),
    padding: WP('5'),
  },
  caseTitleContStyle: {
    width: WP('80'),
    paddingVertical: WP('1'),
    backgroundColor: 'transparent',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  caseTitleTextStyle: {
    fontSize: size.h5,
    color: colors.black,
    fontWeight: 'bold',
  },
  caseNoTextStyle: {
    fontSize: size.normal,
    color: colors.black,
    // fontWeight: 'bold',
  },
  courtNameContainer: {
    width: WP('80'),
    backgroundColor: 'transparent',
    justifyContent: 'center',
    paddingVertical: WP('1'),
  },
  courtNameBoldText: {
    fontSize: size.medium,
    fontWeight: 'bold',
    color: colors.black,
  },
  courtNameLightText: {
    fontSize: size.medium,
    fontWeight: 'normal',
    color: colors.black,
  },
  clientNameContainer: {
    width: WP('80'),
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingVertical: WP('1'),
  },
  clientNameTextStyle: {
    height: WP('5'),
    paddingHorizontal: WP('2'),
    borderRadius: WP('2'),
    marginLeft: WP('2'),
    backgroundColor: colors.skyBlue,
  },
  previousDateContainerStyle: {
    height: WP('13'),
    width: WP('80'),
    backgroundColor: 'transparent',
    marginTop: WP('3'),
    flexDirection: 'row',
  },
  perviousDateSubContainer: {
    height: WP('13'),
    width: WP('40'),
    backgroundColor: 'transparent',
  },
  DateContainer: {
    height: WP('5'),
    // paddingHorizontal: WP('2'),
    // alignSelf: 'center',
    marginTop: WP('3'),
    borderRadius: WP('2'),
  },
  nextStepContainer: {
    height: WP('13'),
    width: WP('80'),
    backgroundColor: 'transparent',
    marginTop: WP('3'),
  },
  nextStepDetailCont: {
    height: WP('5'),
    marginTop: WP('3'),
    borderRadius: WP('2'),
    alignItems: 'center',
    backgroundColor: '#cccccc',
  },

  //   searchInputstyle: {
  //     width: WP('60'),
  //     // marginLeft: WP('-20'),
  //     marginTop: WP('-3'),
  //   },
});
