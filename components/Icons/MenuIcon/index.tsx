import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { IIcon } from '../types';
import { Sizes, Colors } from '../../../common/styles';

const MenuIcon: React.FC<IIcon> = ({ isFocused }): JSX.Element => (
  <MaterialIcons
    name="restaurant-menu"
    size={Sizes.medium}
    color={isFocused ? Colors.DodgerBlue : Colors.Black}
  />
);

export default MenuIcon;
