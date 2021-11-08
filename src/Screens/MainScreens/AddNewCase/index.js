import React from 'react';
import {View, SafeAreaView, ImageBackground} from 'react-native';
import CustomHeader from '../../../Components/header';
import styles from './styles';
import {appImages} from '../../../utilities';

const AddNewCases = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomHeader
        isShow={true}
        isTitle={true}
        isShowMenu={true}
        title="Add New Cases"
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

export default AddNewCases;
