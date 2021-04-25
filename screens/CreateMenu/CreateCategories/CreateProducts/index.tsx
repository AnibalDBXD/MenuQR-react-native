import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { useFormikContext } from 'formik';
import { ICreateProducts } from './types';
import DeleteButton from '../../../../components/DeleteButton';
import styles from './styles';
import { AddProduct, RemoveProduct } from '../../utils';
import { IFormValues } from '../../types';

const CreateProducts: React.FC<ICreateProducts> = ({
  id,
  categoryIndex,
  index,
}): JSX.Element => {
  const {
    productContainer,
    productName,
    productPrice,
    AddProductContainer,
  } = styles;

  const {
    handleChange,
    values,
    setFieldValue,
  } = useFormikContext<IFormValues>();

  const { products } = values.categories[categoryIndex];
  const { ProductName, price } = values.categories[categoryIndex].products[
    index
  ];

  const removeProduct = () =>
    RemoveProduct(values.categories, setFieldValue, categoryIndex, index);

  const addProduct = () =>
    AddProduct(values.categories, setFieldValue, categoryIndex);

  const handleChangeProductName = handleChange(
    `categories[${categoryIndex}].products[${index}].ProductName`,
  );

  const handleChangeProductPrice = handleChange(
    `categories[${categoryIndex}].products[${index}].price`,
  );

  return (
    <>
      <View key={id}>
        <View style={productContainer}>
          <TextInput
            value={ProductName}
            onChangeText={handleChangeProductName}
            style={productName}
            placeholder="Product name"
          />
          <TextInput
            value={price}
            onChangeText={handleChangeProductPrice}
            style={productPrice}
            placeholder="Product price"
          />
          <DeleteButton handlePress={removeProduct} />
        </View>
      </View>
      {products.length - 1 === index && (
        <View style={AddProductContainer}>
          <Button title="Add Product" onPress={addProduct} />
        </View>
      )}
    </>
  );
};

export default CreateProducts;
