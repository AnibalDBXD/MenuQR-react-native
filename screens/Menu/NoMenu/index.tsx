import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import { Center, Colors } from '../../../common/styles';
import styles from './styles';

const NoMenu: React.FC = (): JSX.Element => {
  const { center } = Center;
  const { TopIcon, BottomText, MiddleText } = styles;
  return (
    <View style={center}>
      <MaterialIcons
        style={TopIcon}
        name="no-food"
        size={128}
        color={Colors.Black}
      />
      <Text style={MiddleText}>No scanned QR.</Text>
      <Text style={BottomText}>Try Scan a Menu&apos;s QR.</Text>
    </View>
  );
};

export default NoMenu;
