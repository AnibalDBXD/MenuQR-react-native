import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './types';

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
        <Screen name={Screens.home} component={Home} />
        {VisibleMenu && <Screen name={Screens.menu} component={Menu} />}
        <Screen name={Screens.ScanQR} component={ScanQR} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
