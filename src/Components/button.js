import React from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {Button} from 'react-native-elements';
import {WP} from '../utilities';

const Custombutton = ({
  buttonStyle,
  title,
  titleStyle,
  loading,
  onPressHandler,
}) => {
  return (
    <Button
      title={title}
      buttonStyle={buttonStyle}
      titleStyle={titleStyle}
      loading={loading}
      onPress={onPressHandler}
    />
  );
};

export default Custombutton;

const styles = StyleSheet.create({});
