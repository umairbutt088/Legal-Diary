import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {size, WP, colors} from '../utilities';

const CourtType = ({Type, CaseType, TextContainer}) => {
  return (
    <View style={styles.courtTypeContainer}>
      <Text style={styles.typeTextStyle}>{Type}</Text>
      <View style={[styles.civilTextContainer, TextContainer]}>
        <Text style={styles.courtNameNormalTextStyle}>{CaseType}</Text>
      </View>
    </View>
  );
};
export default CourtType;

export const CaseNo = ({CaseNumber, Case, TextContStyle}) => {
  return (
    <View style={styles.courtTypeContainer}>
      <Text style={styles.typeTextStyle}>{CaseNumber}</Text>
      <View style={[styles.civilTextContainer, TextContStyle]}>
        <Text style={styles.courtNameNormalTextStyle}>{Case}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  courtTypeContainer: {
    width: WP('45'),
    backgroundColor: 'transparent',
    paddingVertical: WP('2'),
  },
  typeTextStyle: {
    paddingHorizontal: WP('2'),
    fontSize: size.xlarge,
    fontWeight: 'bold',
  },
  civilTextContainer: {
    paddingHorizontal: WP('3'),
    // backgroundColor: colors.skyBlue,
    alignSelf: 'flex-start',
    marginLeft: WP('2'),
    borderRadius: WP('5'),
    marginTop: WP('3'),
  },
  courtNameNormalTextStyle: {
    fontSize: size.medium,
    fontWeight: 'normal',
    color: colors.drakBlack,
  },
});
