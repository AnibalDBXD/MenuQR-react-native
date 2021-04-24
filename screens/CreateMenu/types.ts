import { ICategory } from '../Menu/Menu/Category/types';

export type IFormValues = {
  title: string;
  categories: ICategory[];
};

export type ISetFunctionProp = (field: string, value: unknown) => void;
