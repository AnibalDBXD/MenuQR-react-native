import { StackNavigationProp } from '@react-navigation/stack';

import SCREENS from '../../navigation/constants';
import { RootStackParamList } from '../../navigation/types';

export type ScanQRParams = undefined;

type QRScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  SCREENS.ScanQR
>;

export type QRProps = {
  navigation: QRScreenNavigationProp;
};
