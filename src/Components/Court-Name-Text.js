import React from 'react';
import {size, colors} from '../utilities';
import {StyleSheet, Text, View} from 'react-native';

const CourtNameText = ({CourtName, JudgeName, containerStyle}) => {
  return (
    <View style={[styles.courtDetailContainer, containerStyle]}>
      <Text style={styles.courtNameBoldTextStyle}>
        {CourtName}{' '}
        <Text style={styles.courtNameNormalTextStyle}>{JudgeName}</Text>
      </Text>
    </View>
  );
};

export default CourtNameText;

export const FillingDate = ({filedUnderSection, JudgeName, containerStyle}) => {
  return (
    <View style={[styles.courtDetailContainer, containerStyle]}>
      <Text style={styles.courtNameBoldTextStyle}>
        {filedUnderSection}{' '}
        <Text style={styles.courtNameNormalTextStyle}>{JudgeName}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  courtDetailContainer: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  courtNameBoldTextStyle: {
    fontSize: size.xlarge,
    fontWeight: 'bold',
    color: colors.drakBlack,
  },
  courtNameNormalTextStyle: {
    fontSize: size.large,
    fontWeight: 'normal',
    color: colors.drakBlack,
  },
});
