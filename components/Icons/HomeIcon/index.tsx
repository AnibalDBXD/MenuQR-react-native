import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { IIcon } from '../types';
import { Sizes, Colors } from '../../../common/styles';

const HomeIcon: React.FC<IIcon> = ({ isFocused }): JSX.Element => (
  <FontAwesome5
    name="home"
    size={Sizes.medium}
    color={isFocused ? Colors.DodgerBlue : Colors.Black}
  />
);

export default HomeIcon;
