import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import CustomHeader from '../../../Components/header';
import styles from './styles';

const FamilyCases = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomHeader isShow={true} onPress={() => navigation.goBack()} />
      <Text>This is Page for Family Cases,</Text>
    </SafeAreaView>
  );
};

export default FamilyCases;
