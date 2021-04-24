import { ICategory } from '../Menu/Menu/Category/types';
import { DEFAULT_PRODUCT } from './const';
import { ISetFunctionProp } from './types';

export const AddCategory = (
  currentvalue: ICategory[],
  setFuction: ISetFunctionProp,
): void => {
  const newValue: ICategory[] = [
    ...currentvalue,
    {
      id: Date.now().toString(),
      CategoryName: '',
      products: [DEFAULT_PRODUCT],
    },
  ];

  setFuction('categories', newValue);
};

export const RemoveCategory = (
  currentValue: ICategory[],
  setFuction: ISetFunctionProp,
  categoryIndex: number,
): void => {
  if (currentValue.length === 1) return;
  const newValue = [...currentValue];
  newValue.splice(categoryIndex, 1);
  setFuction('categories', newValue);
};

export const AddProduct = (
  currentvalue: ICategory[],
  setFuction: ISetFunctionProp,
  categoryIndex: number,
): void => {
  const newCategories = [...currentvalue];
  const { products } = newCategories[categoryIndex];

  const newProduct = { ...DEFAULT_PRODUCT, id: Date.now().toString() };

  newCategories[categoryIndex].products = [...products, newProduct];

  setFuction('categories', newCategories);
};

export const RemoveProduct = (
  currentvalue: ICategory[],
  setFuction: ISetFunctionProp,
  categoryIndex: number,
  productIndex: number,
): void => {
  const newCategories = [...currentvalue];
  const { products } = newCategories[categoryIndex];

  products.splice(productIndex, 1);

  newCategories[categoryIndex].products = products;

  setFuction('categories', newCategories);
};
