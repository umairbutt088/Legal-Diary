import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {appImages, colors, size, WP} from '../../utilities';
import {Avatar} from 'react-native-elements';

const CustomDrwer = ({navigation}) => {
  const [navItem, setNevItem] = useState([
    {name: 'All Cases', key: 1, screen: 'AllCases', icon: appImages.appLogo3},
    {name: 'Pending Cases', key: 2, screen: 'PendingCases'},
    {name: 'AddNew Cases', key: 3, screen: 'AddNewCases'},
    {name: 'ToDay Cases', key: 4, screen: 'ToDayCases'},
    {name: 'Search Case', key: 5, screen: 'SearchCase'},
    {name: 'Calender', key: 6, screen: 'Calender'},
  ]);

  return (
    <View style={{flex: 1, backgroundColor: 'transparent', width: WP('300')}}>
      <View style={styles.drawerMianContainer}>
        <TouchableOpacity>
          <Avatar
            rounded
            size="large"
            title="LW"
            activeOpacity={0.2}
            containerStyle={styles.avatarContainerStyle}
            source={appImages.appLogo3}
          />
        </TouchableOpacity>
        <View style={styles.titleContainerStyle}>
          <Text style={styles.titleTextStyle}>Umair Butt</Text>
        </View>
      </View>

      {navItem.map(item => {
        return (
          <TouchableOpacity
            key={item.key}
            onPress={() => navigation.navigate(item.screen)}
            style={{
              flex: 0.07,
              backgroundColor: 'transparent',
              marginTop: WP('2'),
              borderBottomWidth: WP('0.05'),
              borderBottomColor: colors.lightGrey,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Image
              source={item.icon}
              style={{height: WP('15'), width: WP('15'), resizeMode: 'contain'}}
            />
            <Text style={{fontSize: size.h6}}>{item.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomDrwer;

const styles = StyleSheet.create({
  drawerMianContainer: {
    flex: 0.12,
    width: WP('70'),
    height: WP('20'),
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: WP('5'),
    borderBottomWidth: WP('0.1'),
    borderBottomColor: colors.lightGrey,
  },
  avatarContainerStyle: {
    backgroundColor: '#000',
    marginHorizontal: WP('3'),
    borderBottomWidth: WP('1'),
    borderBottomColor: colors.p1,
  },
  titleContainerStyle: {
    height: WP('20'),
    width: WP('40'),
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  titleTextStyle: {fontSize: size.h4, fontWeight: 'bold'},
});
