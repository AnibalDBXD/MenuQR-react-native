export type ICreateProducts = {
  name: string;
  price: string;
  id: string | number;
  removeProduct: () => void;
  handleChangeProductName: (e: string | React.ChangeEvent<string>) => void;
  handleChangeProductPrice: (e: string | React.ChangeEvent<string>) => void;
};
