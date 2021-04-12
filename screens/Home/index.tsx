import React from 'react';
import { Button, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Screens from '../../navigation/constants';
import { HomeProps } from './types';

const Home: React.FC<HomeProps> = ({
  navigation: { navigate },
}): JSX.Element => {
  return (
    <SafeAreaView>
      <View>
        <Text>Home11</Text>
        <Button title="Pres" onPress={() => navigate(Screens.menu)} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
