import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../../common/styles';

import styles from './styles';
import { IError } from './types';

const Error: React.FC<IError> = ({ errorMessage }): JSX.Element => {
  const { container, errorIcon } = styles;
  return (
    <View style={container}>
      <MaterialIcons
        name="error"
        size={128}
        color={Colors.Punch}
        style={errorIcon}
      />
      <Text>Try scan another QR</Text>
      <Text>Error: {errorMessage}</Text>
    </View>
  );
};
export default Error;
