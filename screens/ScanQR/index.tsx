import React from 'react';
import QRScaner from '../../components/QRScanner';
import { QRProps } from './types';
import SCREENS from '../../navigation/constants';

const ScanQR: React.FC<QRProps> = ({
  navigation: { navigate },
}): JSX.Element => {
  const handleScanned = (data: string) => {
    navigate(SCREENS.menu, { data });
  };
  return <QRScaner handleScanned={handleScanned} />;
};

export default ScanQR;
