import { IProduct } from '../../../common/interfaces';

export type ICreateCategories = {
  name: string;
  products: IProduct[];
  id: string | number;
  removeCategory: () => void;
  addProduct: () => void;
  removeProduct: (productIndex: number) => void;
  handleChangeCategoryName: (e: string | React.ChangeEvent<string>) => void;
  handleChangeProductName: (
    productIndex: number,
  ) => (e: string | React.ChangeEvent<string>) => void;
  handleChangeProductPrice: (
    productIndex: number,
  ) => (e: string | React.ChangeEvent<string>) => void;
};
