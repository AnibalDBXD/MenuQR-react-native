import { StackNavigationProp } from '@react-navigation/stack';
import { ICategory } from '../Menu/Menu/Category/types';
import SCREENS from '../../navigation/constants';
import { RootStackParamList } from '../../navigation/types';

export type CreateMenuParams = undefined;

type CreateMenucreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  SCREENS.createMenu
>;

export type ICreateMenuProps = {
  navigation: CreateMenucreenNavigationProp;
};

export type IFormValues = {
  title: string;
  categories: ICategory[];
};

export type ISetFunctionProp = (field: string, value: unknown) => void;
