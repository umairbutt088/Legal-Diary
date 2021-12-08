import React from 'react';
import {View, SafeAreaView, Text, ScrollView} from 'react-native';
import CustomHeader from '../../../Components/header';
import styles from './styles';
import ClientNameComponent from '../../../Components/Client-Name-Component';
import {colors, size, WP} from '../../../utilities';
import ClientCallComponent from '../../../Components/Client-Call-Component';
import CourtNameText, {FillingDate} from '../../../Components/Court-Name-Text';
import CourtType, {CaseNo} from '../../../Components/Court-Type';
import Custombutton from '../../../Components/button';
import {UnderLine} from '../../../Components';
import NextDateComponent from '../../../Components/Next-Date-Component';

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
        <View style={styles.titleContainer}>
          <Text style={styles.titleTextStyle}>Umair vs. Ali</Text>
        </View>
        <View style={styles.caseDetailContainer}>
          <CourtNameText
            containerStyle={{paddingLeft: WP('1')}}
            CourtName={'Court :'}
            JudgeName={'Hassan Ali Civil Judge'}
          />
          <View style={styles.courtTypeMainContainer}>
            <CourtType
              Type={'Type'}
              CaseType={'Civil'}
              TextContainer={{backgroundColor: colors.skyBlue}}
            />
            <CaseNo
              CaseNumber={'CaseNo./Year'}
              Case={'21/21/2021'}
              TextContStyle={{paddingHorizontal: WP('0')}}
            />
          </View>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleTextStyle}>Plaintiff</Text>
        </View>
        <View style={styles.clientDetailMainContainer}>
          <ClientNameComponent
            containerStyle={{marginLeft: WP('1')}}
            iconname={'account-tie'}
            color={'blue'}
            iconType={'material-community'}
            DetailText={'Muhammad Umair Butt'}
          />
          <ClientCallComponent
            containerStyle={{marginLeft: WP('1')}}
            iconname={'phone'}
            color={'green'}
            iconType={'material-community'}
            DetailText={'03064343088'}
          />
          <CourtNameText
            containerStyle={styles.courtNameContainerStyle}
            CourtName={'Court :'}
            JudgeName={'Hassan Ali Civil Judge'}
          />
          <FillingDate
            containerStyle={styles.FillingDateContainerStyle}
            filedUnderSection={'Filled  U/sec :'}
            JudgeName={'Hassan Ali Civil Judge'}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleTextStyle}>Respondent</Text>
        </View>
        <View style={styles.clientDetailMainContainer}>
          <ClientNameComponent
            containerStyle={{marginLeft: WP('1')}}
            iconname={'account-tie'}
            color={'blue'}
            iconType={'material-community'}
            DetailText={'Muhammad Umair Butt'}
          />
        </View>
        <UnderLine />
        <View style={styles.customButtonContainer}>
          <Custombutton
            isShow={true}
            title="Disposal"
            buttonStyle={styles.customButtonStyle}
            titleStyle={{fontWeight: 'bold', fontSize: size.large}}
            onPressHandler={() => navigation.navigate('DisposedCases')}
          />
          <Custombutton
            title="Steps"
            buttonStyle={[styles.customButtonStyle]}
            titleStyle={{fontWeight: 'bold', fontSize: size.large}}
            onPressHandler={() => navigation.navigate('NextStepScreen')}
          />
          <Custombutton
            title="Notes"
            buttonStyle={styles.customButtonStyle}
            titleStyle={{fontWeight: 'bold', fontSize: size.large}}
            onPressHandler={() => navigation.navigate('NewNotes')}
          />
        </View>
        <NextDateComponent />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CaseDetails;
