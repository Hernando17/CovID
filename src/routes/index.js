import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DashboardScreen} from '../pages';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={styles}>
        <Tab.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = {
  tabBarStyle: {height: '12%'},
  tabBarLabelStyle: {fontSize: 18, marginTop: -20},
  tabBarIcon: () => <FontAwesomeIcon icon={faHome} size={20} />,
};

export default App;
