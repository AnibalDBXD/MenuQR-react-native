import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { useFormikContext } from 'formik';
import { ICreateCategories } from './types';
import CreateProducts from './CreateProducts';

import styles from './styles';
import DeleteButton from '../../../components/DeleteButton';
import { AddCategory, RemoveCategory } from '../utils';
import { IFormValues } from '../types';

const CreateCategories: React.FC<ICreateCategories> = ({
  index,
}): JSX.Element => {
  const { CategoryTop, inputCategory, addCategoryButtonContainer } = styles;

  const {
    handleChange,
    values,
    setFieldValue,
  } = useFormikContext<IFormValues>();

  const handleChangeCategoryName = handleChange(
    `categories[${index}].CategoryName`,
  );

  const { CategoryName, products } = values.categories[index];

  const removeCategory = () =>
    RemoveCategory(values.categories, setFieldValue, index);

  const addCategory = () => AddCategory(values.categories, setFieldValue);

  return (
    <>
      <View>
        <View style={CategoryTop}>
          <TextInput
            value={CategoryName}
            style={inputCategory}
            onChangeText={handleChangeCategoryName}
            placeholder="Category name"
          />
          <DeleteButton handlePress={removeCategory} />
        </View>
        {products.map(({ id: pId }, pIndex) => (
          <View key={pId || pIndex}>
            <CreateProducts
              id={pId || pIndex}
              index={pIndex}
              categoryIndex={index}
            />
          </View>
        ))}
      </View>
      {values.categories.length - 1 === index && (
        <View style={addCategoryButtonContainer}>
          <Button title="Add Category" onPress={addCategory} />
        </View>
      )}
    </>
  );
};

export default CreateCategories;
