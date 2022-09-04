import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {colors} from '../themes';

import {DashboardScreen, SettingScreen} from '../pages';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          headerStyle: {
            height: 70,
            backgroundColor: colors.blue[1],
          },
          headerTintColor: colors.white,
          headerTitleStyle: {
            color: 'white',
          },
          drawerStyle: {
            backgroundColor: colors.background,
            width: 240,
          },
          drawerLabelStyle: {
            color: 'white',
          },
          drawerActiveBackgroundColor: colors.blue[1],
        }}>
        <Drawer.Screen name="Dashboard" component={DashboardScreen} />
        <Drawer.Screen name="Setting" component={SettingScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
