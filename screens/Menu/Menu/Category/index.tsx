import React from 'react';
import { View, Text } from 'react-native';
import { ICategory } from './types';
import styles from './styles';

const Category: React.FC<ICategory> = ({
  CategoryName,
  products,
}): JSX.Element => {
  const {
    categoryContainer,
    categoryTitle,
    productContainer,
    productName,
    productPrice,
  } = styles;
  return (
    <View style={categoryContainer}>
      <Text style={categoryTitle}>{CategoryName}</Text>
      {products.map(({ ProductName, price, id }, index) => (
        <View key={id || index} style={productContainer}>
          <Text style={productName}>{ProductName}</Text>
          <Text style={productPrice}>{price}</Text>
        </View>
      ))}
    </View>
  );
};

export default Category;
