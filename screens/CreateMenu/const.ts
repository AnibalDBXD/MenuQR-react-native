import { ICategory, IProduct } from '../Menu/Menu/Category/types';
import { IFormValues } from './types';

export const DEFAULT_PRODUCT: IProduct = {
  ProductName: '',
  price: '',
  id: 'firstProduct',
};

export const DEFAULT_CATEGORY: ICategory = {
  CategoryName: '',
  products: [DEFAULT_PRODUCT],
  id: 'firstCategory',
};

export const INITIAL_VALUES: IFormValues = {
  title: '',
  categories: [DEFAULT_CATEGORY],
};
