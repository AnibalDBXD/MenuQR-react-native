import React from 'react';
import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HomeProps } from './types';
import styles from './styles';
import MenuList from './MenuList';
import { useMenuContext } from '../../context/MenuList/MenuContext';

const Home: React.FC<HomeProps> = (): JSX.Element => {
  const { Header, HeaderText } = styles;
  const { SetCreating } = useMenuContext();
  return (
    <SafeAreaView>
      <View style={Header}>
        <Button
          title="prueba"
          onPress={() => SetCreating && SetCreating(true)}
        />
        <Text style={HeaderText}>Welcome to MenuQR</Text>
      </View>
      <MenuList />
    </SafeAreaView>
  );
};

export default Home;
