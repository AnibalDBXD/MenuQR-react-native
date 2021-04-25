import { RouteProp } from '@react-navigation/native';
import { IMenu } from '../../common/interfaces';
import SCREENS from '../../navigation/constants';
import { RootStackParamList } from '../../navigation/types';

export type MenuParams = { id?: string; data?: IMenu } | undefined;

type MenuScreenNavigationProp = RouteProp<RootStackParamList, SCREENS.menu>;

export type MenuProps = {
  route: MenuScreenNavigationProp;
};
