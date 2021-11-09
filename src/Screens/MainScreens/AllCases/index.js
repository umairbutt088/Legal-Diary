import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  ImageBackground,
  ScrollView,
} from 'react-native';
import CustomHeader from '../../../Components/header';
import styles from './styles';
import {appImages, WP} from '../../../utilities';
import GeneralForm from '../../../Components/Add-Cases-Form';

const AllCases = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomHeader
        isShow={true}
        isTitle={true}
        title="All Cases"
        onPress={() => navigation.navigate('DashBoard')}
      />
      <ScrollView style={{marginBottom: WP('20')}}>
        <View style={{alignItems: 'center', backgroundColor: 'transparent'}}>
          <GeneralForm heading="Case Details" />
          <GeneralForm heading="Party Details" />
          <GeneralForm />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AllCases;
