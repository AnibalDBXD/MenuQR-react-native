import React from 'react';
import QRScaner from '../../components/QRScanner';
import { QRProps } from './types';
import Screens from '../../navigation/constants';

const ScanQR: React.FC<QRProps> = ({
  navigation: { navigate },
}): JSX.Element => {
  const handleScanned = (data: string) => {
    navigate(Screens.menu, { data });
  };
  return <QRScaner handleScanned={handleScanned} />;
};

export default ScanQR;
