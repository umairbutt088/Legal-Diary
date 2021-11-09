import React from 'react';
import {View, Text, SafeAreaView, ImageBackground} from 'react-native';
import CustomHeader from '../../../Components/header';
import styles from './styles';
import {appImages} from '../../../utilities';
import GeneralForm from '../../../Components/Add-Cases-Form';

const PendingCases = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomHeader
        isShow={true}
        isTitle={true}
        title="Pending Cases"
        onPress={() => navigation.navigate('DashBoard')}
      />
      <View style={{flex: 1}}>
        <View style={styles.backgroundImgContStyle}>
          <ImageBackground
            source={appImages.appLogo}
            style={styles.backgroundImgStyle}
            resizeMode="stretch"
          />
        </View>
        <View
          style={{
            position: 'absolute',
            backgroundColor: 'red',
          }}>
          <GeneralForm />
          {/* <Text>This is over</Text> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PendingCases;
