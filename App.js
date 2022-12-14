import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StoreProvider } from './lib/Store';

import HomeScreen from './pages/Home';
import SettingsScreen from './pages/Settings';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <StoreProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName='Home'>
          <Tab.Screen name='Home' component={HomeScreen} />
          <Tab.Screen name='Settings' component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
}
