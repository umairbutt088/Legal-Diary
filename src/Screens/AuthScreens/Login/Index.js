import React, {useState} from 'react';
import {View, Text, ImageBackground, SafeAreaView} from 'react-native';
import styles from './styles';
import {appImages, WP} from '../../../utilities';
import CustomTextInput from '../../../Components/TextInput';
import Custombutton from '../../../Components/button';
import CustomHeader from '../../../Components/header';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('wjwj');
  const [password, setPassword] = useState('jwjw');

  const onSubmit = () => {
    if (username === '') {
      alert('Please Enter Your User Name');
      return;
    }
    if (password === '' || password !== password) {
      alert('Please Enter Your Password');
    } else {
      // alert('Loged In Successfully');
      navigation.navigate('DashBoard');
    }
  };
  return (
    <SafeAreaView style={styles.safeAryViewStyle}>
      <CustomHeader onPress={() => navigation.goBack()} isShow={true} />
      <View style={styles.mainContainer}>
        <View style={styles.backgroundImgContStyle}>
          <ImageBackground
            source={appImages.appLogo}
            style={styles.backgroundImgStyle}
            resizeMode="stretch"
          />
        </View>
        <View
          style={{
            flex: 1,
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: WP('30'),
          }}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleTextStyle}>Login</Text>
          </View>
          <CustomTextInput
            title={'User Name'}
            placeholder={'Username'}
            onChangeText={value => setUsername(value)}
          />
          <CustomTextInput
            title={'Password'}
            secureTextEntry={true}
            placeholder={'password'}
            onChangeText={value => setPassword(value)}
          />
          <Custombutton
            title={'Login'}
            buttonStyle={styles.buttonContainer}
            titleStyle={styles.btnTitleStyle}
            onPressHandler={onSubmit}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
