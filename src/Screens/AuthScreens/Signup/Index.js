import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import {appImages} from '../../../utilities/assets';
import CustomTextInput from '../../../Components/TextInput';
import Custombutton from '../../../Components/button';
import CustomHeader from '../../../Components/header';

const SignUp = ({navigation}) => {
  const [fname, setFirstname] = useState('jdj1');
  const [lname, setLastname] = useState('djjd');
  const [email, setEmail] = useState('jdjd');
  const [password, setPassword] = useState('111');
  const [rePassword, setRepassword] = useState('111');

  const onSubmit = () => {
    if (fname === '') {
      alert('Please Enter Your First Name');
      return;
    }
    if (lname === '') {
      alert('Please Enter Your Last Name');
      return;
    }
    if (email === '') {
      alert('Please Enter Your Email Address');
      return;
    }
    if (password === '' || password !== password) {
      alert('Please Enter Your Password');
      return;
    }
    if (rePassword === '' || rePassword !== password) {
      alert('Please Re-Enter Your Password');
      return;
    } else {
      // alert('Signed Up Successfully');
      navigation.navigate('Login');
    }
  };

  return (
    <SafeAreaView style={styles.safeAryViewStyle}>
      <CustomHeader />
      <View style={styles.mainContainer}>
        <View style={styles.backgroundImgContStyle}>
          <ImageBackground
            source={appImages.appLogo}
            style={styles.backgroundImgStyle}
            resizeMode="stretch"
          />
        </View>
        <View style={{flex: 1, position: 'absolute'}}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleTextStyle}>SignUp</Text>
          </View>
          <ScrollView>
            <CustomTextInput
              title={'First Name'}
              placeholder={'firstname'}
              keyboardType={'default'}
              onChangeText={value => setFirstname(value)}
            />
            <CustomTextInput
              title={'Last Name'}
              placeholder={'lastname'}
              keyboardType={'default'}
              onChangeText={value => setLastname(value)}
            />
            <CustomTextInput
              title={'Email'}
              placeholder={'email'}
              keyboardType={'email-address'}
              onChangeText={value => setEmail(value)}
            />
            <CustomTextInput
              title={'Passwore'}
              placeholder={'password'}
              secureTextEntry={true}
              keyboardType={'default'}
              onChangeText={value => setPassword(value)}
            />
            <CustomTextInput
              title={'Re-Passsword'}
              placeholder={'password'}
              secureTextEntry={true}
              keyboardType={'default'}
              onChangeText={value => setRepassword(value)}
            />
          </ScrollView>
          <Custombutton
            title={'Sign Up'}
            buttonStyle={styles.buttonContainer}
            titleStyle={styles.btnTitleStyle}
            onPressHandler={onSubmit}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
