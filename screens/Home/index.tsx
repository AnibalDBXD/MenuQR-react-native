import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HomeProps } from './types';
import { Header } from '../../common/styles/styles';
import MenuList from './MenuList';
import { useMenuContext } from '../../context/MenuList/MenuContext';
import AddMenu from '../../components/AddMenu';
import Screens from '../../navigation/constants';

const Home: React.FC<HomeProps> = ({
  navigation: { navigate },
}): JSX.Element => {
  const { header, headerText } = Header;
  const { SetCreating } = useMenuContext();

  const handlePress = async () => {
    if (SetCreating) {
      // without await this does not work!
      await SetCreating(true);
      navigate(Screens.createMenu);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={header}>
        <Text style={headerText}>Welcome to MenuQR</Text>
      </View>
      <MenuList />
      <AddMenu handlePress={handlePress} />
    </SafeAreaView>
  );
};

export default Home;
