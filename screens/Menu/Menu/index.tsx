import React from 'react';
import { Text, View } from 'react-native';
import { IMenu } from '../types';
import Category from './Category';
import styles from './styles';

const Menu: React.FC<IMenu> = ({ Categories, MenuName }): JSX.Element => {
  const { CaterogiesContainer, containerTitle } = styles;
  return (
    <>
      <Text style={containerTitle}>{MenuName}</Text>
      <View style={CaterogiesContainer}>
        {Categories.map(({ CategoryName, products, id }) => (
          <Category CategoryName={CategoryName} products={products} key={id} />
        ))}
      </View>
    </>
  );
};

export default Menu;
