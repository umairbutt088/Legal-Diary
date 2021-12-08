import React from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {Button, Icon} from 'react-native-elements';

const Custombutton = ({
  buttonStyle,
  title,
  isShowIcon,
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
      icon={isShowIcon}
      // icon={
      //   isShowIcon ? (
      //     <Icon name="calendar-range" type="material-community" color="white" />
      //   ) : null
      // }
    />
  );
};

export default Custombutton;

const styles = StyleSheet.create({});
