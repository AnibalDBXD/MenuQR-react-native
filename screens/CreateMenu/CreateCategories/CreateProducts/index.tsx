import React from 'react';
import { TextInput, View } from 'react-native';
import { ICreateProducts } from './types';
import DeleteButton from '../../../../components/DeleteButton';
import styles from './styles';

const CreateProducts: React.FC<ICreateProducts> = ({
  id,
  name,
  price,
  removeProduct,
}): JSX.Element => {
  const { productContainer, productName, productPrice } = styles;
  return (
    <View key={id}>
      <View style={productContainer}>
        <TextInput style={productName} placeholder="Product name" />
        <TextInput style={productPrice} placeholder="Product price" />
        <DeleteButton handlePress={removeProduct} />
      </View>
    </View>
  );
};

export default CreateProducts;
