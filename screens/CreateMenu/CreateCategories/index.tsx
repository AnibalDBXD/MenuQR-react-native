import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { ICreateCategories } from './types';
import CreateProducts from './CreateProducts';

import styles from './styles';
import DeleteButton from '../../../components/DeleteButton';

const CreateCategories: React.FC<ICreateCategories> = ({
  name,
  products,
  removeCategory,
  handleChangeCategoryName,
  handleChangeProductName,
  handleChangeProductPrice,
  addProduct,
  removeProduct,
}): JSX.Element => {
  const { CategoryTop, inputCategory, AddCategoryContainer } = styles;
  return (
    <View>
      <View style={CategoryTop}>
        <TextInput
          value={name}
          style={inputCategory}
          onChangeText={handleChangeCategoryName}
          placeholder="Category name"
        />
        <DeleteButton handlePress={removeCategory} />
      </View>
      {products.map(({ ProductName, price, id: pId }, index) => (
        <View key={pId || index}>
          <CreateProducts
            id={pId || index}
            name={ProductName}
            price={price}
            removeProduct={() => removeProduct(index)}
            handleChangeProductName={handleChangeProductName(index)}
            handleChangeProductPrice={handleChangeProductPrice(index)}
          />
          {products.length - 1 === index && (
            <View style={AddCategoryContainer}>
              <Button title="Add Product" onPress={addProduct} />
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

export default CreateCategories;
