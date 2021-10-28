import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import CustomHeader from '../../../Components/header';
import styles from './styles';

const SupremeCourtCases = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomHeader isShow={true} onPress={() => navigation.goBack()} />
      <Text>This is Page for Supreme Court Cases,</Text>
    </SafeAreaView>
  );
};

export default SupremeCourtCases;
