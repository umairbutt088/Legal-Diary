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

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="SignUp">
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="DashBoard" component={DashBoard} />
        <Stack.Screen name="CivilCases" component={CivilCases} />
        <Stack.Screen name="CriminalCases" component={CriminalCases} />
        <Stack.Screen name="FamilyCases" component={FamilyCases} />
        <Stack.Screen name="TribunalCases" component={TribunalCases} />
        <Stack.Screen name="HighCourtCases" component={HighCourtCases} />
        <Stack.Screen name="SupremeCourtCases" component={SupremeCourtCases} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
