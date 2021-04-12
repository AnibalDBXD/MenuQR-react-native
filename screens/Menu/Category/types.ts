type IProduct = {
  ProductName: string;
  price: number | string;
  id?: number | string;
};

export type ICategory = {
  CategoryName: string;
  products: IProduct[];
  id?: number | string;
};
