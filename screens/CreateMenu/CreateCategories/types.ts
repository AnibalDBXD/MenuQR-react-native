import { IProduct } from '../../Menu/Menu/Category/types';

export type ICreateCategories = {
  name: string;
  products: IProduct[];
  id: string | number;
  removeCategory: () => void;
  addProduct: () => void;
};
