import { IProduct } from '../../Menu/Menu/Category/types';

export type ICreateCategories = {
  name: string;
  products: IProduct[];
  id: string | number;
  removeCategory: () => void;
  handleChangeName: (e: string | React.ChangeEvent<string>) => void;
  addProduct: () => void;
  removeProduct: (productIndex: number) => void;
};
