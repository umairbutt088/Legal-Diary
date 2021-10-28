import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import Custombutton from '../../../Components/button';
import CustomHeader from '../../../Components/header';
import styles from './styles';

const HighCourtCases = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomHeader isShow={true} onPress={() => navigation.goBack()} />
      <Text>This is Page for High Court Cases,</Text>
    </SafeAreaView>
  );
};

export default HighCourtCases;
