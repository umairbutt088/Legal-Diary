import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import CustomHeader from '../../../Components/header';
import {appImages} from '../../../utilities/assets';
import {colors, size, WP} from '../../../utilities';
import styles from './styles';

const DashBoard = ({navigation}) => {
  const [courtName, setCourtName] = useState([
    {name: 'Civil Cases', key: 1, screen: 'CivilCases'},
    {name: 'District Cases', key: 2, screen: 'CriminalCases'},
    {name: 'Family Cases', key: 3, screen: 'FamilyCases'},
    {name: 'Tribunal Cases', key: 4, screen: 'TribunalCases'},
    {name: 'High Court Cases', key: 5, screen: 'HighCourtCases'},
    {name: 'Supreme Court Cases', key: 6, screen: 'SupremeCourtCases'},
  ]);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomHeader isShow={true} onPress={() => navigation.goBack()} />
      <View style={styles.backgroundImgContStyle}>
        <ImageBackground
          source={appImages.appLogo}
          style={styles.backgroundImgStyle}
          resizeMode="stretch"
        />
      </View>
      <View style={styles.mapwrappingView}>
        <View style={{padding: WP('10')}}>
          <Text style={styles.titleTextStyle}>DashBoard</Text>
        </View>
        {courtName.map(item => {
          return (
            <TouchableOpacity
              key={item.key}
              onPress={() => navigation.navigate('Drawer')}
              style={styles.mapViewContStyle}>
              <Text
                style={{
                  fontSize: size.medium,
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default DashBoard;
