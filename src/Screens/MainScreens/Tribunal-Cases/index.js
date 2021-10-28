import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import CustomHeader from '../../../Components/header';
import styles from './styles';

const TribunalCases = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomHeader isShow={true} onPress={() => navigation.goBack()} />
      <Text>This is Page for Tribunal Cases,</Text>
    </SafeAreaView>
  );
};

export default TribunalCases;
