export type ICreateProducts = {
  name: string;
  price: string;
  id: string | number;
  removeProduct: () => void;
};
