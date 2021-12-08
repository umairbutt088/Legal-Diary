import {placeholder} from '@babel/types';
import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {WP, size, colors} from '../utilities';

const CustomTextInput = ({
  placeholder,
  title,
  keyboardType,
  secureTextEntry,
  inputContStyle,
  onChangeText,
  multiline,
}) => {
  return (
    <View style={styles.mainContainerStyle}>
      <View style={styles.textInputContainer}>
        <Text style={styles.titleStyle}>{title}</Text>
        <TextInput
          placeholder={placeholder}
          style={[styles.inPutContainer, inputContStyle]}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          multiline={multiline}
          textBreakStrategy="balanced"
        />
      </View>
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  mainContainerStyle: {
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  textInputContainer: {
    // padding: WP('3'),
    backgroundColor: 'transparent',
  },
  titleStyle: {
    fontSize: size.large,
    color: '#000',
    marginBottom: WP('2'),
  },
  inPutContainer: {
    borderColor: colors.darkGrey,
    borderWidth: WP('0.2'),
    padding: WP('3'),
    width: WP('90'),
    borderRadius: WP('2'),
    fontSize: size.normal,
    marginBottom: WP('3'),
  },
});
