import { RouteProp } from '@react-navigation/native';
import Screens from '../../navigation/constants';
import { RootStackParamList } from '../../navigation/types';

export type MenuParams = undefined;

type MenuScreenNavigationProp = RouteProp<RootStackParamList, Screens.menu>;

export type MenuProps = {
  route: MenuScreenNavigationProp;
};
