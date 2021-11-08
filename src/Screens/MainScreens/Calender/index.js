import React from 'react';
import {View, SafeAreaView, ImageBackground} from 'react-native';
import CustomHeader from '../../../Components/header';
import styles from './styles';
import {appImages} from '../../../utilities';

const Calender = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomHeader
        isShow={true}
        isTitle={true}
        title="Calender"
        onPress={() => navigation.navigate('DashBoard')}
      />
      <View style={styles.backgroundImgContStyle}>
        <ImageBackground
          source={appImages.appLogo}
          style={styles.backgroundImgStyle}
          resizeMode="stretch"
        />
      </View>
    </SafeAreaView>
  );
};

export default Calender;
