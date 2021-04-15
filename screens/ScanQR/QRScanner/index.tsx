import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
import { IQRScanner } from './types';
import styles from './styles';

const QRScanner: React.FC<IQRScanner> = ({ handleScanned }): JSX.Element => {
  const { scanner, frame } = styles;
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ data }: BarCodeScannerResult) => {
    handleScanned(data);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <BarCodeScanner onBarCodeScanned={handleBarCodeScanned} style={scanner}>
      <View style={frame} />
    </BarCodeScanner>
  );
};

export default QRScanner;
