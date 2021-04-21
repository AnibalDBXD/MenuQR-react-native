import { IMenuLabel } from '../../screens/Home/MenuList/MenuLabel/types';
import MenuActions from './MenuActions';

export interface IMenuState {
  Menus: IMenuLabel[];
  SetMenus?: (newMenus: IMenuLabel[]) => void;
  SetCreating?: (creating: boolean) => void;
  Loading: boolean;
  isCreating: boolean;
}

export interface IMenuActions {
  type: MenuActions;
  payload: IMenuLabel[] | boolean;
}
