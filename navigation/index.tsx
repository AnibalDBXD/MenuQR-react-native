import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './types';

import { HomeIcon, QRIcon } from '../components/Icons';

// Screens
import Home from '../screens/Home';
import Menu from '../screens/Menu';
import ScanQR from '../screens/ScanQR';

import Screens from './constants';

const { Navigator, Screen } = createBottomTabNavigator<RootStackParamList>();

const Navigation: React.FC = (): JSX.Element => {
  const [VisibleMenu, setVisibleMenu] = useState(false);

  const handleChange = (change: boolean) => setVisibleMenu(change);
  return (
    <NavigationContainer>
      <Navigator initialRouteName={Screens.home}>
        <Screen
          name={Screens.home}
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => <HomeIcon isFocused={focused} />,
          }}
        />
        {VisibleMenu && <Screen name={Screens.menu} component={Menu} />}
        <Screen
          name={Screens.ScanQR}
          component={ScanQR}
          options={{
            tabBarIcon: ({ focused }) => <QRIcon isFocused={focused} />,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
