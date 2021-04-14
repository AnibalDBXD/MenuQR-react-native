import { RouteProp } from '@react-navigation/native';
import SCREENS from '../../navigation/constants';
import { RootStackParamList } from '../../navigation/types';
import { ICategory } from './Category/types';

export type MenuParams = { data: string } | undefined;

type MenuScreenNavigationProp = RouteProp<RootStackParamList, SCREENS.menu>;

export type MenuProps = {
  route: MenuScreenNavigationProp;
};

export type IMenu = {
  MenuName: string;
  Categories: ICategory[];
  id?: number | string;
};
