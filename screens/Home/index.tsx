import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import QR from 'react-native-qrcode-svg';
import { HomeProps } from './types';

const Home: React.FC<HomeProps> = (): JSX.Element => {
  return (
    <SafeAreaView>
      <View>
        <Text>Home</Text>
        <QR value="6075d4d45b165e19f61f528c" size={280} ecl="L" />
      </View>
    </SafeAreaView>
  );
};

export default Home;
