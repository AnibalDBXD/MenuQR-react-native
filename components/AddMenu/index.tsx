import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { IAddMenu } from './types';
import styles from './styles';

const AddMenu: React.FC<IAddMenu> = ({ handlePress }): JSX.Element => {
  const { container, icon } = styles;
  return (
    <TouchableOpacity style={container} onPress={handlePress}>
      <Text style={icon}>+</Text>
    </TouchableOpacity>
  );
};

export default AddMenu;
