import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { RootStackParamList } from './types';

// Screens
import Home from '../screens/Home';
import Menu from '../screens/Menu';
import ScanQR from '../screens/ScanQR';

import SCREENS from './constants';
import { Colors, Sizes } from '../common/styles';

const { Navigator, Screen } = createBottomTabNavigator<RootStackParamList>();

const Navigation: React.FC = (): JSX.Element => (
  <NavigationContainer>
    <Navigator initialRouteName={SCREENS.home}>
      <Screen
        name={SCREENS.home}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="home"
              size={Sizes.medium}
              color={focused ? Colors.DodgerBlue : Colors.Black}
            />
          ),
        }}
      />
      <Screen
        name={SCREENS.menu}
        component={Menu}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="restaurant-menu"
              size={Sizes.medium}
              color={focused ? Colors.DodgerBlue : Colors.Black}
            />
          ),
        }}
      />
      <Screen
        name={SCREENS.ScanQR}
        component={ScanQR}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="qrcode"
              size={Sizes.medium}
              color={focused ? Colors.DodgerBlue : Colors.Black}
            />
          ),
        }}
      />
    </Navigator>
  </NavigationContainer>
);

export default Navigation;
