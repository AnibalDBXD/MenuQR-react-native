export type IMenu = {
  MenuName: string;
  Categories: ICategory[];
  id?: number | string;
};

export type IProduct = {
  ProductName: string;
  price: string;
  id?: number | string;
};

export type ICategory = {
  CategoryName: string;
  products: IProduct[];
  id?: number | string;
};
