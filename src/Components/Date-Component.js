import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WP} from '../utilities';

const DateComponent = () => {
  return (
    <View style={styles.mainContaner}>
      <Text></Text>
    </View>
  );
};

export default DateComponent;

const styles = StyleSheet.create({
  mainContaner: {
    flex: 1,
    height: WP('100'),
    width: WP('30'),
    backgroundColor: 'red',
  },
});
