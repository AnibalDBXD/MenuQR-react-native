import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { ICreateCategories } from './types';
import CreateProducts from './CreateProducts';

import styles from './styles';
import DeleteButton from '../../../components/DeleteButton';

const CreateCategories: React.FC<ICreateCategories> = ({
  id,
  name,
  products,
  removeCategory,
  addProduct,
}): JSX.Element => {
  const { CategoryTop, inputCategory, AddCategoryContainer } = styles;
  return (
    <View key={id}>
      <View style={CategoryTop}>
        <TextInput style={inputCategory} placeholder={name} />
        <DeleteButton handlePress={removeCategory} />
      </View>
      {products.map(({ ProductName, price, id: pId }, index) => (
        <>
          <CreateProducts
            id={pId || index}
            name={ProductName}
            price={price as string}
          />
          {products.length - 1 === index && (
            <View style={AddCategoryContainer}>
              <Button title="Add Product" onPress={addProduct} />
            </View>
          )}
        </>
      ))}
    </View>
  );
};

export default CreateCategories;
