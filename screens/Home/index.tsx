import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HomeProps } from './types';
import styles from './styles';
import MenuList from './MenuList';

const Home: React.FC<HomeProps> = (): JSX.Element => {
  const { Header, HeaderText } = styles;
  return (
    <SafeAreaView>
      <View style={Header}>
        <Text style={HeaderText}>Welcome to MenuQR</Text>
      </View>
      <MenuList />
    </SafeAreaView>
  );
};

export default Home;
