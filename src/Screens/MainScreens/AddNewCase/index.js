import React from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import CustomHeader from '../../../Components/header';
import styles from './styles';
import {WP} from '../../../utilities';
import GeneralForm from '../../../Components/Add-Cases-Form';
import RespondentDetails from '../../../Components/Respondent-Detail';
import PlaintifDetails from '../../../Components/Plaintif-Details';
import Custombutton from '../../../Components/button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

const AllCases = ({navigation}) => {
  const onSubmit = () => {
    navigation.navigate('AllCases');
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomHeader
        isShow={true}
        isTitle={true}
        title="New Cases"
        onPress={() => navigation.navigate('DashBoard')}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={{height: '100%'}}>
        <View style={{marginBottom: WP('20')}}>
          <KeyboardAwareScrollView>
            <View
              style={{alignItems: 'center', backgroundColor: 'transparent'}}>
              <GeneralForm
                heading="Case Details"
                CaseTitle="Case Title :"
                CourtName="Court Name :"
                CourtType="Court Type :"
                CaseNo="Case No/Y :"
                Behalf="On Behalf Of :"
                Date="Date of filling Case :"
              />
              {/* <GeneralForm heading="Party Details" /> */}
              {/* <GeneralForm /> */}
            </View>
            <View
              style={{alignItems: 'center', backgroundColor: 'transparent'}}>
              <PlaintifDetails
                heading="Plaintiff Details"
                CaseTitle="Plaintiff Name :"
                CourtName="Contact No :"
                CourtType="Address :"
                CaseNo="Advocate Name :"
              />
            </View>
            <View
              style={{alignItems: 'center', backgroundColor: 'transparent'}}>
              <RespondentDetails
                heading="Respondent Details"
                CaseTitle="Respondent Name :"
                CourtName="Contact No :"
                CourtType="Address :"
                CaseNo="Advocate Name :"
              />
            </View>
            <Custombutton
              title={'Save'}
              buttonStyle={styles.buttonContainer}
              titleStyle={styles.btnTitleStyle}
              onPressHandler={onSubmit}
            />
          </KeyboardAwareScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AllCases;
