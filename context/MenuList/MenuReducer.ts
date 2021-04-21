import { IMenuLabel } from '../../screens/Home/MenuList/MenuLabel/types';
import MenuActions from './MenuActions';
import { IMenuActions, IMenuState } from './types';

const MenuReducer = (state: IMenuState, action: IMenuActions): IMenuState => {
  const { payload, type } = action;

  switch (type) {
    case MenuActions.SET_MENU_LIST:
      return {
        ...state,
        Menus: payload as IMenuLabel[],
      };

    case MenuActions.SET_LOADING:
      return {
        ...state,
        Loading: payload as boolean,
      };

    case MenuActions.SET_CREATING:
      return {
        ...state,
        isCreating: payload as boolean,
      };

    default:
      return state;
  }
};

export default MenuReducer;
