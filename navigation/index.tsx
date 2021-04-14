import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './types';

import { HomeIcon, QRIcon, MenuIcon } from '../components/Icons';

// Screens
import Home from '../screens/Home';
import Menu from '../screens/Menu';
import ScanQR from '../screens/ScanQR';

import SCREENS from './constants';

const { Navigator, Screen } = createBottomTabNavigator<RootStackParamList>();

const Navigation: React.FC = (): JSX.Element => (
  <NavigationContainer>
    <Navigator initialRouteName={SCREENS.home}>
      <Screen
        name={SCREENS.home}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => <HomeIcon isFocused={focused} />,
        }}
      />
      <Screen
        name={SCREENS.menu}
        component={Menu}
        options={{
          tabBarIcon: ({ focused }) => <MenuIcon isFocused={focused} />,
        }}
      />
      <Screen
        name={SCREENS.ScanQR}
        component={ScanQR}
        options={{
          tabBarIcon: ({ focused }) => <QRIcon isFocused={focused} />,
        }}
      />
    </Navigator>
  </NavigationContainer>
);

export default Navigation;
