import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import QRScaner from './QRScanner';
import { QRProps } from './types';
import SCREENS from '../../navigation/constants';

const ScanQR: React.FC<QRProps> = ({
  navigation: { navigate },
}): JSX.Element => {
  const handleScanned = (data: string) => {
    navigate(SCREENS.menu, { id: data });
  };
  return (
    <SafeAreaView>
      <QRScaner handleScanned={handleScanned} />
    </SafeAreaView>
  );
};

export default ScanQR;
