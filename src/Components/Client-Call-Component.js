import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors, size, WP} from '../utilities';
import {Icon} from 'react-native-elements';

const ClientCallComponent = ({
  containerStyle,
  iconname,
  color,
  DetailText,
  iconType,
}) => {
  return (
    <TouchableOpacity style={[styles.clientNameContainer, containerStyle]}>
      <Icon name={iconname} type={iconType} color={color} />
      <View style={styles.clientNameTextStyle}>
        <Text style={styles.courtNameBoldText}>{DetailText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ClientCallComponent;

const styles = StyleSheet.create({
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
  courtNameBoldText: {
    fontSize: size.medium,
    fontWeight: 'bold',
    color: colors.black,
  },
});
