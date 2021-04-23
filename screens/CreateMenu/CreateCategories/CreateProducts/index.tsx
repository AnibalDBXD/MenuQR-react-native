import React from 'react';
import { TextInput, View } from 'react-native';
import { ICreateProducts } from './types';
import DeleteButton from '../../../../components/DeleteButton';
import styles from './styles';

const CreateProducts: React.FC<ICreateProducts> = ({
  id,
  name,
  price,
}): JSX.Element => {
  const { productContainer, productName, productPrice } = styles;
  return (
    <View key={id}>
      <View style={productContainer}>
        <TextInput style={productName} placeholder={name} />
        <TextInput style={productPrice} placeholder={price} />
        <DeleteButton handlePress={console.log} />
      </View>
    </View>
  );
};

export default CreateProducts;
