import React from 'react';
import { Text, View } from 'react-native';
import QR from 'react-native-qrcode-svg';
import { IMenuLabel } from './types';
import styles from './styles';
import { QRSize } from '../../../../common/styles';

const MenuLabel: React.FC<IMenuLabel> = ({ MenuName, MenuID }): JSX.Element => {
  const { Container, ContainerText, QRContainer } = styles;
  return (
    <View style={Container}>
      <View style={QRContainer}>
        <QR value="192393999" size={QRSize} />
      </View>
      <Text style={ContainerText}>{MenuName}</Text>
    </View>
  );
};

export default MenuLabel;
