import React from 'react';
import {View, SafeAreaView, Text, ScrollView} from 'react-native';
import CustomHeader from '../../../Components/header';
import {WP, colors, size} from '../../../utilities';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import GeneralForm from '../../../Components/Add-Cases-Form';
import PlaintifDetails from '../../../Components/Plaintif-Details';
import RespondentDetails from '../../../Components/Respondent-Detail';
import Custombutton from '../../../Components/button';
import CaseDetailCompile from '../../../Components/case-Detail-compile';
import {color} from 'react-native-reanimated';

const CaseDetails = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomHeader
        isShow={true}
        isTitle={true}
        title="All Cases"
        onPress={() => navigation.goBack()}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollViewStyle}>
        <KeyboardAwareScrollView>
          <View style={styles.titleContainer}>
            <Text style={styles.titleTextStyle}>Umair vs. Ali</Text>
          </View>
          <View style={styles.caseDetailContainer}>
            <View style={styles.courtDetailContainer}>
              <Text style={styles.courtNameBoldTextStyle}>
                Court :{' '}
                <Text style={styles.courtNameNormalTextStyle}>
                  Hassan Ali Civil Judge
                </Text>
              </Text>
            </View>
            <View style={styles.courtTypeMainContainer}>
              <View style={styles.courtTypeContainer}>
                <Text style={styles.typeTextStyle}>Type</Text>
                <View style={styles.civilTextStyle}>
                  <Text style={styles.courtNameNormalTextStyle}>
                    Civil Case
                  </Text>
                </View>
              </View>
              <View style={styles.courtTypeContainer}>
                <Text style={styles.typeTextStyle}>CaseNo./Year</Text>
                <View style={styles.caseFilingDateStyle}>
                  <Text style={styles.courtNameNormalTextStyle}>
                    21/21/2021
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.titleTextStyle}>Party</Text>
          </View>
          <View style={styles.caseDetailContainer}>
            <View style={styles.courtDetailContainer}>
              <Text style={styles.courtNameBoldTextStyle}>
                Court :{' '}
                <Text style={styles.courtNameNormalTextStyle}>
                  Hassan Ali Civil Judge
                </Text>
              </Text>
            </View>
            <View style={styles.courtTypeMainContainer}>
              <View style={styles.courtTypeContainer}>
                <Text style={styles.typeTextStyle}>Type</Text>
                <View style={styles.civilTextStyle}>
                  <Text style={styles.courtNameNormalTextStyle}>
                    Civil Case
                  </Text>
                </View>
              </View>
              <View style={styles.courtTypeContainer}>
                <Text style={styles.typeTextStyle}>CaseNo./Year</Text>
                <View style={styles.caseFilingDateStyle}>
                  <Text style={styles.courtNameNormalTextStyle}>
                    21/21/2021
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CaseDetails;
