import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {colors, languages} from '../themes';
import {useSelector} from 'react-redux';
import {languageSelector} from '../redux/feature/languageSlice.redux';

import {DashboardScreen, SettingScreen, ProvinceScreen} from '../pages';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  const savedLanguage = useSelector(languageSelector);

  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={DrawerStyle}>
        <Drawer.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            title: languages[savedLanguage.language].dashboardPage.headerLabel,
            drawerLabel:
              languages[savedLanguage.language].dashboardPage.headerLabel,
          }}
        />
        <Drawer.Screen
          name="Province"
          component={ProvinceScreen}
          options={{
            title: languages[savedLanguage.language].provincePage.headerLabel,
            drawerLabel:
              languages[savedLanguage.language].provincePage.headerLabel,
          }}
        />
        <Drawer.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            title: languages[savedLanguage.language].settingPage.headerLabel,
            drawerLabel:
              languages[savedLanguage.language].settingPage.headerLabel,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const DrawerStyle = {
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
};

export default App;
