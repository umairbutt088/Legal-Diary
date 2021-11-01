import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/Screens/AuthScreens/Login/Index';
import SignUp from './src/Screens/AuthScreens/Signup/Index';
import DashBoard from './src/Screens/MainScreens/DashBoard';
import CivilCases from './src/Screens/MainScreens/Civil-Cases';
import CriminalCases from './src/Screens/MainScreens/Criminal-Cases';
import FamilyCases from './src/Screens/MainScreens/Family-Cases';
import HighCourtCases from './src/Screens/MainScreens/High-Court-Cases';
import SupremeCourtCases from './src/Screens/MainScreens/Supreme-Court-Cases';
import TribunalCases from './src/Screens/MainScreens/Tribunal-Cases';
import AddNewCases from './src/Screens/MainScreens/AddNewCase';
import AllCases from './src/Screens/MainScreens/AllCases';
import PendingCases from './src/Screens/MainScreens/PendingCases';
import ToDayCases from './src/Screens/MainScreens/TodayCases';
import SearchCase from './src/Screens/MainScreens/Search-Case';
import Calender from './src/Screens/MainScreens/Calender';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Icon} from 'react-native-elements';
import {View} from 'react-native';
import {colors, size, WP} from './src/utilities';
import {getHeaderTitle} from '@react-navigation/elements';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Calender">
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="DashBoard" component={DashBoard} />
        <Stack.Screen name="CivilCases" component={CivilCases} />
        <Stack.Screen name="CriminalCases" component={CriminalCases} />
        <Stack.Screen name="FamilyCases" component={FamilyCases} />
        <Stack.Screen name="TribunalCases" component={TribunalCases} />
        <Stack.Screen name="HighCourtCases" component={HighCourtCases} />
        <Stack.Screen name="SupremeCourtCases" component={SupremeCourtCases} />
        <Stack.Screen name="TabBar" component={TabBar} />
        {/* <Stack.Screen name="Calender" component={Calender} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
//
//
//
//
//
//
//

/////////// Tab Bar ////////////
const TabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName={'AddNewCases'}
      screenOptions={{
        tabBarIconStyle: {borderColor: 'green'},
        tabBarItemStyle: {
          backgroundColor: 'transparent',
          height: WP('16'),
        },
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'transparent',
          height: WP('23'),
          // paddingHorizontal: WP('5'),
        },
        tabBarLabelStyle: {fontSize: size.small, fontWeight: '700'},
        // tabBarBadge: 3,
      }}>
      <Tab.Screen
        name="AllCases"
        component={AllCases}
        options={{
          // title: 'false',
          tabBarActiveTintColor: colors.drakBlack,
          tabBarInactiveTintColor: colors.borderColor,
          tabBarLabel: 'All',
          tabBarIcon: () => <Icon name="cases" size={30} />,
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Pending"
        component={PendingCases}
        options={{
          tabBarActiveTintColor: colors.drakBlack,
          tabBarInactiveTintColor: colors.borderColor,
          tabBarIcon: () => (
            <Icon name="pending-actions" color="#000" size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="AddNew"
        component={AddNewCases}
        options={{
          tabBarActiveTintColor: colors.drakBlack,
          tabBarInactiveTintColor: colors.borderColor,
          tabBarIcon: () => (
            <View style={{height: WP(15)}}>
              <Icon name="add-circle-outline" color="#000" size={50} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ToDay"
        component={ToDayCases}
        options={{
          tabBarActiveTintColor: colors.drakBlack,
          tabBarInactiveTintColor: colors.borderColor,
          tabBarIcon: () => <Icon name="today" color="#000" size={30} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchCase}
        options={{
          tabBarActiveTintColor: colors.drakBlack,
          tabBarInactiveTintColor: colors.borderColor,
          tabBarIcon: () => <Icon name="search" color="#000" size={30} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default App;
