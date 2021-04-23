import React, { useCallback, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, View, Text, TextInput, Button } from 'react-native';
import { ICategory, IProduct } from '../Menu/Menu/Category/types';
import { Header } from '../../common/styles/styles';
import styles from './styles';

import CreateCategories from './CreateCategories';

const DEFAULT_PRODUCT: IProduct = {
  ProductName: 'new Product',
  price: '1$',
  id: 'FuncionaPorfavor',
};

const DEFAULT_CATEGORY: ICategory = {
  CategoryName: 'new Category',
  products: [DEFAULT_PRODUCT],
  id: 'daleporfisfunciona',
};

const CreateMenu: React.FC = (): JSX.Element => {
  const { header, headerText } = Header;
  const { inputContainerTitle, inputTitle, inputsContainer } = styles;

  const [Categories, setCategories] = useState<ICategory[]>([DEFAULT_CATEGORY]);

  const [, updateState] = useState<unknown>();
  const forceUpdate = useCallback(() => updateState({}), []);

  const AddProduct = (CategoryIndex: number) => {
    const newCategories = [...Categories];
    const { products } = newCategories[CategoryIndex];

    const newProduct = { ...DEFAULT_PRODUCT, id: Date.now().toString() };

    newCategories[CategoryIndex].products = [...products, newProduct];

    setCategories(newCategories);
    forceUpdate();
  };

  const AddCategory = () => {
    setCategories([
      ...Categories,
      {
        ...DEFAULT_CATEGORY,
        id: Date.now().toString(),
        products: [DEFAULT_PRODUCT],
      },
    ]);
  };

  const RemoveCategory = (CategoryIndex: number) => {
    const newCategories = [...Categories];
    newCategories.splice(CategoryIndex, 1);
    setCategories(newCategories);
  };

  const RemoveProduct = (CategoryIndex: number, productIndex: number) => {
    const newCategories = [...Categories];
    const { products } = newCategories[CategoryIndex];

    products.splice(productIndex, 1);

    newCategories[CategoryIndex].products = products;

    setCategories(newCategories);
    forceUpdate();
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={header}>
          <Text style={headerText}>Create your own menu</Text>
        </View>
        <View style={inputsContainer}>
          <View style={inputContainerTitle}>
            <TextInput style={inputTitle} placeholder="Menu title" />
          </View>
          {Categories.map(({ CategoryName, products, id }, index) => (
            <>
              <CreateCategories
                name={CategoryName}
                products={products}
                id={id || index}
                removeCategory={() => RemoveCategory(index)}
                addProduct={() => AddProduct(index)}
              />
              {Categories.length - 1 === index && (
                <View>
                  <Button title="Add Category" onPress={AddCategory} />
                </View>
              )}
            </>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateMenu;
