import { createContext, useContext } from 'react';
import { IMenuState } from './types';

export const initialState: IMenuState = {
  Menus: [],
  Loading: true,
};

export const MenuContext = createContext<IMenuState>(initialState);

export const useMenuContext = (): IMenuState => useContext(MenuContext);
