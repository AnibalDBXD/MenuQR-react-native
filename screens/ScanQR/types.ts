import { StackNavigationProp } from '@react-navigation/stack';

import Screens from '../../navigation/constants';
import { RootStackParamList } from '../../navigation/types';

export type ScanQRParams = undefined;

type QRScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  Screens.ScanQR
>;

export type QRProps = {
  navigation: QRScreenNavigationProp;
};
