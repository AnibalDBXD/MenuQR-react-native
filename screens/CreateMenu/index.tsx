import React, { useCallback, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ICategory, IProduct } from '../Menu/Menu/Category/types';
import { Header } from '../../common/styles/styles';
import styles from './styles';

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
  const {
    inputContainerTitle,
    inputTitle,
    inputsContainer,
    inputCategory,
    productContainer,
    productName,
    productPrice,
    AddCategoryContainer,
    CategoryTop,
    deleteButton,
  } = styles;

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
    newCategories.splice(CategoryIndex, CategoryIndex);
    setCategories(newCategories);
  };

  const RemoveProduct = (CategoryIndex: number, productIndex: number) => {
    const newCategories = [...Categories];
    const { products } = newCategories[CategoryIndex];

    products.splice(productIndex, productIndex);

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
          {Categories.map(({ CategoryName, products, id: cId }, cIndex) => (
            <View key={cId || cIndex}>
              <View style={CategoryTop}>
                <TextInput style={inputCategory} placeholder={CategoryName} />
                <TouchableOpacity
                  style={deleteButton}
                  onPress={() => RemoveCategory(cIndex)}
                >
                  <Feather name="delete" size={24} color="black" />
                </TouchableOpacity>
              </View>
              {products.map(({ ProductName, price, id: pId }, pIndex) => (
                <View key={pId || pIndex}>
                  <View style={productContainer}>
                    <TextInput style={productName} placeholder={ProductName} />
                    <TextInput
                      style={productPrice}
                      placeholder={price as string}
                    />
                    <TouchableOpacity
                      style={deleteButton}
                      onPress={() => RemoveProduct(cIndex, pIndex)}
                    >
                      <Feather name="delete" size={24} color="black" />
                    </TouchableOpacity>
                  </View>
                  {products.length - 1 === pIndex && (
                    <View style={AddCategoryContainer}>
                      <Button
                        title="Add Product"
                        onPress={() => AddProduct(cIndex)}
                      />
                    </View>
                  )}
                </View>
              ))}
              {Categories.length - 1 === cIndex && (
                <View>
                  <Button title="Add Category" onPress={AddCategory} />
                </View>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateMenu;
