import { HomeParams } from '../screens/Home/types';
import { MenuParams } from '../screens/Menu/types';
import { ScanQRParams } from '../screens/ScanQR/types';
import { CreateMenuParams } from '../screens/CreateMenu/types';

export type RootStackParamList = {
  Home: HomeParams;
  Menu: MenuParams;
  ScanQR: ScanQRParams;
  createMenu: CreateMenuParams;
};
