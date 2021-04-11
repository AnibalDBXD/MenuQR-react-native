import { StackNavigationProp } from '@react-navigation/stack';

import Screens from '../../navigation/constants';
import { RootStackParamList } from '../../navigation/types';

export type HomeParams = undefined;

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  Screens.home
>;

export type HomeProps = {
  navigation: HomeScreenNavigationProp;
};
