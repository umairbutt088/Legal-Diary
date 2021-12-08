import React from 'react';
import {SafeAreaView, Text, View, Alert} from 'react-native';
import {Custombutton, CustomTextInput} from '../../../Components';
import CustomHeader from '../../../Components/header';
import {Icon} from 'react-native-elements';
import styles from './styles';

const NextStepScreen = ({navigation}) => {
  const createThreeButtonAlert = () =>
    Alert.alert('The Lawyer Diary', 'Next Step Added Successfully', [
      {text: 'OK', onPress: () => navigation.goBack()},
    ]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomHeader
        isShow={true}
        isTitle={true}
        title="Next Step"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.inPutmainContainer}>
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleTextStyle}>Nature of Disposal :</Text>
        </View>
        <CustomTextInput
          multiline={true}
          inputContStyle={styles.textInputStyle}
        />
      </View>
      <View style={styles.calenderMainContainer}>
        <View style={styles.calenderTextContainer}>
          <Text style={styles.calenderTextStyle}>Adjourn Date :</Text>
        </View>
        <Custombutton
          isShowIcon={
            <Icon
              name="calendar-range"
              type="material-community"
              color="white"
            />
          }
          buttonStyle={styles.calenderButton}
        />
      </View>
      <View style={styles.bottomButtonContainer}>
        <Custombutton
          buttonStyle={styles.saveButtonStyle}
          title="Save"
          onPressHandler={createThreeButtonAlert}
        />
        <Custombutton
          buttonStyle={styles.cancelButtonStyle}
          title="Cancel"
          onPressHandler={() => navigation.goBack()}
        />
      </View>
    </SafeAreaView>
  );
};

export default NextStepScreen;
