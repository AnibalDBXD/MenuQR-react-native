import React from 'react';
import { Text, Button, View } from 'react-native';
import Screens from '../../navigation/constants';
import { HomeProps } from './types';

const Home: React.FC<HomeProps> = ({
  navigation: { navigate },
}): JSX.Element => {
  return (
    <View>
      <Text>Home11</Text>
      <Button title="Pres" onPress={() => navigate(Screens.menu)} />
    </View>
  );
};

export default Home;