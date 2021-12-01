import React from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import CustomHeader from '../../../Components/header';
import {WP} from '../../../utilities';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import GeneralForm from '../../../Components/Add-Cases-Form';
import PlaintifDetails from '../../../Components/Plaintif-Details';
import RespondentDetails from '../../../Components/Respondent-Detail';
import Custombutton from '../../../Components/button';
import CaseDetailCompile from '../../../Components/case-Detail-compile';

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
          <KeyboardAwareScrollView>
            <CaseDetailCompile
              navigation={navigation}
              caseTitle="Umair Vs. Ali"
            />
          </KeyboardAwareScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AllCases;
