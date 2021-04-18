import { IMenuLabel } from '../../screens/Home/MenuList/MenuLabel/types';
import MenuActions from './MenuActions';

export interface IMenuState {
  Menus: IMenuLabel[];
  SetMenus?: (newMenus: IMenuLabel[]) => void;
  Loading: boolean;
}

export interface IMenuActions {
  type: MenuActions;
  payload: IMenuLabel[] | boolean;
}
