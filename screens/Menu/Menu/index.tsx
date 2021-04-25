import React from 'react';
import { Text, View } from 'react-native';
import { IMenu } from '../../../common/interfaces';
import Category from './Category';
import styles from './styles';

const Menu: React.FC<IMenu> = ({ Categories, MenuName }): JSX.Element => {
  const { CaterogiesContainer, containerTitle } = styles;
  return (
    <>
      <Text style={containerTitle}>{MenuName}</Text>
      <View style={CaterogiesContainer}>
        {Categories.map(({ CategoryName, products, id }, index) => (
          <Category
            CategoryName={CategoryName}
            products={products}
            key={id || index}
          />
        ))}
      </View>
    </>
  );
};

export default Menu;
