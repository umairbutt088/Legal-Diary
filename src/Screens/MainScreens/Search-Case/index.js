import React from 'react';
import {View, SafeAreaView, ImageBackground} from 'react-native';
import CustomHeader from '../../../Components/header';
import styles from './styles';
import {appImages} from '../../../utilities';

const SearchCase = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomHeader
        isShow={true}
        isTitle={true}
        title="Search Cases"
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

export default SearchCase;
