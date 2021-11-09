import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, size, WP} from '../utilities';
import CustomTextInput from './TextInput';

const GeneralForm = ({heading}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headingContStyle}>
        <Text style={styles.headingTextStyle}>{heading}</Text>
      </View>
      <View style={styles.caseTitleTextMainCont}>
        <Text style={{fontSize: size.small, color: '#000', fontWeight: 'bold'}}>
          Case Title :
        </Text>
        <CustomTextInput
          inputContStyle={{
            width: WP('55'),
            height: WP('7'),
            paddingVertical: 0,
            borderRadius: 1,
            marginTop: WP('-2'),
          }}
          placeholder="Title"
        />
      </View>
    </View>
  );
};

export default GeneralForm;

const styles = StyleSheet.create({
  mainContainer: {
    height: WP('70'),
    width: WP('90'),
    borderWidth: WP('0.5'),
    borderColor: colors.darkGrey,
    borderRadius: WP('2'),
    backgroundColor: '#EDEFF1',
    marginTop: WP('5'),
  },
  headingContStyle: {
    height: WP('8'),
    width: WP('30'),
    backgroundColor: colors.darkGrey,
    marginTop: WP('-4'),
    marginLeft: WP('5'),
    justifyContent: 'center',
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
});
