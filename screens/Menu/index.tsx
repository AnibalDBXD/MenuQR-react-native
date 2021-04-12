import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, ScrollView } from 'react-native';
import { MenuProps } from './types';
import styles from './styles';

const Menu: React.FC<MenuProps> = (): JSX.Element => {
  const { containerTitle } = styles;
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={containerTitle}>Menu de asd3gdfgafh5</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Menu;
