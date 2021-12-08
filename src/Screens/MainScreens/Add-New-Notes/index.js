import React from 'react';
import {SafeAreaView, Text, View, Alert} from 'react-native';
import {Custombutton, CustomTextInput} from '../../../Components';
import CustomHeader from '../../../Components/header';
import styles from './styles';

const NewNotes = ({navigation}) => {
  const createThreeButtonAlert = () =>
    Alert.alert('The Lawyer Diary', 'Note Added Successfully', [
      {text: 'OK', onPress: () => navigation.goBack()},
    ]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomHeader
        isShow={true}
        isTitle={true}
        title="Add New Note"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.inPutmainContainer}>
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleTextStyle}>Write Note For This Case</Text>
        </View>
        <CustomTextInput
          multiline={true}
          inputContStyle={styles.textInputStyle}
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

export default NewNotes;
