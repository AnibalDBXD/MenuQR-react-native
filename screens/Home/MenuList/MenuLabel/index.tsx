import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import QR from 'react-native-qrcode-svg';
import { useNavigation } from '@react-navigation/native';
import { IMenuLabel } from './types';
import styles from './styles';
import { QRSize } from '../../../../common/styles';
import SCREENS from '../../../../navigation/constants';

const MenuLabel: React.FC<IMenuLabel> = ({ MenuName, MenuID }): JSX.Element => {
  const { Container, ContainerText, QRContainer } = styles;

  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      style={Container}
      onPress={() => navigate(SCREENS.menu, { data: MenuID })}
    >
      <View style={QRContainer}>
        <QR value={MenuID} size={QRSize} />
      </View>
      <Text style={ContainerText}>{MenuName}</Text>
    </TouchableOpacity>
  );
};

export default MenuLabel;
