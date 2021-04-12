type IProduct = {
  ProductName: string;
  price: number | string;
  id: number;
};

export type ICategory = {
  CategoryName: string;
  products: IProduct[];
};
