import { StackNavigationProp } from '@react-navigation/stack';

import SCREENS from '../../navigation/constants';
import { RootStackParamList } from '../../navigation/types';

export type HomeParams = undefined;

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  SCREENS.home
>;

export type HomeProps = {
  navigation: HomeScreenNavigationProp;
};
