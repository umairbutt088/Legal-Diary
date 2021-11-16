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
import {WP} from '../../../utilities';
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
      <ScrollView showsVerticalScrollIndicator={false} style={{height: '100%'}}>
        <View style={{marginBottom: WP('20')}}>
          <View style={{alignItems: 'center', backgroundColor: 'transparent'}}>
            <GeneralForm
              heading="Case Details"
              CaseTitle="Case Title :"
              CourtName="Court Name :"
              CourtType="Court Type :"
            />
            {/* <GeneralForm heading="Party Details" /> */}
            {/* <GeneralForm /> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AllCases;
